// Captura das 4 abas com o app "em uso" (aluna de teste, servidor LOCAL 3010, banco de homologação).
// uso: U=... P=... node abas3.cjs <saida> "<pergunta>"
const { chromium } = require('/Users/viniciusbenavides/.npm/_npx/84adb78d930392e0/node_modules/playwright-core');
const fs = require('fs');
const BASE = 'http://localhost:3010';
const LIMPA = 'nextjs-portal{display:none!important}';
(async () => {
  const [, , out, pergunta] = process.argv;
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, locale: 'pt-BR' });
  const p = await ctx.newPage();
  await p.goto(BASE + '/entrar', { waitUntil: 'networkidle' });
  await p.fill('#email', process.env.U);
  await p.fill('#password', process.env.P);
  await Promise.all([p.waitForURL((u) => !u.pathname.startsWith('/entrar'), { timeout: 60000 }), p.click('button[type=submit]')]);
  const ir = async (rota) => { await p.goto(BASE + rota, { waitUntil: 'networkidle', timeout: 90000 }); await p.waitForTimeout(1800); await p.addStyleTag({ content: LIMPA }); };
  const vp = async (nome) => { await p.waitForTimeout(500); await p.screenshot({ path: `${out}/${nome}.png` }); console.log(nome, 'ok'); };
  const cheia = async (nome) => {
    await p.evaluate(() => {
      for (const el of document.querySelectorAll('body *')) {
        const cs = getComputedStyle(el); const bb = el.getBoundingClientRect();
        if ((cs.position === 'fixed' || cs.position === 'sticky') && bb.bottom >= innerHeight - 2 && bb.height < 200) el.style.setProperty('visibility', 'hidden', 'important');
      }
    });
    await p.screenshot({ path: `${out}/${nome}_full.png`, fullPage: true });
    console.log(nome, 'cheia ok');
  };

  // 1) uso: fecha o convite da comunidade, marca o café da manhã e 1 litro de água
  await ir('/inicio');
  const grupo = p.getByRole('button', { name: /Já estou no grupo/i });
  if (await grupo.count()) { await grupo.click(); await p.waitForTimeout(1200); }
  await ir('/plano?refeicao=breakfast');
  await vp('refeicao_vp');
  const comi = p.getByRole('button', { name: /Comi tudo como no plano/i });
  if (await comi.count()) { await comi.click(); await p.waitForTimeout(2500); await vp('refeicao_comi_vp'); }
  await ir('/inicio');
  for (let i = 0; i < 4; i++) {
    const agua = p.getByRole('button', { name: /Somar 250 ml de água/i });
    if (!(await agua.count())) break;
    await agua.click(); await p.waitForTimeout(1300);
  }

  // 2) as quatro abas
  await ir('/inicio'); await vp('inicio_vp'); await cheia('inicio');
  await ir('/plano'); await vp('plano_vp'); await cheia('plano');
  await ir('/registrar'); await vp('registrar_vp'); await cheia('registrar');
  await ir('/conversa'); await vp('conversa_vazia_vp');
  const nav = p.locator('nav').last();
  await nav.screenshot({ path: `${out}/nav_chat.png` }).catch(() => {});

  // 3) pergunta de verdade para a Mia
  if (pergunta) {
    await p.getByPlaceholder(/Escreva sua mensagem/i).fill(pergunta);
    await vp('conversa_digitada_vp');
    const enviar = p.getByRole('button', { name: /enviar/i });
    console.log('botões enviar:', await enviar.count());
    await enviar.first().click();
    await p.waitForTimeout(1500);
    await vp('conversa_enviada_vp');
    await p.waitForFunction(() => !/pensando/i.test(document.body.innerText) && /\S/.test(document.body.innerText), null, { timeout: 90000 }).catch(() => console.log('timeout'));
    await p.waitForTimeout(3000);
    await p.addStyleTag({ content: LIMPA });
    await vp('conversa_resposta_vp');
  }
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
