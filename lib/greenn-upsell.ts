// ─── Script de compra do upsell (Greenn) + rastreio de UTM ───────────────────
// Usado pela /obg-mmf, /obg-mmf-down e /alunos-metodo-mmf. Devolve o JS que roda na página
// (inline, afterInteractive). Faz quatro coisas:
//
// 1. Descobre as UTMs da sessão: primeiro a URL da página (link de e-mail),
//    senão o cookie `mff_utm` gravado pelo script global do layout quando a
//    pessoa entrou no site (VSL) com utm_* na URL. A Greenn devolve a compradora
//    pra página de obrigado com URL limpa (só token/s_id), por isso o cookie.
// 2. Carimba as UTMs nos links de checkout nossos (`a[data-mff-checkout-link]`,
//    hoje o de recuperação de Pix). O checkout da Greenn grava UTM que vem na URL.
// 3. SEM token na URL (e-mail, link direto): one-click é impossível — o upsell.js
//    só redirecionaria pro checkout completo com `?up_id=` e sem UTM. Então o
//    botão da Greenn vira um <a> direto pro checkout da mesma oferta (atributo
//    data-mff-checkout do botão) com up_id + UTMs, e o upsell.js nem é carregado.
// 4. COM token: mantém o one-click. Envolve window.fetch pra acrescentar utm_*
//    no corpo do POST /api/upsell da Greenn. Se o backend deles gravar, a venda
//    do upsell sai com UTM; se ignorar, não quebra nada (campos extras).
//    → Validar com uma compra de teste e conferir a venda no painel.
//
// Fontes (upsell.js da Greenn, lido em 2026-09-11): o payload do one-click é
// {product_id, upsell_id, token, installments, method, hash_offer, sale_id};
// sem token válido ele faz location.href = <checkout>/<produto>/offer/<hash>?up_id=<id>.
// O namespace do script fica em window._wf; ele acha o botão por [data-greenn-upsell].
//
// ?greenn_validate=1 (validação de instalação pelo painel da Greenn) não mexe em nada.

export const UTM_COOKIE = "mff_utm";
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export function greennUpsellScript() {
  return `window.startLoading = function(button) {
  const originalHTML = button.innerHTML;
  button.setAttribute('data-loading', 'true');
  button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>';
  setTimeout(() => {
    button.setAttribute('data-loading', 'false');
    button.innerHTML = originalHTML;
  }, 3000);
};
(function (w, d) {
  var UTM_KEYS = ${JSON.stringify(UTM_KEYS)};
  var COOKIE = ${JSON.stringify(UTM_COOKIE)};
  var params = new URLSearchParams(w.location.search);
  var token = params.get("token");

  // Ignora o utm_source=direto que a UTMify (via GTM) escreve na URL quando a
  // página abre sem UTM — senão ele venceria o cookie com a campanha real.
  function fromUrl() {
    var o = {}, any = false;
    UTM_KEYS.forEach(function (k) { var v = params.get(k); if (v) { o[k] = v; any = true; } });
    if (!any) return null;
    if (Object.keys(o).length === 1 && o.utm_source === "direto") return null;
    return o;
  }
  function fromCookie() {
    try {
      var m = d.cookie.match(new RegExp("(?:^|; )" + COOKIE + "=([^;]*)"));
      if (!m) return null;
      var o = JSON.parse(decodeURIComponent(m[1]));
      return o && typeof o === "object" ? o : null;
    } catch (e) { return null; }
  }
  var utms = fromUrl() || fromCookie() || {};
  var hasUtm = UTM_KEYS.some(function (k) { return !!utms[k]; });
  w.__mffUtms = utms;

  function withUtms(href, extra) {
    try {
      var u = new URL(href, w.location.href);
      Object.keys(extra || {}).forEach(function (k) { u.searchParams.set(k, extra[k]); });
      UTM_KEYS.forEach(function (k) { if (utms[k]) u.searchParams.set(k, utms[k]); });
      return u.toString();
    } catch (e) { return href; }
  }

  function loadGreenn() {
    var t = Date.now();
    if (w._greennUp) return;
    w._greennUp = t;
    var f = d.getElementsByTagName("script")[0], j = d.createElement("script");
    j.async = true;
    j.src = "https://payfast.greenn.com.br/assets/upsell.js?v=" + t;
    f.parentNode.insertBefore(j, f);
  }

  // 2) Links de checkout nossos ganham as UTMs.
  d.querySelectorAll("a[data-mff-checkout-link]").forEach(function (a) { a.href = withUtms(a.href); });

  if (params.get("greenn_validate") === "1") { loadGreenn(); return; }

  // 3) Sem token: cada botão vira link direto pro checkout dele (up_id + UTMs).
  if (!token) {
    d.querySelectorAll("button[data-greenn-upsell][data-mff-checkout]").forEach(function (btn) {
      var a = d.createElement("a");
      a.href = withUtms(btn.getAttribute("data-mff-checkout"), { up_id: btn.getAttribute("data-greenn-upsell") });
      a.className = btn.className;
      a.innerHTML = btn.innerHTML;
      a.setAttribute("data-mff-checkout-link", "");
      btn.parentNode.replaceChild(a, btn);
    });
    return;
  }

  // 4) Com token: one-click. Acrescenta utm_* no POST /api/upsell.
  if (hasUtm && typeof w.fetch === "function") {
    var _fetch = w.fetch;
    w.fetch = function (input, init) {
      try {
        var url = typeof input === "string" ? input : (input && input.url) || "";
        var method = ((init && init.method) || (input && input.method) || "GET").toUpperCase();
        if (method === "POST" && /\\/api\\/upsell\\/?$/.test(url.split("?")[0]) && init && typeof init.body === "string") {
          var body = JSON.parse(init.body);
          if (body && typeof body === "object" && !Array.isArray(body)) {
            UTM_KEYS.forEach(function (k) { if (utms[k] && body[k] == null) body[k] = utms[k]; });
            init = Object.assign({}, init, { body: JSON.stringify(body) });
          }
        }
      } catch (e) {}
      return _fetch.call(this, input, init);
    };
  }
  loadGreenn();
})(window, document);`;
}
