"""Percorre o /quiz-mia do começo ao fim como uma usuária (celular 390x844), tirando uma foto de cada tela.

Uso: python percorre.py [--url http://localhost:3311] [--caminho ana|leve]
  ana  = caminho do Stitch (3 alertas graves)
  leve = melhor resultado possível (2 em atenção, 1 sob controle)
Saída: scripts/quiz-mia/_percorre/<n>_<tela>.png e a lista de erros do console.
"""
import os, sys
from playwright.sync_api import sync_playwright

AQUI = os.path.dirname(os.path.abspath(__file__))
args = sys.argv[1:]
url = args[args.index("--url") + 1] if "--url" in args else "http://localhost:3311"
caminho = args[args.index("--caminho") + 1] if "--caminho" in args else "ana"
OUT = os.path.join(AQUI, "_percorre", caminho)
os.makedirs(OUT, exist_ok=True)
for f in os.listdir(OUT):
    os.remove(os.path.join(OUT, f))

# resposta (índice da opção) por tela, em cada caminho
R = {
    "ana": {"01": 1, "02": 0, "04": 0, "05": 0, "07b": 1, "08": 1, "09": [1, 2], "10": 0, "11": 2, "12": [0, 1], "13": 0,
            "15": 0, "16": [0, 1, 5], "17": [0], "18": 2, "20": 1, "23": 1, "24": 4},
    "leve": {"01": 3, "02": 1, "04": 2, "05": 1, "07b": 0, "08": 0, "09": [6], "10": 0, "11": 2, "12": [0], "13": 2,
             "15": 1, "16": [2, 3], "17": [5], "18": 0, "20": 3, "23": 2, "24": 2},
}[caminho]

erros = []
with sync_playwright() as p:
    b = p.chromium.launch(channel="chrome")
    ctx = b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, has_touch=True, is_mobile=True)
    pg = ctx.new_page()
    pg.on("console", lambda m: erros.append(m.text) if m.type == "error" else None)
    pg.on("pageerror", lambda e: erros.append(str(e)))
    pg.goto(f"{url}/quiz-mia", wait_until="networkidle")
    pg.evaluate("sessionStorage.clear(); localStorage.removeItem('quiz-mia:promo-fim')")
    pg.reload(wait_until="networkidle")
    n = 0
    vistas = []

    def tela():
        return pg.evaluate("document.querySelector('[data-tela]')?.getAttribute('data-tela')")

    def foto(cod):
        global n
        n += 1
        pg.wait_for_timeout(450)
        pg.screenshot(path=os.path.join(OUT, f"{n:02d}_{cod}.png"), full_page=True)

    def opcoes():
        # alvos clicáveis das opções, na ordem da tela
        return pg.locator("[data-tela] [role=radio], [data-tela] [role=checkbox], [data-tela] [role=radiogroup] > button")

    def botao(*textos):
        for t in textos:
            loc = pg.get_by_role("button", name=t, exact=False)
            if loc.count():
                loc.last.click()
                return True
        return False

    for passo in range(60):
        cod = tela()
        if not cod:
            pg.wait_for_timeout(500)
            continue
        vistas.append(cod)
        foto(cod)
        r = R.get(cod)
        if cod == "07a":
            pg.wait_for_function("document.querySelector('[data-tela]')?.getAttribute('data-tela') !== '07a'", timeout=9000)
        elif cod == "26":
            pg.wait_for_function("document.querySelector('[data-tela]')?.getAttribute('data-tela') !== '26'", timeout=12000)
        elif isinstance(r, list):
            ops = opcoes()
            for i in r:
                ops.nth(i).click()
            foto(cod + "-marcado")
            botao("Continuar")
        elif isinstance(r, int):
            if cod == "24":
                pg.locator("[data-tela] button", has_text=str(r + 1)).first.click()
            else:
                opcoes().nth(r).click()
            pg.wait_for_function(f"document.querySelector('[data-tela]')?.getAttribute('data-tela') !== '{cod}'", timeout=6000)
        elif cod in ("22a", "22b"):
            mais = pg.get_by_role("button", name="+", exact=False)
            if mais.count():
                mais.first.click()
            botao("Continuar")
        elif cod == "25":
            pg.locator("[data-tela] input").first.fill("Ana")
            botao("Ver o meu diagnóstico")
        elif cod == "27":
            pg.locator("[data-tela] input[type=email]").first.fill("ana@exemplo.com")
            botao("Ver o meu resultado")
        elif cod == "29a":
            card = pg.locator("#scratchCard").bounding_box()
            pg.mouse.move(card["x"] + 10, card["y"] + 20)
            pg.mouse.down()
            for k in range(7):
                y = card["y"] + 15 + k * 28
                pg.mouse.move(card["x"] + 5, y, steps=4)
                pg.mouse.move(card["x"] + card["width"] - 5, y, steps=12)
                if k == 2:
                    foto("29a-raspando")
            pg.mouse.up()
            pg.wait_for_timeout(300)
            if tela() == "29a":
                botao("Revelar sem raspar")
        elif cod == "30a":
            pg.locator("[data-tela] [role=radio]").nth(0).click()
            foto("30a-4semanas")
            pg.get_by_role("button", name="Funciona com Mounjaro?").click()
            foto("30a-faq")
            botao("Começar o meu plano")
            pg.wait_for_timeout(500)
            break
        else:
            if not botao("Continuar", "Fazer o teste", "Montar o meu plano", "Resolver o", "Ver o meu plano com desconto"):
                print("sem ação na tela", cod)
                break
        pg.wait_for_timeout(350)
    b.close()

print("telas:", " ".join(vistas))
print("erros:", erros or "nenhum")
