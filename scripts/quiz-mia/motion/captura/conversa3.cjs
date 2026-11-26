// Conversa para o motion da oferta: a pergunta já enviada (de verdade) + estado "pensando" + resposta da Mia
// desenhada com as MESMAS classes do ChatMessages.tsx (o chat com IA está desligado na homologação).
// TEXTO DE DEMONSTRAÇÃO: precisa da validação da Michelly.
const { chromium } = require('/Users/viniciusbenavides/.npm/_npx/84adb78d930392e0/node_modules/playwright-core');
const BASE = 'http://localhost:3010';
const LIMPA = 'nextjs-portal{display:none!important}';
const RESPOSTA = [
  'Dá para ir e aproveitar, sem estragar o seu dia. Três coisas:',
  '',
  '1. Antes de sair, faça o lanche da tarde do seu plano, com a proteína. Chegar com fome é o que faz exagerar.',
  '2. Na festa, comece pela carne, pelo frango ou pelos salgados assados. Doce, um pedaço, e no fim.',
  '3. Entre um copo e outro, água.',
  '',
  'Amanhã você segue o plano normal, sem compensar.',
].join('\n');
(async () => {
  const out = process.argv[2];
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, locale: 'pt-BR' });
  const p = await ctx.newPage();
  await p.goto(BASE + '/entrar', { waitUntil: 'networkidle' });
  await p.fill('#email', process.env.U);
  await p.fill('#password', process.env.P);
  await Promise.all([p.waitForURL((u) => !u.pathname.startsWith('/entrar'), { timeout: 60000 }), p.click('button[type=submit]')]);
  await p.goto(BASE + '/conversa', { waitUntil: 'networkidle', timeout: 90000 });
  await p.waitForTimeout(2500);
  await p.addStyleTag({ content: LIMPA });
  // some "Carregar mensagens anteriores" (não há nada antes) e o "Enviando…"
  await p.evaluate(() => {
    for (const el of document.querySelectorAll('button')) if (/Carregar mensagens anteriores/.test(el.innerText)) el.closest('div').style.visibility = 'hidden';
  });
  await p.screenshot({ path: `${out}/c3_enviada_vp.png` });
  // "A MIA está pensando…" (mesmo markup do ChatRoom.tsx)
  await p.evaluate(() => {
    const ol = document.querySelector('ol[aria-live]');
    const d = document.createElement('div');
    d.id = 'pensa';
    d.className = 'mb-2 ml-1 mt-2 inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600';
    d.innerHTML = '<span class="bg-floresta/70 h-2 w-2 animate-pulse rounded-full"></span>A MIA está pensando…';
    ol.after(d);
  });
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${out}/c3_pensando_vp.png` });
  await p.evaluate((texto) => {
    document.getElementById('pensa')?.remove();
    const ol = document.querySelector('ol[aria-live]');
    const li = document.createElement('li');
    li.innerHTML = `<div class="flex justify-start"><div class="min-w-0 max-w-[85%] rounded-2xl px-3.5 py-2 rounded-bl-md border border-l-[3px] border-neutral-200 border-l-[#d9a441] bg-white text-neutral-900">
      <p class="text-floresta text-xs font-semibold">MIA</p>
      <p class="whitespace-pre-wrap text-[15px] leading-snug"></p>
      <div class="mt-1.5 text-xs text-neutral-600"><span class="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2 py-0.5">ⓘ De onde vem isso</span></div>
      <p class="mt-0.5 text-right text-[11px] opacity-60">22:46</p></div></div>`;
    li.querySelector('.whitespace-pre-wrap').textContent = texto;
    ol.appendChild(li);
    const sc = ol.closest('.overflow-y-auto'); if (sc) sc.scrollTop = sc.scrollHeight;
  }, RESPOSTA);
  await p.waitForTimeout(500);
  await p.screenshot({ path: `${out}/c3_resposta_vp.png` });
  console.log('ok');
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
