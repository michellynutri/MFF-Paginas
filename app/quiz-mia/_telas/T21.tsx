// Tela 21 — convertida de scripts/quiz-mia/stitch/21.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

export default function T21({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="21">
      <div data-body className="">
        <header className="header">
          <div className="header-top">
            <button type="button" className="back-btn" aria-label="Voltar" onClick={q.voltar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="sphere-logo" aria-hidden="true" />
            <div style={{ width: "36px" }} />
          </div>
          <div className="progress-bar">
            <div className="progress-segment">
              <div className="progress-fill" style={{ width: "100%" }} />
            </div>
            <div className="progress-segment">
              <div className="progress-fill" style={{ width: "100%" }} />
            </div>
            <div className="progress-segment">
              <div className="progress-fill" style={{ width: "100%" }} />
            </div>
            <div className="progress-segment">
              <div className="progress-fill" style={{ width: "15%" }} />
            </div>
          </div>
          <div className="header-meta" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Geist, sans-serif", fontSize: "12px", color: "rgb(86, 101, 77)", fontWeight: "500" }}>
            <span>
              {"O seu plano"}
            </span>
            <div className="alertas-group">
              <span>
                {"alertas"}
              </span>
              <div className="alert-dots">
                <span className="alert-dot" style={p[0]} />
                {" "}
                <span className="alert-dot" style={p[1]} />
                {" "}
                <span className="alert-dot" style={p[2]} />
              </div>
            </div>
          </div>
        </header>
        <main className="content">
          <div className="eyebrow" style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgb(138, 100, 24)", lineHeight: "1.35" }}>
            {"DÁ PARA PARAR A CANETA E O PESO FICAR? A CIÊNCIA MOSTROU QUE SIM"}
          </div>
          <h1 className="headline" style={{ fontFamily: "\"EB Garamond\", serif", fontSize: "28px", fontWeight: "600", lineHeight: "1.2", color: "rgb(32, 62, 53)", letterSpacing: "-0.01em" }}>
            {"Na Dinamarca, onde a caneta foi criada, um grupo parou e segurou o peso."}
          </h1>
          <p className="body-text">
            {"Mesma caneta, mesma dose. A diferença estava no que cada grupo fez junto com ela. Estudo da Universidade de Copenhague."}
          </p>
          <div className="chart-container" style={{ height: "180px", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <svg className="chart-svg" viewBox="0 0 326 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
              <line x1="163" y1="10" x2="163" y2="115" stroke="#CCD2C7" strokeDasharray="3 3" strokeWidth="1.2" />
              <path d="M 25 32 C 75 38, 120 86, 163 90 C 205 94, 248 58, 290 42" fill="none" stroke="#A1312A" strokeWidth="2" strokeLinecap="round" />
              <circle cx="290" cy="42" r="3.5" fill="#A1312A" />
              <path d="M 25 32 C 75 42, 120 94, 163 100 C 205 103, 248 103, 290 103" fill="none" stroke="#2F6B45" strokeWidth="2.8" strokeLinecap="round" />
              <circle cx="290" cy="103" r="4" fill="#2F6B45" />
              <text x="25" y="140" fill="#56654D" fontFamily="'Geist', sans-serif" fontSize="11" fontWeight="400" textAnchor="start">
                {"início"}
              </text>
              <text x="163" y="140" fill="#56654D" fontFamily="'Geist', sans-serif" fontSize="11" fontWeight="500" textAnchor="middle">
                {"parou a caneta"}
              </text>
              <text x="290" y="140" fill="#56654D" fontFamily="'Geist', sans-serif" fontSize="11" fontWeight="400" textAnchor="end">
                {"1 ano depois"}
              </text>
            </svg>
          </div>
          <div className="stats-card">
            <div className="stat-row">
              <span className="stat-dot" style={{ backgroundColor: "#A1312A" }} />
              <div className="stat-content">
                <span className="stat-title">
                  {"Só a caneta"}
                </span>
                {" "}
                <span className="stat-desc">
                  {"quase 70% do peso de volta em um ano"}
                </span>
              </div>
            </div>
            <div className="stat-row">
              <span className="stat-dot" style={{ backgroundColor: "#2F6B45" }} />
              <div className="stat-content">
                <span className="stat-title">
                  {"Caneta com tratamento junto"}
                </span>
                {" "}
                <span className="stat-desc">
                  {"quase o dobro de gordura perdida e menos peso de volta"}
                </span>
              </div>
            </div>
          </div>
          <div className="section-title">
            {"As 3 partes do tratamento"}
          </div>
          <div className="triad-list">
            <div className="triad-card">
              <div className="triad-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 2 4 4-12 12H6v-4L18 2z" />
                  <path d="m14 6 4 4" />
                  <path d="M2 22l4-4" />
                </svg>
              </div>
              <div className="triad-body">
                <span className="triad-title">
                  {"Caneta"}
                </span>
                {" "}
                <span className="triad-desc">
                  {"desliga a fome."}
                </span>
              </div>
            </div>
            <div className="triad-card">
              <div className="triad-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4.5" />
                  <path d="M3 12h3" />
                  <path d="M18 12h3" />
                </svg>
              </div>
              <div className="triad-body">
                <span className="triad-title">
                  {"Alimentação"}
                </span>
                {" "}
                <span className="triad-desc">
                  {"repõe os nutrientes e alimenta o músculo. É a maior parte do tratamento."}
                </span>
              </div>
            </div>
            <div className="triad-card">
              <div className="triad-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 4v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M10 20l2-4 3 2" />
                </svg>
              </div>
              <div className="triad-body">
                <span className="triad-title">
                  {"Movimento"}
                </span>
                {" "}
                <span className="triad-desc">
                  {"17 minutos por dia, em casa, para o músculo ficar."}
                </span>
              </div>
            </div>
          </div>
          <p className="conclusion-p">
            {"Quem fica só na caneta deixa duas partes de fora. O seu plano junta as três."}
          </p>
          <p className="small-note">
            {"Seu plano está quase pronto."}
          </p>
        </main>
        <div className="bottom-cta-container">
          <button type="button" className="primary-btn" onClick={q.proxima}>
            {"Montar o meu plano"}
          </button>
        </div>
      </div>
    </div>
  );
}
