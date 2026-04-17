import type { Metadata } from 'next'
import './vendas.css'

export const metadata: Metadata = {
  title: 'Método Metabólico Feminino — Michelly Silveira',
  description: 'O protocolo completo que faltava no seu tratamento: do primeiro dia de uso até depois do desmame.',
}

export default function VendasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
