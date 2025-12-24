import { useEffect } from "react"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { setSeo } from "@/lib/seo"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  useEffect(() => {
    setSeo({
      title: "Sobre",
      description: "Conheca a proposta da VertexFit e nossa estrutura urbana.",
    })
  }, [])

  return (
    <Section>
      <Container className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Sobre
          </p>
          <h1 className="text-3xl font-semibold text-white">
            A VertexFit nasceu para elevar seu treino.
          </h1>
          <p className="text-sm text-slate-300">
            Somos uma academia urbana moderna em Sao Paulo, com foco em
            acompanhamento, resultado e experiencia premium.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            Estrutura completa, equipamentos novos e ambientes climatizados.
          </Card>
          <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            Profissionais presentes para orientar execucao e evolucao.
          </Card>
        </div>
      </Container>
    </Section>
  )
}
