"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import { Play, Lock, MessageCircle, Calendar } from "lucide-react"

// ─── Countdown Hook ───────────────────────────────────────────────────────────

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

// ─── Sticky Bar ───────────────────────────────────────────────────────────────

function StickyBar({ targetDate }: { targetDate: Date }) {
  const [mounted, setMounted] = useState(false)
  const { hours, minutes, seconds } = useCountdown(targetDate)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="sticky top-0 z-50 bg-verde-esc px-4 py-3">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 text-center">
        <span className="font-sans text-sm font-medium text-white">
          Aula 01 no ar agora. Sai do ar em:
        </span>
        <span className="font-sans text-sm font-bold text-white">
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}

// ─── Countdown Timer (para próxima aula) ──────────────────────────────────────

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [mounted, setMounted] = useState(false)
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3">
        {["Dias", "Horas", "Min", "Seg"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-branco font-sans text-2xl font-bold text-marrom shadow-card">
              00
            </div>
            <span className="mt-1 font-sans text-xs text-texto/60">{label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { value: days, label: "Dias" },
        { value: hours, label: "Horas" },
        { value: minutes, label: "Min" },
        { value: seconds, label: "Seg" },
      ].map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-branco font-sans text-2xl font-bold text-marrom shadow-card">
            {String(value).padStart(2, "0")}
          </div>
          <span className="mt-1 font-sans text-xs text-texto/60">{label}</span>
        </div>
      ))}
    </div>
  )
}

// ─── Lesson Avatar ────────────────────────────────────────────────────────────

interface LessonAvatarProps {
  number: string
  date: string
  isActive?: boolean
  label?: string
  avatar: string
}

function LessonAvatar({ number, date, isActive, label, avatar }: LessonAvatarProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`relative h-14 w-14 overflow-hidden rounded-full border-2 md:h-16 md:w-16 ${
          isActive
            ? "border-verde-vita"
            : "border-borda grayscale"
        }`}
      >
        <img
          src={avatar}
          alt={label || `Aula ${number}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className={`font-sans text-xs font-semibold ${isActive ? "text-verde-esc" : "text-texto/50"}`}>
          {label || `Aula ${number}`}
        </p>
        <p className={`font-sans text-[10px] ${isActive ? "font-medium text-verde-vita" : "text-texto/40"}`}>
          {date}
        </p>
      </div>
    </div>
  )
}

// ─── Video Thumbnail Card ─────────────────────────────────────────────────────

function VideoThumbnail() {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className="relative overflow-hidden rounded-2xl">
        <div className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/iw6CuewAA-8?autoplay=1&rel=0"
            title="Aula 01 - O erro que 90% das usuárias de Mounjaro cometem sem saber"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="aspect-video w-full">
        <img
          src="/images/thumb-aula-1.png"
          alt="Aula 01 - O erro que 90% das usuárias de Mounjaro cometem sem saber"
          className="h-full w-full object-cover"
        />
        <button 
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex cursor-pointer items-center justify-center"
          aria-label="Reproduzir vídeo"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110 md:h-20 md:w-20">
            <Play className="h-8 w-8 fill-verde-esc text-verde-esc md:h-10 md:w-10" />
          </div>
        </button>
        <div className="absolute left-4 top-4 pointer-events-none">
          <span className="rounded-full bg-verde-vita px-3 py-1 font-sans text-xs font-bold uppercase text-white shadow-lg">
            LIBERADO
          </span>
        </div>
        <div className="absolute bottom-4 right-4 hidden pointer-events-none md:block">
          <div className="flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
            <span className="font-sans text-xs italic text-white/90">Aperte o play</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Lesson Card (Cronograma) ─────────────────────────────────────────────────

interface LessonCardProps {
  lessonNumber: string
  title: string
  date: string
  time: string
  description: string[]
  isActive?: boolean
  isLocked?: boolean
  thumbnail: string
}

function LessonCard({ lessonNumber, title, date, time, description, isActive, isLocked, thumbnail }: LessonCardProps) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-branco shadow-card transition-all ${isLocked ? "" : "hover:-translate-y-1"}`}>
      <div className={`relative aspect-video w-full overflow-hidden ${isLocked ? "grayscale" : ""}`}>
        <img
          src={thumbnail}
          alt={`Aula ${lessonNumber} - ${title}`}
          className="h-full w-full object-cover"
        />
        {isActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <Play className="h-6 w-6 fill-verde-esc text-verde-esc" />
            </div>
          </div>
        )}
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg">
              <Lock className="h-6 w-6 text-texto/70" />
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className={`mb-3 h-1 w-12 rounded-full ${isActive ? "bg-verde-vita" : "bg-borda"}`} />
        <p className="font-sans text-sm font-bold text-verde-esc">Aula {lessonNumber}:</p>
        <p className="font-serif text-lg font-semibold text-marrom">{title}</p>
        <p className={`mt-1 font-sans text-xs ${isActive ? "font-medium text-verde-vita" : "text-texto/50"}`}>
          {isActive ? "Assistindo" : `${date}`}
        </p>
        {!isLocked && description.length > 0 && (
          <p className="mt-3 font-sans text-sm leading-relaxed text-texto/70">
            {description[0]}
          </p>
        )}
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CPLsPage() {
  const aula01Expiration = new Date("2026-03-23T18:00:00")
  const nextLessonDate = new Date("2026-03-23T18:00:00")

  return (
    <main className="min-h-screen bg-creme">
      <StickyBar targetDate={aula01Expiration} />

      <section className="bg-creme px-5 py-8 lg:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <div className="mb-10 flex items-center justify-center gap-4 overflow-x-auto pb-2 md:gap-6">
            <LessonAvatar number="01" date="Assistindo" isActive avatar="/images/avatar-aula-1.png" />
            <LessonAvatar number="02" date="23/03" avatar="/images/avatar-aula-2.png" />
            <LessonAvatar number="03" date="24/03" avatar="/images/avatar-aula-3.png" />
            <LessonAvatar number="04" date="26/03" label="Evento" avatar="/images/avatar-evento.png" />
          </div>

          <div className="mx-auto max-w-2xl">
            <VideoThumbnail />

            <div className="mt-6 rounded-2xl bg-branco p-6 shadow-card">
              <p className="mb-1 font-sans text-sm font-bold text-verde-esc">AULA 01</p>
              <h2 className="font-serif text-xl font-bold text-marrom md:text-2xl">
                O erro que 90% das usuárias de Mounjaro cometem sem saber.
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-texto/80">
                Toda semana eu atendo duas mulheres usando a mesma medicação. Uma está emagrecendo — e está bem. A outra está emagrecendo — e está com o cabelo caindo, o intestino travado, sem energia.
              </p>

              <div className="mt-8 rounded-xl bg-creme p-6">
                <p className="mb-4 text-center font-sans text-sm font-medium text-texto/70">
                  A próxima aula começa em:
                </p>
                <CountdownTimer targetDate={nextLessonDate} />
              </div>

              <div className="mt-6">
                <p className="mb-4 text-center font-sans text-sm text-texto/70">
                  Entre no grupo do WhatsApp para receber o aviso quando a próxima aula abrir
                </p>
                <a
                  href="https://api.pluglead.com/group-manager/group-manager/36826ccc-77a3-430f-85bb-f4ea8d4bab83/redirect/a3442b38-8982-4b3f-abf2-41cf01acc11a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-verde-vita py-4 font-sans text-base font-bold uppercase tracking-wide text-texto shadow-vita transition-all hover:scale-[1.02] hover:brightness-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  ENTRAR NO GRUPO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-creme px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 flex justify-center">
            <span className="rounded-full bg-verde-vita px-4 py-1.5 font-sans text-sm font-bold text-texto">
              Cronograma de aulas
            </span>
          </div>
          <p className="mb-10 text-center font-sans text-base text-texto/70">
            Confira as próximas aulas
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <LessonCard
              lessonNumber="01"
              title="O erro que 90% das usuárias cometem"
              date="22/03"
              time="17h"
              description={["Toda semana eu atendo duas mulheres usando a mesma medicação. Uma está bem. A outra está com o cabelo caindo."]}
              thumbnail="/images/thumb-aula-1.png"
              isActive
            />

            <LessonCard
              lessonNumber="02"
              title="O que eu pergunto para toda paciente que usa Mounjaro antes de montar o protocolo dela."
              date="23/03"
              time="18h"
              description={["Existem seis áreas que determinam se você está no caminho da transformação — ou só do emagrecimento. Nessa aula te apresento cada um desses pilares."]}
              thumbnail="/images/thumb-aula-2.png"
              isLocked
            />

            <LessonCard
              lessonNumber="03"
              title="As 3 decisões que determinam se você vai se orgulhar do resultado — ou recomeçar do zero."
              date="24/03"
              time="18h"
              description={["Antes de falar sobre o evento, eu vou te dar algo que você pode aplicar ainda hoje. Um protocolo de três passos para o intestino — sem remédio, sem mudar tudo o que você come. Depois disso, as três decisões. Simples de ver. Difícil de desfazer se você deixar passar."]}
              thumbnail="/images/thumb-aula-3.png"
              isLocked
            />
          </div>
        </div>
      </section>

      <section className="bg-marrom px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
            <Calendar className="h-4 w-4 text-verde-vita" />
            <span className="font-sans text-sm font-medium text-white">
              Quinta-feira, 26 de março — 20h
            </span>
          </div>

          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Evento Blindagem — Ao vivo e gratuito
          </h2>

          <p className="mt-2 font-serif text-lg italic text-white/80">
            Três dias. Três vídeos. Uma única chegada.
          </p>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70">
            No Blindagem eu entrego ao vivo o protocolo completo que uso no consultório há 13 anos — pela primeira vez fora dele. Nutrição por fase, suplementação estratégica, preservação de massa magra, e o protocolo de desmame que separa as mulheres que mantêm o resultado das que recomeçam do zero.
          </p>

          <a
            href="https://api.pluglead.com/group-manager/group-manager/36826ccc-77a3-430f-85bb-f4ea8d4bab83/redirect/a3442b38-8982-4b3f-abf2-41cf01acc11a"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[56px] items-center gap-2 rounded-full bg-verde-vita px-10 py-4 font-sans text-base font-bold uppercase tracking-wide text-texto shadow-vita transition-all hover:scale-[1.02] hover:brightness-105"
          >
            ENTRAR NO GRUPO
          </a>
        </div>
      </section>

      <footer className="border-t border-borda bg-creme px-5 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-sans text-sm font-semibold text-marrom">
            Blindagem — 26 de março, às 20h.
          </p>
          <p className="mt-2 font-sans text-xs text-texto/60">
            Michelly Ribeiro — Nutricionista clínica, 13 anos de experiência, especialista em metabolismo feminino e tratamentos com canetas emagrecedoras.
          </p>
        </div>
      </footer>
    </main>
  )
}
