// Tela 27 — convertida de scripts/quiz-mia/stitch/27.html (Stitch, projeto "MIA · Quiz de vendas").
import type { Status, TelaProps } from "../_quiz/tipos";
import { ROTULO, resumoAlertas } from "../_quiz/regras";
import { COR_STATUS, primeiroNome } from "../_quiz/ui";

const SELO: Record<Status, { color: string; background: string }> = {
  grave: { color: "#A1312A", background: "#FBECEB" },
  atencao: { color: "#7A5619", background: "#F8EFDC" },
  ok: { color: "#2F6B45", background: "#E5F1E8" },
  "?": { color: "#56654D", background: "#EDF0E9" },
};

const EMAIL_OK = /.+@.+\..+/;

export default function T27({ q }: TelaProps) {
  const nome = primeiroNome(q.r.nome) || "Ana";
  const resumo = resumoAlertas(q.alertas);
  const pode = EMAIL_OK.test(q.r.email.trim()) && q.r.aceite;
  const envia = () => {
    if (!pode) return;
    const email = q.r.email.trim().toLowerCase();
    const nomeLead = q.r.nome.trim();
    q.set({ email });
    // Para o GTM/Meta: dados crus (o pixel normaliza e faz o hash) + event_id para deduplicar com a API de Conversões.
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    (w.dataLayer ||= []).push({
      event: "quiz_lead",
      event_id: q.sid ? `quiz-lead-${q.sid}` : undefined,
      lead_nome: nomeLead,
      lead_email: email,
      user_data: { email, first_name: primeiroNome(nomeLead).toLowerCase() },
    });
    q.proxima();
  };
  const alternaAceite = () => q.set({ aceite: !q.r.aceite });
  return (
    <div data-tela="27">
      <div data-body className="q-bg-[#f9faf7] q-min-h-screen q-flex q-flex-col q-justify-between q-text-[#203e35] q-max-w-[390px] q-mx-auto q-relative q-select-none">
        <header className="q-pt-6 q-pb-2 q-px-6 q-flex q-items-center q-justify-between q-relative q-w-full">
          <button type="button" aria-label="Voltar" onClick={q.voltar} className="q-w-10 q-h-10 q--ml-2 q-flex q-items-center q-justify-center q-text-[#203e35] q-hover:opacity-75 q-transition-opacity">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-flex q-items-center q-justify-center">
            <div className="mia-sphere" />
          </div>
          <div className="q-w-10 q-h-10" />
        </header>
        <main className="q-flex-1 q-px-6 q-pt-4 q-pb-28 q-flex q-flex-col">
          <div className="q-mb-4">
            <span className="q-inline-flex q-items-center q-gap-1.5 q-px-3 q-py-1 q-rounded-full q-bg-[#E5F1E8] q-text-[#2F6B45] q-text-[12px] q-font-semibold q-tracking-tight">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {" O seu diagnóstico está pronto "}
            </span>
          </div>
          <h1 className="q-font-serif q-text-[28px] q-font-semibold q-leading-[1.18] q-text-[#203e35] q-mb-2 q-tracking-tight">
            {` ${primeiroNome(q.r.nome)}, para qual e-mail vai a sua cópia? `}
          </h1>
          <p className="q-text-[15px] q-leading-relaxed q-text-[#56654D] q-mb-6">
            {" O resultado aparece na próxima tela. A cópia fica no seu e-mail. "}
          </p>
          <div className="q-mb-5">
            <label htmlFor="quiz-email" className="q-block q-text-[13px] q-font-medium q-text-[#56654D] q-mb-1.5">
              {" E-mail "}
            </label>
            <div className="q-relative">
              <input
                id="quiz-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                enterKeyHint="go"
                value={q.r.email}
                onChange={(e) => q.set({ email: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") envia();
                }}
                style={{ caretColor: "#426B56" }}
                className="q-select-text q-w-full q-h-[52px] q-bg-white q-rounded-[12px] q-px-4 q-text-[16px] q-text-[#203e35] q-border q-border-[#DDE3DA] q-ring-2 q-ring-[#426B56] q-outline-none q-shadow-sm q-transition-all" />
              {" "}
              {" "}
              {/* cursor desenhado só na prévia (no quiz é o cursor de verdade do campo) */}
              {q.previa && <span className="q-absolute q-left-[134px] q-top-1/2 q--translate-y-1/2 q-w-[1.5px] q-h-5 q-bg-[#426B56] q-animate-pulse" />}
            </div>
          </div>
          <div
            aria-checked={q.r.aceite}
            className="q-flex q-items-start q-gap-3 q-mb-6 q-cursor-pointer"
            onClick={alternaAceite}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                alternaAceite();
              }
            }}
            role="checkbox"
            tabIndex={0}
          >
            {q.r.aceite ? (
              <div className="q-w-5 q-h-5 q-rounded-[4px] q-bg-[#203e35] q-flex q-items-center q-justify-center q-shrink-0 q-mt-0.5 q-shadow-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            ) : (
              <div className="q-w-5 q-h-5 q-rounded-[4px] q-bg-white q-border-2 q-border-[#C9D1C5] q-shrink-0 q-mt-0.5 q-shadow-sm" />
            )}
            <p className="q-text-[13px] q-leading-[1.45] q-text-[#56654D]">
              {" Aceito receber o meu diagnóstico e mensagens da MIA. Posso sair quando quiser. "}
            </p>
          </div>
          {/* prévia do resultado de verdade (título e os três alertas dela), levemente desfocada */}
          <div className="q-mt-auto q-relative q-rounded-2xl q-border q-border-[#E2E7DF] q-bg-white q-shadow-sm q-overflow-hidden" style={{ padding: "18px 18px 22px" }}>
            <div className="quiz-previa-res" aria-hidden="true">
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#8A6418" }}>SEU DIAGNÓSTICO</p>
              <p className="q-font-serif" style={{ fontSize: 21, lineHeight: 1.2, fontWeight: 600, color: "#203e35", marginTop: 6 }}>
                {`${nome}, o seu corpo está com ${resumo.txt}.`}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 14 }}>
                {q.alertas.map((al) => (
                  <div key={al.nome} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, padding: "10px 12px", borderRadius: 12, background: "#F6F7F4", borderLeft: `3px solid ${COR_STATUS[al.status]}` }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#203e35" }}>{al.nome}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, padding: "2px 10px", borderRadius: 9999, ...SELO[al.status] }}>{ROTULO[al.status]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="q-absolute q-inset-0 q-flex q-items-end q-justify-center" style={{ paddingBottom: 18, background: "linear-gradient(to bottom, rgba(255,255,255,0) 35%, rgba(255,255,255,.85) 100%)" }}>
              <div className="q-inline-flex q-items-center q-gap-1.5 q-px-3.5 q-py-1.5 q-rounded-full q-bg-white/95 q-border q-border-[#D9A441]/40 q-shadow-sm q-text-[#203e35]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D9A441" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                {" "}
                <span className="q-text-[13px] q-font-medium q-text-[#203e35]">
                  {"Seu resultado"}
                </span>
              </div>
            </div>
          </div>
        </main>
        <footer className="q-fixed q-bottom-0 q-left-0 q-right-0 q-max-w-[390px] q-mx-auto q-p-5 q-bg-gradient-to-t q-from-[#f9faf7] q-via-[#f9faf7] q-to-[#f9faf7]/0 q-pointer-events-auto">
          <button type="button" disabled={!pode} onClick={envia} style={{ opacity: pode ? undefined : 0.35 }} className="q-w-full q-h-[52px] q-rounded-full q-bg-[#203e35] q-text-white q-text-[16px] q-font-semibold q-flex q-items-center q-justify-center q-shadow-[0_4px_16px_rgba(32,62,53,0.22)] q-active:scale-[0.99] q-transition-transform">
            {" Ver o meu resultado "}
          </button>
        </footer>
      </div>
    </div>
  );
}
