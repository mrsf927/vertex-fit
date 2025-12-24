import { useEffect } from "react"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import WhatsAppCTA from "@/components/home/WhatsAppCTA"
import { setSeo } from "@/lib/seo"
import { ADDRESS, EMAIL, WHATSAPP_DISPLAY } from "@/lib/constants"

export default function ContactPage() {
  useEffect(() => {
    setSeo({
      title: "Contato",
      description: "Fale com a equipe VertexFit e agende sua visita.",
    })
  }, [])

  return (
    <>
      <Section>
        <Container className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Contato
            </p>
            <h1 className="text-3xl font-semibold text-white">
              Fale direto com nossa equipe.
            </h1>
            <p className="text-sm text-slate-300">
              Responda o formulario ou nos chame no WhatsApp para receber o
              melhor plano.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Endereco
              </p>
              <p className="mt-2 text-sm text-white">{ADDRESS}</p>
            </Card>
            <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                WhatsApp
              </p>
              <p className="mt-2 text-sm text-white">{WHATSAPP_DISPLAY}</p>
            </Card>
            <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Email
              </p>
              <p className="mt-2 text-sm text-white">{EMAIL}</p>
            </Card>
          </div>
        </Container>
      </Section>
      <WhatsAppCTA />
    </>
  )
}
