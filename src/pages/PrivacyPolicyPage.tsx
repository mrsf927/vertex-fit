import { useEffect } from "react"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import { setSeo } from "@/lib/seo"

export default function PrivacyPolicyPage() {
  useEffect(() => {
    setSeo({
      title: "Politicas",
      description: "Politica de privacidade da VertexFit.",
    })
  }, [])

  return (
    <Section>
      <Container className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Politicas
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Privacidade e transparencia.
          </h1>
        </div>
        <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          Este conteudo e ficticio e serve como placeholder para politica de
          privacidade. Ajuste conforme necessidade.
        </Card>
      </Container>
    </Section>
  )
}
