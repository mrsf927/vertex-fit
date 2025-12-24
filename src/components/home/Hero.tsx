import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants"
import { getWhatsAppUrl } from "@/services/contact"

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)

  return (
    <Section className="pt-8">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center rounded-full border border-neon-500/40 bg-neon-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neon-500">
            Academia urbana em Sao Paulo
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Treine com estrutura completa e acompanhamento de verdade.
            </h1>
            <p className="text-base text-slate-300 sm:text-lg">
              Musculacao, Funcional e HIIT em um espaco moderno - planos
              flexiveis e horarios estendidos.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-neon-500 text-graphite-950 hover:bg-neon-500/90"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Agendar visita
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/15">
              <Link to="/planos">Ver planos</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-neon-500/20 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-graphite-900 to-black p-8 shadow-xl">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                VertexFit Studio
              </p>
              <p className="text-2xl font-semibold text-white">
                Treinos inteligentes, ambiente premium e evolucao constante.
              </p>
              <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  +120 equipamentos modernos
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Aulas inclusas no plano
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Equipe presente no salao
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Horarios estendidos
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
