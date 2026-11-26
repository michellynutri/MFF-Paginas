"use client";
// Tela 30: o app de verdade em uso (vídeo gerado em scripts/quiz-mia/motion), dentro de um celular desenhado em CSS.
// O vídeo só carrega quando ela rola até ele; as abas embaixo acendem junto com o vídeo.
import { useEffect, useRef, useState } from "react";

const ABAS = [
  { nome: "Início", ate: 3.6, frase: "O seu dia num olhar: comida, água e movimento." },
  { nome: "Meu plano", ate: 7.2, frase: "O cardápio do dia, refeição por refeição." },
  { nome: "Registrar", ate: 10, frase: "Água, exercício, peso e aplicação, cada um no seu lugar." },
  { nome: "Chat", ate: 99, frase: "Bateu a dúvida? A Mia responde na hora." },
];

export default function VideoApp() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ativa, setAtiva] = useState(0);
  const [carrega, setCarrega] = useState(false); // fonte só entra quando ela chega perto
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setVisivel(e.isIntersecting);
        if (e.isIntersecting) setCarrega(true);
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // toca só visível (e depois que a fonte já está no elemento)
  useEffect(() => {
    const v = ref.current;
    if (!v || !carrega) return;
    if (visivel) v.play().catch(() => {});
    else v.pause();
  }, [carrega, visivel]);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 32 }}>
      <h2 style={{ alignSelf: "flex-start", fontSize: 17, fontWeight: 600, color: "#203E35", lineHeight: 1.25, marginBottom: 14 }}>
        Assim é o seu dia na MIA
      </h2>
      <div
        style={{
          width: 212, padding: 6, borderRadius: 36, background: "#18241F",
          boxShadow: "0 18px 40px -18px rgba(32,62,53,.55), inset 0 0 0 1.5px #2E3D37",
        }}
      >
        <div style={{ position: "relative", borderRadius: 30, overflow: "hidden", background: "#F6F5F1", aspectRatio: "390 / 844" }}>
          <video
            ref={ref}
            src={carrega ? "/videos/quiz-mia/app-mia.mp4" : undefined}
            poster="/images/quiz-mia/app-mia-poster.webp"
            muted
            loop
            playsInline
            preload="none"
            aria-label="O app da MIA em uso: Início, Meu plano, Registrar e Chat"
            onTimeUpdate={(e) => {
              const t = e.currentTarget.currentTime;
              setAtiva(ABAS.findIndex((a) => t < a.ate));
            }}
            style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap", justifyContent: "center" }}>
        {ABAS.map((a, i) => (
          <span
            key={a.nome}
            style={{
              fontSize: 12.5, fontWeight: 600, padding: "5px 11px", borderRadius: 99, transition: "all .3s ease",
              background: i === ativa ? "#203E35" : "#EDF0E9", color: i === ativa ? "#fff" : "#56654D",
            }}
          >
            {a.nome}
          </span>
        ))}
      </div>
      <p style={{ minHeight: 40, marginTop: 10, fontSize: 14, lineHeight: 1.4, color: "#56654D", textAlign: "center", maxWidth: 300 }}>
        {ABAS[ativa].frase}
      </p>
    </div>
  );
}
