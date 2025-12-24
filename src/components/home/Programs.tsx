import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import { PROGRAMS } from "@/lib/constants"

export default function Programs() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Modalidades
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Treinos que encaixam na sua rotina.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <Card
              key={program}
              className="border-white/10 bg-white/5 p-6 text-sm text-slate-300 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <p className="text-base font-semibold text-white">{program}</p>
              <p className="mt-2 text-sm text-slate-400">
                Turmas guiadas e orientacao constante.
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
