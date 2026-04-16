"use client"

import { useEffect, useRef } from "react"

// v4 - rebuild forcado
export default function Home() {
  const diagWrapRef = useRef<HTMLDivElement>(null)
  const tipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Countdown
    function tick() {
      const d = new Date("2026-04-02T23:59:59").getTime() - new Date().getTime()
      if (d <= 0) return
      const pad = (n: number) => String(Math.floor(n)).padStart(2, "0")
      const D = d / 864e5
      const H = (d % 864e5) / 36e5
      const M = (d % 36e5) / 6e4
      const S = (d % 6e4) / 1e3
      const vals = [D, H, M, S]
      ;["d", "h", "m", "s"].forEach((k, i) => {
        const v = pad(vals[i])
        const el1 = document.getElementById("cd-" + k)
        const el2 = document.getElementById("sb-" + k)
        if (el1) el1.textContent = v
        if (el2) el2.textContent = v
      })
    }
    tick()
    const interval = setInterval(tick, 1000)

    // Reveal animation
    const rvEls = document.querySelectorAll(".rv")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on")
        })
      },
      { threshold: 0.07, rootMargin: "0px 0px -28px 0px" }
    )
    rvEls.forEach((el) => io.observe(el))

    // Diagram
    const P = [
      { s: "Mental", d: "Elimina gatilhos emocionais que sabotam qualquer tratamento." },
      { s: "Metabólica", d: "Entende o impacto das canetas no sistema hormonal feminino." },
      { s: "Nutrição", d: "Cardápios adaptados ao momento exato do tratamento." },
      { s: "Suplem.", d: "O que tomar, quanto, quando e por quê para preservar saúde." },
      { s: "Intestino", d: "Protocolos SOS para constipação, diarreia e inchaços." },
      { s: "Desmame", d: "Começa no primeiro dia. A fase mais importante do protocolo." },
    ]
    const cx = 220,
      cy = 220,
      ri = 103,
      ro = 200,
      gap = 0.045
    const cols = ["#6FC596", "#4A5F50", "#7AA88A", "#5A7060", "#8CB89A", "#3E5244"]
    const NS = "http://www.w3.org/2000/svg"
    const seg = document.getElementById("segs")
    const lbl = document.getElementById("dlbls")
    const tip = tipRef.current
    const wrap = diagWrapRef.current

    if (seg && lbl && tip && wrap) {
      P.forEach((p, i) => {
        const a0 = (i * Math.PI * 2) / 6 - Math.PI / 2 + gap
        const a1 = ((i + 1) * Math.PI * 2) / 6 - Math.PI / 2 - gap
        const x1 = cx + ri * Math.cos(a0),
          y1 = cy + ri * Math.sin(a0)
        const x2 = cx + ro * Math.cos(a0),
          y2 = cy + ro * Math.sin(a0)
        const x3 = cx + ro * Math.cos(a1),
          y3 = cy + ro * Math.sin(a1)
        const x4 = cx + ri * Math.cos(a1),
          y4 = cy + ri * Math.sin(a1)
        const path = document.createElementNS(NS, "path")
        path.setAttribute(
          "d",
          `M${x1} ${y1}L${x2} ${y2}A${ro} ${ro} 0 0 1 ${x3} ${y3}L${x4} ${y4}A${ri} ${ri} 0 0 0 ${x1} ${y1}Z`
        )
        path.setAttribute("fill", cols[i])
        path.setAttribute("opacity", "0.8")
        path.style.cursor = "pointer"
        path.style.transition = "opacity .2s"
        path.addEventListener("mouseenter", (e) => {
          path.setAttribute("opacity", "1")
          tip.textContent = `${i + 1}. ${p.s}: ${p.d}`
          tip.classList.add("on")
          const r = wrap.getBoundingClientRect()
          const mouseEvent = e as MouseEvent
          tip.style.left = Math.min(mouseEvent.clientX - r.left + 12, r.width - 200) + "px"
          tip.style.top = Math.max(mouseEvent.clientY - r.top - 50, 4) + "px"
        })
        path.addEventListener("mouseleave", () => {
          path.setAttribute("opacity", "0.8")
          tip.classList.remove("on")
        })
        seg.appendChild(path)
        const am = (a0 + a1) / 2,
          rm = ri + (ro - ri) * 0.5
        const lx = cx + rm * Math.cos(am),
          ly = cy + rm * Math.sin(am)
        const t1 = document.createElementNS(NS, "text")
        t1.setAttribute("x", String(lx))
        t1.setAttribute("y", String(ly - 5))
        t1.setAttribute("text-anchor", "middle")
        t1.setAttribute("fill", "rgba(255,255,255,.92)")
        t1.setAttribute("font-size", "14")
        t1.setAttribute("font-weight", "700")
        t1.setAttribute("font-family", "DM Sans,sans-serif")
        t1.textContent = `0${i + 1}`
        lbl.appendChild(t1)
        const t2 = document.createElementNS(NS, "text")
        t2.setAttribute("x", String(lx))
        t2.setAttribute("y", String(ly + 13))
        t2.setAttribute("text-anchor", "middle")
        t2.setAttribute("fill", "rgba(255,255,255,.88)")
        t2.setAttribute("font-size", "12.5")
        t2.setAttribute("font-family", "DM Sans,sans-serif")
        t2.textContent = p.s
        lbl.appendChild(t2)
      })
    }

    return () => {
      clearInterval(interval)
      io.disconnect()
    }
  }, [])

  return (
    <>
      {/* STICKY BAR */}
      <div id="sbar">
        <span className="sbar-txt">As vagas fecham em</span>
        <div className="sbar-cd">
          <span id="sb-d">--</span>d<span id="sb-h">--</span>h<span id="sb-m">--</span>m<span id="sb-s">--</span>s
        </div>
        <div className="sbar-divider"></div>
        <a href="#oferta" className="sbar-btn">
          Garantir minha vaga
        </a>
      </div>

      {/* HERO */}
      <section id="hero" className="sec" style={{ paddingTop: "52px", paddingBottom: 0 }}>
        <div className="hero-grid">
          <div className="hero-left rv">
            <h1 className="h1" style={{ marginBottom: "22px" }}>
              Você chegou até aqui porque quer
              <br />
              emagrecer de verdade e transformar
              <br />
              sua vida para sempre — <em style={{ color: "var(--forest)" }}>não por 6 meses até parar a caneta</em>
            </h1>
            <p className="hero-sub">
              O Método Metabólico Feminino é o protocolo completo que faltava no seu tratamento: do primeiro dia de uso
              até depois do desmame — para que você não tenha os efeitos não desejados, que o resultado seja
              potencializado com a menor dose e que seja uma transformação para sempre, com ou sem medicação.
            </p>
            <a href="#oferta" className="btn btn-mint">
              Quero emagrecer mais e melhor
              <span className="arr">→</span>
            </a>
          </div>

        </div>
        <div className="scroll-hint">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <rect x="9" y="3" width="6" height="10" rx="3" stroke="#8B6E4E" strokeWidth="1.5" />
            <path
              d="M12 15v6M8 19l4 4 4-4"
              stroke="#8B6E4E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* DOR */}
      <section id="pain" className="sec">
        <div className="cnt">
          <div className="pain-grid">
            <div className="rv pain-left">
              <div className="chip d">O que você está sentindo</div>
              <h2 className="h2">
                Você provavelmente já sente — ou vai sentir — pelo menos uma dessas <em>coisas</em>
              </h2>
              <p className="pain-lead" style={{ marginTop: "16px" }}>
                Esses sintomas não são coincidência. São sinais do seu corpo pedindo mais do que a caneta pode oferecer
                sozinha.
              </p>
              <div className="pain-quote">
                {'"'}E quando eu parar a caneta, o que vai acontecer?{'"'}
                <small>A preocupação de mais de 70% das mulheres que usam as canetas</small>
              </div>
            </div>
            <div className="pain-items rv d2">
              <div className="pi">
                <div className="pi-ico">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path
                      d="M12 3c-1.5 0-3 1.5-3 4.5 0 2.5 1 4.5 2 6.5s1.5 4 0 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 5c-1 0-2 1-2 3 0 2 .8 3.5 1.5 5S8.5 17 7 19"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 5c1 0 2 1 2 3 0 2-.8 3.5-1.5 5S15.5 17 17 19"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="pi-txt">O cabelo que aparece na escova toda manhã e no ralo do banheiro</div>
              </div>
              <div className="pi">
                <div className="pi-ico">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path
                      d="M6 4c0 4 4 6 4 10s-3 6-3 6M18 4c0 4-4 6-4 10s3 6 3 6M9 10c1 1 4 1 6 0M9.5 14c1 1.5 4 1.5 5 0"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="pi-txt">O intestino que travou e que não destravam mais, se sentindo inflamada</div>
              </div>
              <div className="pi">
                <div className="pi-ico">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path
                      d="M13 3L4 14h8l-1 7 9-11h-8l1-7z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="pi-txt">O cansaço e desânimo que não passa mesmo dormindo</div>
              </div>
              <div className="pi">
                <div className="pi-ico">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" />
                    <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="pi-txt">A flacidez que foi chegando junto com o emagrecimento</div>
              </div>
              <div className="pi">
                <div className="pi-ico">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                    <circle cx="12" cy="10" r="7" stroke="currentColor" />
                    <path d="M9 10c0-1.7 1.3-3 3-3M9.5 13.5c.8 1 2 1.5 3 1" stroke="currentColor" strokeLinecap="round" />
                    <path
                      d="M8 20l2 2 2-2 2 2 2-2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="pi-txt">A náusea que te impede de comer direito</div>
              </div>
              <div className="pi">
                <div className="pi-ico">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeLinecap="round" />
                    <path d="M12 9v4M12 17v.5" stroke="currentColor" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="pi-txt">
                  A insegurança de não estar fazendo tudo certo e conseguir sustentar o peso perdido
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MECANISMO */}
      <section id="mech" className="sec">
        <div className="cnt">
          <div className="mech-hd rv">
            <div className="chip">Por que acontece</div>
            <h2 className="h2">
              Por que usar a caneta sem protocolo nutricional é como ter uma <em>Ferrari sem saber dirigir</em>
            </h2>
            <p>
              A caneta é uma ferramenta extraordinária. Uma das mais poderosas disponíveis hoje para o tratamento da
              obesidade. Mas uma ferramenta, por mais sofisticada que seja, só entrega resultado na mão de quem sabe
              usá-la.
            </p>
          </div>
          <div className="mech-grid">
            <div className="rv">
              <h3 className="h3" style={{ color: "var(--brown-d)", marginBottom: "14px" }}>
                Quando você come menos sem estratégia, seu corpo interpreta como escassez e faz o que foi programado
                para fazer:
              </h3>
              <div className="arrows">
                <div className="arr-row">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      d="M5 12h14M14 7l5 5-5 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Queima músculo para poupar energia
                </div>
                <div className="arr-row">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      d="M5 12h14M14 7l5 5-5 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Desregula hormônios para sobreviver
                </div>
                <div className="arr-row">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      d="M5 12h14M14 7l5 5-5 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Deixa seu metabolismo em modo econômico, gastando menos e com maior apetite
                </div>
                <div className="arr-row">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      d="M5 12h14M14 7l5 5-5 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Quando para o medicamento, recupera todo o peso — e mais um pouco
                </div>
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-m)", lineHeight: 1.78, marginTop: "8px" }}>
                A caneta funciona muito bem para {'"'}emagrecer{'"'}, mas ela sozinha,{" "}
                <strong style={{ color: "var(--brown)" }}>
                  NÃO tratará o restante que vem junto e nem o que causou o descontrole.
                </strong>{" "}
                Você não precisa pagar com sua beleza e vitalidade para poder emagrecer!
              </p>
            </div>
            <div className="rv d2">
              <div className="diag-wrap">
                <div className="diag-lbl">✦ Método Metabólico Feminino — 6 Pilares</div>
                <div className="diag-svg-wrap" id="diagWrap" ref={diagWrapRef}>
                  <svg viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg" id="diagSVG">
                    <defs>
                      <radialGradient id="bg" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FCF5EB" />
                        <stop offset="100%" stopColor="#EDE2CE" />
                      </radialGradient>
                    </defs>
                    <circle cx="220" cy="220" r="218" fill="url(#bg)" stroke="rgba(98,76,50,.08)" strokeWidth="1" />
                    <g id="segs"></g>
                    <circle cx="220" cy="220" r="100" fill="#FCF5EB" stroke="rgba(74,95,80,.12)" strokeWidth="1.5" />
                    <circle cx="220" cy="220" r="65" fill="#4A5F50" />
                    <g transform="translate(200,198)">
                      <path
                        d="M20 42C20 42 7 30 7 18 7 9 13 3 20 3 27 3 33 9 33 18 33 30 20 42Z"
                        fill="none"
                        stroke="#6FC596"
                        strokeWidth="2"
                      />
                      <line x1="20" y1="42" x2="20" y2="26" stroke="#6FC596" strokeWidth="2" />
                      <path d="M20 30C16 26 10 26 7 22" stroke="#6FC596" strokeWidth="1.5" strokeLinecap="round" />
                    </g>
                    <text
                      x="220"
                      y="240"
                      textAnchor="middle"
                      fill="rgba(255,255,255,.6)"
                      fontSize="9"
                      fontFamily="DM Sans,sans-serif"
                      letterSpacing="1.5"
                    >
                      MMF
                    </text>
                    <g id="dlbls"></g>
                  </svg>
                  <div className="d-tooltip" id="dtip" ref={tipRef}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MICHELLY */}
      <section id="michelly" className="sec">
        <div className="mich-deco">M</div>
        <div className="mich-grid">
          <div className="mich-photo-wrap rv">
            <img
              src="/images/michelly.jpg"
              alt="Michelly Silveira Fanelli - Nutricionista Clínica"
              className="mich-img"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "24px",
              }}
            />
            <div className="mich-float">
              <div className="n">5+</div>
              <div className="l">
                pós-graduações
                <br />e especializações
              </div>
            </div>
          </div>
          <div className="mich-content rv d2">
            <div className="chip d">Quem é Michelly</div>
            <h2 className="h2">
              Michelly Silveira <em>Fanelli</em>
            </h2>
            <div className="mich-role">Nutricionista Clínica · Especialista em Saúde da Mulher</div>
            <div className="mich-quote">
              {'"'}No início eu fui contra as canetas. E foi exatamente isso que me fez criar o MMF.{'"'}
            </div>
            <p className="mich-p">
              Quando as primeiras pacientes chegaram no meu consultório usando canetas emagrecedoras, vou ser honesta: eu
              fui contra. Achei que era atalho. Que ia destruir a microbiota. Tentei convencer cada uma a voltar para a
              dieta.
            </p>
            <p className="mich-p">
              Só que elas continuaram usando — com ou sem a minha orientação. E foi aí que eu comecei a ver o que
              acontece quando se usa a caneta sem protocolo nutricional: uma paciente foi parar no hospital com
              constipação severa. Outra tinha usado três canetas diferentes sem resultado. Várias chegavam com cabelo
              caindo, energia no chão, libido baixa e flacidez crescendo junto com a frustração.
            </p>
            <p className="mich-p">
              Fui aos congressos. Estudei os protocolos. E juntei tudo isso com 13 anos de especialização em saúde
              hormonal feminina, microbiota e ciclicidade feminina — algo que nenhum outro protocolo para canetas tinha.
              O resultado foi o <strong style={{ color: "var(--mint)" }}>Método Metabólico Feminino.</strong>
            </p>
            <div className="mich-creds">
              <div className="mich-cred">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                13 anos de prática clínica especializada
              </div>
              <div className="mich-cred">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                +2.500 pacientes atendidas em consultório
              </div>
              <div className="mich-cred">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                5+ pós-graduações e especializações
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section id="proof" className="sec">
        <div className="cnt">
          <div className="proof-hd rv">
            <div className="chip">Resultados reais</div>
            <h2 className="h2">Funciona mesmo?</h2>
            <p>Mulheres reais. Transformações concretas. Com o protocolo completo.</p>
          </div>
          <div className="depoimentos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
            <div className="depoimento-img rv" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <img src="/images/depoimento-1.jpg" alt="Depoimento de cliente - resultados com o método" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div className="depoimento-img rv" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <img src="/images/depoimento-2.jpg" alt="Depoimento de cliente - perda de 7kg em 1 mês" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div className="depoimento-img rv" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <img src="/images/depoimento-3.jpg" alt="Depoimento de cliente - perda de 5,6kg" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div className="depoimento-img rv" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <img src="/images/depoimento-4.jpg" alt="Depoimento de cliente - sem efeitos colaterais" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* 6 FASES */}
      <section id="fases" className="sec">
        <div className="cnt">
          <div className="fases-hd rv">
            <div className="chip">O sistema completo</div>
            <h2 className="h2">
              O que o MMF faz pelo seu tratamento — <em>fase por fase</em>
            </h2>
            <p>
              Cada fase prepara o terreno para a próxima. Não é um curso de emagrecimento com o nome das canetas na capa
              — foi construído do zero para o corpo da mulher que usa GLP-1 e não tem mais 20 e poucos anos.
            </p>
          </div>
          <div className="timeline">
            <div className="fi rv">
              <div className="fdot">1</div>
              <div className="fc">
                <div className="f-lbl">Fase 01</div>
                <div className="f-title">Reprogramação Mental e Comportamental</div>
                <div className="f-text">
                  Antes de mudar o prato, é preciso entender o que te levou a comer do jeito que você come. Identifica
                  seus gatilhos emocionais e constrói uma relação com a comida que a caneta nunca vai ensinar.
                </div>
              </div>
            </div>
            <div className="fi rv">
              <div className="fdot">2</div>
              <div className="fc">
                <div className="f-lbl">Fase 02</div>
                <div className="f-title">Ativação da Inteligência Metabólica</div>
                <div className="f-text">
                  Você entende o que acontece no seu corpo feminino quando usa a caneta. Como os hormônios respondem. O
                  que muda na perimenopausa. E como usar esse conhecimento a seu favor.
                </div>
              </div>
            </div>
            <div className="fi rv">
              <div className="fdot">3</div>
              <div className="fc">
                <div className="f-lbl">Fase 03</div>
                <div className="f-title">Protocolo Nutricional por Fase</div>
                <div className="f-text">
                  Cardápios práticos e saborosos adaptados ao momento exato do seu tratamento. O que comer no início do
                  emagrecimento, no platô, na fase de recomposição corporal, na fase de ajuste de dose. Sem dieta
                  restritiva. Com comida de verdade.
                </div>
              </div>
            </div>
            <div className="fi rv">
              <div className="fdot">4</div>
              <div className="fc">
                <div className="f-lbl">Fase 04</div>
                <div className="f-title">Suplementação Estratégica</div>
                <div className="f-text">
                  O que tomar, quanto, quando e por quê — para preservar músculo, cabelo, hormônios e energia. Suporte
                  para vitalidade, saúde hormonal, beleza de cabelo, pele e unhas.
                </div>
              </div>
            </div>
            <div className="fi rv">
              <div className="fdot">5</div>
              <div className="fc">
                <div className="f-lbl">Fase 05</div>
                <div className="f-title">Modulação Intestinal — Protocolos SOS</div>
                <div className="f-text">
                  O protocolo específico para resolver o intestino travado de vez. Suporte para tratar seu intestino de
                  acordo com o que ele precisa: inchaços, diarreia ou constipação. Muitas vezes a raiz do seu problema
                  nasce em um intestino inflamado.
                </div>
              </div>
            </div>
            <div className="fi rv">
              <div className="fdot">6</div>
              <div className="fc">
                <div className="f-lbl">Fase 06 — A mais importante</div>
                <div className="f-title">Desmame, Reeducação Metabólica e Autonomia Definitiva</div>
                <div className="f-text">
                  A fase que a maioria ignora — e é a mais importante. Começa no primeiro dia de aplicação — não quando
                  você decide parar. É aqui que a maioria perde tudo. Quando o tratamento terminar, seu metabolismo
                  estará nutrido, desinflamado. Com ou sem medicação, você tem as ferramentas para manter o resultado
                  que conquistou. Sem guerra com a comida, sem medo de engordar tudo de volta.
                </div>
                <div className="f-note">É aqui que o protocolo faz a diferença mais visível</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTREGÁVEIS */}
      <section id="ent" className="sec">
        <div className="cnt">
          <div className="ent-hd rv">
            <div className="chip d">O que você recebe</div>
            <h2 className="h2">
              Tudo que o método entrega — e o que cada item <em>muda</em> no seu tratamento
            </h2>
            <p>Feito para a rotina real de mulheres que não têm tempo a perder.</p>
          </div>
          <div className="ent-grid">
            <div className="ec rv">
              <div className="ec-bar"></div>
              <div className="ec-bnum">01</div>
              <div className="ec-ico">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" />
                  <path d="M7 8h10M7 12h7M7 16h5" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </div>
              <div className="ec-title">Sistema Completo MMF — 6 Fases, 16 Aulas</div>
              <div className="ec-meta">Máx. 10 min por aula · Acesso por 1 ano · Assiste quando quiser</div>
              <div className="ec-desc">Feitas para a rotina real de mulheres que não têm tempo a perder.</div>
              <div className="ec-chk">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Você para de navegar sozinha em um mar de informações contraditórias e passa a ter um caminho claro,
                fase por fase, sequencial, do primeiro dia até o desmame.
              </div>
            </div>
            <div className="ec rv d1">
              <div className="ec-bar"></div>
              <div className="ec-bnum">02</div>
              <div className="ec-ico">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path d="M3 6h18M3 12h12M3 18h8" stroke="currentColor" strokeLinecap="round" />
                  <circle cx="19" cy="17" r="4" stroke="currentColor" />
                  <path d="M19 15v2l1 1" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </div>
              <div className="ec-title">4 Cardápios Completos por Fase + Lista de Compras</div>
              <div className="ec-meta">Emagrecimento · Platô · Recomposição corporal · Desmame · Guias de Receitas práticas</div>
              <div className="ec-desc">
                Um cardápio para cada momento do tratamento. Com lista de compras organizada e receitas rápidas e
                saborosas.
              </div>
              <div className="ec-chk">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Você nunca mais fica na dúvida sobre o que comer. Cada refeição está a serviço do momento do seu
                tratamento.
              </div>
            </div>
            <div className="ec rv d2">
              <div className="ec-bar"></div>
              <div className="ec-bnum">03</div>
              <div className="ec-ico">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" />
                  <path d="M12 8v4l3 3" stroke="currentColor" strokeLinecap="round" />
                  <path d="M12 3v1M3 12H2M21 12h1M12 21v1" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </div>
              <div className="ec-title">Protocolo SOS Intestino — Edição Expandida</div>
              <div className="ec-meta">3 protocolos distintos · Ação imediata</div>
              <div className="ec-desc">
                Constipação severa, diarreia e intestino solto, inchaço e gases — cada um com seu protocolo específico
                para melhorar a queixa atual.
              </div>
              <div className="ec-chk">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                O intestino travado que atormenta a maioria das usuárias de caneta tem solução. Você tem o passo a passo
                para resolver em dias.
              </div>
            </div>
            <div className="ec rv">
              <div className="ec-bar"></div>
              <div className="ec-bnum">04</div>
              <div className="ec-ico">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path d="M9 3h6l1 4H8L9 3z" stroke="currentColor" />
                  <rect x="6" y="7" width="12" height="14" rx="2" stroke="currentColor" />
                  <path d="M10 12h4M10 16h3" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </div>
              <div className="ec-title">Guia Completo de Suplementação Estratégica</div>
              <div className="ec-meta">O que tomar · Quanto · Quando · Por quê</div>
              <div className="ec-desc">
                Para preservar músculo, cabelo, hormônios, cabelo, pele, energia e sintomas que podem aparecer — adaptado
                às necessidades das mulheres que usam medicação.
              </div>
              <div className="ec-chk">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Você para de perder cabelo, de acordar destruída e de sentir que está emagrecendo às custas da saúde.
              </div>
            </div>
            <div className="ec rv d1">
              <div className="ec-bar"></div>
              <div className="ec-bnum">05</div>
              <div className="ec-ico">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path d="M9 3h6l1 3H8L9 3z" stroke="currentColor" />
                  <rect x="5" y="6" width="14" height="16" rx="2" stroke="currentColor" />
                  <path d="M9 11h6M9 15h4" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </div>
              <div className="ec-title">Guia Completo de Exames Laboratoriais</div>
              <div className="ec-meta">Com template de pedido para levar ao médico</div>
              <div className="ec-desc">
                Quais exames pedir antes, durante e ao encerrar. Como interpretar os resultados. O que fazer se algo
                estiver alterado.
              </div>
              <div className="ec-chk">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Você acompanha a saúde do seu corpo durante todo o processo — não descobre problemas quando já é tarde.
              </div>
            </div>
            <div className="ec rv d2">
              <div className="ec-bar"></div>
              <div className="ec-bnum">06</div>
              <div className="ec-ico">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path d="M4 6h16M4 10h10M4 14h6" stroke="currentColor" strokeLinecap="round" />
                  <path d="M16 12l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="ec-title">Biblioteca de Substituições</div>
              <div className="ec-meta">Trocas inteligentes para a sua realidade</div>
              <div className="ec-desc">
                Não gosta de frango, é vegetariana, tem intolerância à lactose, não tem tempo de cozinhar — o protocolo
                se adapta a você.
              </div>
              <div className="ec-chk">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Você não abandona o método porque {'"'}não consigo seguir{'"'}. Cada barreira tem uma solução dentro do
                próprio material.
              </div>
            </div>
            <div
              className="ec excl rv"
              style={{
                gridColumn: "1/-1",
                background: "rgba(111,197,150,.07)",
                borderColor: "rgba(111,197,150,.18)",
              }}
            >
              <div className="ec-bar" style={{ background: "var(--mint)" }}></div>
              <div className="ec-bnum">07</div>
              <div className="ec-exc">Exclusivo até 02/04</div>
              <div className="ec-ico">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                  <circle cx="9" cy="7" r="4" stroke="currentColor" />
                </svg>
              </div>
              <div className="ec-title" style={{ color: "var(--mint)" }}>
                Grupo VIP de Alunas no WhatsApp
              </div>
              <div className="ec-meta">Comunidade · Lives programadas · Conteúdos exclusivos</div>
              <div className="ec-desc">
                Comunidade exclusiva com lives de perguntas e respostas e conteúdo da Michelly. Você não faz esse
                processo sozinha.
              </div>
              <div className="ec-chk">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Depois do dia 02/04, esse acesso não existirá mais nesse formato.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="sec">
        <div className="cnt">
          <div className="oferta-grid">
            <div className="oferta-left">
              <div className="chip">Sua decisão</div>
              <h2 className="h2">
                Tudo que você recebe — <em>e o que isso representa</em>
              </h2>
              <p className="oferta-lead">
                Veja o valor real de cada entregável. Depois entenda por que o investimento faz total sentido.
              </p>
              <div className="otable rv">
                <div className="orow">
                  <span className="nm">Sistema Completo MMF — 6 fases, 16 aulas, 1 ano de acesso</span>
                  <span className="pr">R$ 2.997</span>
                </div>
                <div className="orow">
                  <span className="nm">4 Cardápios + Lista de Compras + Guia de Receitas</span>
                  <span className="pr">R$ 497</span>
                </div>
                <div className="orow">
                  <span className="nm">Protocolo SOS Intestino Expandido — 3 protocolos</span>
                  <span className="pr">R$ 397</span>
                </div>
                <div className="orow">
                  <span className="nm">Guia Completo de Suplementação</span>
                  <span className="pr">R$ 297</span>
                </div>
                <div className="orow">
                  <span className="nm">Guia de Exames Laboratoriais + Template Médico</span>
                  <span className="pr">R$ 347</span>
                </div>
                <div className="orow">
                  <span className="nm">Biblioteca de Substituições</span>
                  <span className="pr">R$ 197</span>
                </div>
                <div className="orow">
                  <span className="nm">Calculadora Metabólica</span>
                  <span className="pr">R$ 394</span>
                </div>
                <div className="orow">
                  <span className="nm">Grupo VIP WhatsApp + Lives Programadas</span>
                  <span className="pr">R$ 697</span>
                </div>
                <div className="orow">
                  <span className="nm">Protocolo de Emergência e Checklist diário</span>
                  <span className="pr">R$ 397</span>
                </div>
                <div className="orow tot">
                  <span className="nm">VALOR TOTAL</span>
                  <span className="pr" style={{ fontSize: "14px" }}>
                    R$ 6.220
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="price-box rv d2">
                <div className="p-lbl">Você investe apenas</div>
                <div className="p-val">
                  <sup>R$</sup>997
                </div>
                <div className="p-inst">
                  ou <strong>12x de R$ 102</strong> no cartão
                </div>
                <a href="https://payfast.greenn.com.br/g4vfzcf/offer/OmlIvh" target="_blank" rel="noopener noreferrer" className="btn btn-mint" style={{ width: "100%", fontSize: "15px", marginBottom: "10px" }}>
                  Quero emagrecer com saúde e nunca mais ter medo do que acontece quando parar
                  <span className="arr">→</span>
                </a>
                <div className="note">
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#8B6E4E">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
                  </svg>
                  Pagamento seguro · Acesso imediato · Garantia dupla 7+30 dias
                </div>
                <div className="p-cmp" style={{ marginTop: "20px" }}>
                  <h4>Para colocar em perspectiva</h4>
                  <div className="crow">
                    <span>1 mês de Mounjaro / Ozempic</span>
                    <span>R$ 500–3.800</span>
                  </div>
                  <div className="crow">
                    <span>10 consultas nutricionais</span>
                    <span>R$ 3.000+</span>
                  </div>
                  <div className="crow">
                    <span>1 ano de caneta</span>
                    <span>R$ 6k–45k</span>
                  </div>
                  <div className="crow">
                    <span>Método Metabólico Feminino</span>
                    <span>R$ 997</span>
                  </div>
                </div>
                <div className="p-seals">
                  <span className="p-seal">
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" />
                    </svg>
                    Garantia dupla 7+30 dias
                  </span>
                  <span className="p-seal">
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path
                        d="M5 12h14M14 7l5 5-5 5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Acesso imediato
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* GARANTIA */}
      <section id="garantia" className="sec">
        <div className="cnt">
          <div className="g-wrap">
            <div className="g-shield rv">
              <svg width="68" height="68" fill="none" viewBox="0 0 24 24" strokeWidth="1.4">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="g-content rv d1">
              <div className="chip">Sem risco</div>
              <h2 className="h2">
                Você não tem nada a perder. <em>O risco é meu.</em>
              </h2>
              <p>
                Em 13 anos de consultório, acompanhando mulheres com esse protocolo, sei o que acontece quando ele é
                seguido. Por isso consigo oferecer isso.
              </p>
              <div className="g-cards">
                <div className="gcard">
                  <h4>Garantia Incondicional — 7 dias</h4>
                  <p>
                    Entre no Método. Acesse todas as aulas. Baixe todos os materiais. Entre no grupo. Se em 7 dias você
                    achar que não é para você — por qualquer motivo — me manda uma mensagem e eu devolvo 100% do seu
                    dinheiro. Sem perguntas. Sem burocracia. Sem justificativa.
                  </p>
                </div>
                <div className="gcard">
                  <h4>Garantia Condicional — 30 dias</h4>
                  <p>
                    Se você completar os 3 primeiros módulos, implementar o protocolo de suplementação e seguir os
                    cardápios por pelo menos 30 dias — e ainda assim não sentir nenhuma melhora em nada — eu devolvo
                    cada centavo. Se você fez e não funcionou, o problema é do método. Não seu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section id="urgencia" className="sec">
        <div className="chip d" style={{ marginBottom: "22px" }}>
          Carrinho fecha em
        </div>
        <h2 className="h2">
          02 de Abril · <em>23h59</em>
        </h2>
        <p className="sub">
          Quando as vagas fecharem, o Grupo VIP com a Michelly no WhatsApp não estará mais disponível.
          <br />
          Esse formato — com esse nível de atenção — é exclusivo desse grupo.
        </p>
        <div className="cd-big">
          <div className="cdb">
            <div className="cdn" id="cd-d">
              00
            </div>
            <div className="cdl">Dias</div>
          </div>
          <div className="cds">:</div>
          <div className="cdb">
            <div className="cdn" id="cd-h">
              00
            </div>
            <div className="cdl">Horas</div>
          </div>
          <div className="cds">:</div>
          <div className="cdb">
            <div className="cdn" id="cd-m">
              00
            </div>
            <div className="cdl">Min</div>
          </div>
          <div className="cds">:</div>
          <div className="cdb">
            <div className="cdn" id="cd-s">
              00
            </div>
            <div className="cdl">Seg</div>
          </div>
        </div>
        <a href="#oferta" className="btn btn-mint" style={{ fontSize: "17px", padding: "20px 40px" }}>
          Garantir minha vaga agora
          <span className="arr" style={{ background: "var(--forest-dd)" }}>
            →
          </span>
        </a>
        <div style={{ color: "rgba(255,255,255,.38)", fontSize: "13px", marginTop: "14px" }}>
          R$ 997 à vista ou 12x R$ 102 · Garantia dupla de 7+30 dias
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="sec">
        <div className="cnt">
          <div className="faq-hd rv">
            <div className="chip">Dúvidas</div>
            <h2 className="h2">Perguntas que eu sei que você tem</h2>
            <p>Respostas diretas para as dúvidas mais comuns.</p>
          </div>
          <div className="faq-list">
            <details className="fitem rv">
              <summary className="fq">
                Já tenho nutricionista. Preciso mesmo do MMF? <span className="fico">+</span>
              </summary>
              <div className="fa">
                O MMF não substitui sua nutricionista — ele complementa de um jeito que uma consulta de 60 minutos por
                mês não consegue cobrir. Comportamento alimentar diário, suplementação específica para canetas,
                protocolo de desmame, SOS para efeitos colaterais no dia que aparecem. São coisas que acontecem entre uma
                consulta e outra — e é exatamente aí que o método atua.
              </div>
            </details>
            <details className="fitem rv">
              <summary className="fq">
                Já tentei tantas coisas e nada funcionou. Por que agora seria diferente? <span className="fico">+</span>
              </summary>
              <div className="fa">
                Desta vez você já tem a ferramenta mais poderosa disponível — a caneta. O que faltava até agora era a
                estratégia nutricional certa para fazer ela funcionar de verdade e construir um metabolismo que sustenta
                o resultado. As duas peças juntas são diferentes de qualquer coisa que você tentou antes.
              </div>
            </details>
            <details className="fitem rv">
              <summary className="fq">
                Não tenho tempo para mais um curso. <span className="fico">+</span>
              </summary>
              <div className="fa">
                Não é um curso, é um protocolo de aplicação diária com aulas de no máximo 10 minutos. Os cardápios e
                checklists já estão prontos — você não precisa criar nada. O que consome tempo de verdade é continuar sem
                o protocolo e ter que recomeçar quando parar a caneta.
              </div>
            </details>
            <details className="fitem rv">
              <summary className="fq">
                E se eu tiver um efeito colateral sério? <span className="fico">+</span>
              </summary>
              <div className="fa">
                O Protocolo Guia de Emergência, o SOS Intestino e o Guia de Suplementação foram criados para isso. E no
                grupo no WhatsApp, você pode acionar a Michelly se surgir algo que te preocupa. Para situações médicas
                urgentes, seu médico é sempre o primeiro contato — o MMF não substitui acompanhamento médico.
              </div>
            </details>
            <details className="fitem rv">
              <summary className="fq">
                Quanto tempo leva para ver o resultado? <span className="fico">+</span>
              </summary>
              <div className="fa">
                Alunas relatam melhora no intestino e na energia já nas primeiras semanas de implementação. A
                transformação mais profunda — metabolismo autônomo, resultado sustentável — se constrói ao longo dos
                meses. É um protocolo para o longo prazo.
              </div>
            </details>
            <details className="fitem rv">
              <summary className="fq">
                E se eu já estiver no processo de desmame? <span className="fico">+</span>
              </summary>
              <div className="fa">
                O Módulo Desmame existe exatamente para isso. Se você está reduzindo, espaçando a dose ou encerrando o
                tratamento, esse é o módulo mais importante para você agora. E como o acesso é por 1 ano, você tem tempo
                de percorrer todo o método no seu ritmo.
              </div>
            </details>
            <details className="fitem rv">
              <summary className="fq">
                O preço vai subir depois? <span className="fico">+</span>
              </summary>
              <div className="fa">
                Sim. Esse é o preço exclusivo para você que se inscreveu para o evento Blindagem. Depois que esse grupo
                fechar, o Método Metabólico Feminino não terá mais o grupo VIP com a Michelly no WhatsApp — e o preço vai
                refletir essa diferença.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta-final" className="sec">
        <div className="cta-final-inner">
          <div className="chip" style={{ margin: "0 auto 20px" }}>
            Sua decisão
          </div>
          <h2 className="h2">
            Você leu até aqui. Então deixa eu ser <em>direta.</em>
          </h2>
          <p>
            Você passou esses dias aprendendo o que a caneta faz — e o que ela não faz.
            <br />
            Você sabe que efeitos colaterais não são inevitáveis. Você sabe que o desmame começa no primeiro dia.
            <br />
            <br />
            Continuar com a caneta sem o protocolo — e correr o risco que a maioria corre: emagrecimento temporário,
            efeitos colaterais sem solução, reganho quando parar.
            <br />
            <br />
            Ou entrar no Método Metabólico Feminino agora — com o protocolo completo, o suporte direto e a garantia de
            que se não funcionar, você recebe tudo de volta.
          </p>
          <a href="#oferta" className="btn btn-mint" style={{ fontSize: "17px", padding: "22px 44px" }}>
            Garantir minha vaga no Método Metabólico Feminino
            <span className="arr">→</span>
          </a>
          <div className="cta-mini">
            R$ 997 à vista · 12x R$ 102 · Acesso imediato · Garantia 7+30 dias · Carrinho fecha 02/04 às 23h59
          </div>
        </div>
      </section>

      {/* PS */}
      <section id="ps">
        <div className="ps-inner">
          <div className="ps-lbl">P.S.</div>
          <p>Se você veio direto para o fim desta página, aqui está o que importa:</p>
          <p>
            Você está gastando entre <strong>R$ 500 e R$ 3.800 por mês</strong> com a caneta. Sem o protocolo
            nutricional certo, o risco de recuperar o peso quando parar é real — e documentado.
          </p>
          <p>
            O Método Metabólico Feminino foi criado para que você seja a exceção. São{" "}
            <strong>13 anos de consultório clínico especializado em saúde da mulher</strong> transformados em um
            protocolo que você aplica no seu ritmo — pela fração do custo de um mês de tratamento.
          </p>
          <p>
            O carrinho fecha <strong>dia 02 de abril às 23h59</strong>. O grupo com a Michelly no WhatsApp é exclusivo
            desse grupo — depois não haverá mais esse formato.
          </p>
          <p>
            Se você saiu daqui com dúvida, <strong>a garantia de 7 dias existe para isso</strong>: você entra, acessa
            tudo e decide com o método na mão. O risco é dela — não seu.
          </p>
          <div style={{ marginTop: "28px" }}>
            <a href="#oferta" className="btn btn-mint">
              Quero emagrecer com saúde e nunca mais engordar tudo de volta
              <span className="arr" style={{ background: "var(--forest-dd)" }}>
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Michelly Silveira Fanelli · Nutricionista CRN · Método Metabólico Feminino</p>
        <p>Este produto não substitui acompanhamento médico ou nutricional individualizado. Resultado pode variar.</p>
      </footer>

      {/* Script de rastreamento UTM */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log('%cScript de rastreio by Comunidade Nova Ordem do Digital - Dericson Calari e Samuel Choairy', 'color: purple; font-size: 20px;');

            (function () {
                let parametros = ["utm_source"];
                const url = new URL(window.location.href);
                const params = new URLSearchParams(url.search);

                for (const [key] of params) {
                    if (!parametros.includes(key)) {
                        parametros.push(key);
                    }
                }

                const urlParamsCapt = new URLSearchParams(window.location.search);
                const urlParamsCaptReferrer = new URLSearchParams(document.referrer.split('?')[1] || '');
                let utms = {};

                parametros.forEach(el => {
                    if (el === "utm_source") {
                        utms[el] = urlParamsCapt.get(el) ?? (document.referrer ? (urlParamsCaptReferrer.get(el) ?? new URL(document.referrer).hostname) : "direto");
                    } else {
                        utms[el] = urlParamsCapt.get(el) ?? (urlParamsCaptReferrer.get(el) ?? "");
                    }
                });

                let scks = Object.values(utms).filter(value => value !== "");

                let currentSckValues = [];
                if (urlParamsCapt.get('sck')) {
                    currentSckValues = urlParamsCapt.get('sck').split('|');
                }
                scks = scks.filter(value => !currentSckValues.includes(value));

                const updateLinks = (el, elURL) => {
                    const elSearchParams = new URLSearchParams(elURL.search);
                    let modified = false;
                    for (let key in utms) {
                        if (!elSearchParams.has(key)) {
                            elSearchParams.append(key, utms[key]);
                            modified = true;
                        }
                    }
                    if (!elSearchParams.has('sck') && scks.length > 0) {
                        elSearchParams.append('sck', scks.join('|'));
                        modified = true;
                    }
                    if (modified) {
                        return elURL.origin + elURL.pathname + "?" + elSearchParams.toString();
                    }
                    return el.href;
                };

                document.querySelectorAll('a').forEach(el => {
                    const elURL = new URL(el.href);
                    if (!elURL.hash) {
                        el.href = updateLinks(el, elURL);
                    }
                });

                document.querySelectorAll('iframe').forEach(iframe => {
                    let actualSrc = iframe.hasAttribute('data-src') ? iframe.getAttribute('data-src') : iframe.src;
                    if (actualSrc) {
                        const iframeURL = new URL(actualSrc);
                        if (iframe.hasAttribute('data-src')) {
                            iframe.setAttribute('data-src', updateLinks(iframe, iframeURL));
                        } else {
                            iframe.src = updateLinks(iframe, iframeURL);
                        }
                    }
                });

            })();
          `,
        }}
      />
    </>
  )
}
