"""Compara cada tela do /quiz-mia?ver=<cod> com o HTML original do Stitch, pixel a pixel.

Uso: python compara.py [--url http://localhost:3311] [--larg 390] [cod ...]
Saída: scripts/quiz-mia/_compara/<cod>.png (Stitch | site | diferença) e um resumo com % de pixels diferentes.
Precisa de playwright, pillow e numpy (pip) e do Chrome instalado.
"""
import os, re, sys, tempfile
import numpy as np
from PIL import Image, ImageChops
from playwright.sync_api import sync_playwright

AQUI = os.path.dirname(os.path.abspath(__file__))
FOTO = os.path.abspath(os.path.join(AQUI, "../../public/images/quiz-mia/michelly.jpg"))
args = sys.argv[1:]
url = "http://localhost:3311"
larg = 390
if "--url" in args:
    i = args.index("--url"); url = args[i + 1]; del args[i:i + 2]
if "--larg" in args:
    i = args.index("--larg"); larg = int(args[i + 1]); del args[i:i + 2]
cods = args or sorted(f[:-5] for f in os.listdir(os.path.join(AQUI, "stitch")) if f.endswith(".html"))
OUT = os.path.join(AQUI, "_compara"); os.makedirs(OUT, exist_ok=True)
tmp = tempfile.mkdtemp()

ESPERA = "document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,600)))"
CONGELA = "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important} nextjs-portal{display:none!important}"


def foto(pg, alvo):
    pg.add_style_tag(content=CONGELA)
    pg.evaluate(ESPERA)
    pg.screenshot(path=alvo, full_page=True)
    return Image.open(alvo).convert("RGB")


res = []
with sync_playwright() as p:
    b = p.chromium.launch(channel="chrome")
    pg = b.new_page(viewport={"width": larg, "height": 884}, device_scale_factor=1)
    for cod in cods:
        html = open(os.path.join(AQUI, "stitch", f"{cod}.html")).read()
        html = re.sub(r'https://lh3\.googleusercontent\.com/aida[^"\']+', "file://" + FOTO, html)
        f = os.path.join(tmp, f"{cod}.html"); open(f, "w").write(html)
        pg.goto("file://" + f, wait_until="networkidle"); pg.wait_for_timeout(1200)
        a = foto(pg, os.path.join(tmp, f"{cod}_a.png"))
        pg.goto(f"{url}/quiz-mia?ver={cod}", wait_until="networkidle"); pg.wait_for_timeout(500)
        s = foto(pg, os.path.join(tmp, f"{cod}_b.png"))
        W, H = max(a.width, s.width), max(a.height, s.height)
        A = Image.new("RGB", (W, H), "white"); A.paste(a)
        S = Image.new("RGB", (W, H), "white"); S.paste(s)
        d = np.asarray(ImageChops.difference(A, S)).max(axis=2) > 24
        pct = d.mean() * 100
        m = Image.fromarray((~d * 255).astype("uint8")).convert("RGB")
        lado = Image.new("RGB", (W * 3 + 20, H), "white")
        lado.paste(A, (0, 0)); lado.paste(S, (W + 10, 0)); lado.paste(m, (2 * W + 20, 0))
        lado.save(os.path.join(OUT, f"{cod}.png"))
        res.append((cod, pct, a.height, s.height))
        print(f"{cod:4s} {pct:6.2f}%  alturas stitch={a.height} site={s.height}", flush=True)
    b.close()
