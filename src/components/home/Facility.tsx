import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"

const PLACEHOLDERS = ["Salao principal", "Area funcional", "Studio HIIT"]

export default function Facility() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Estrutura
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Um espaco moderno para cada tipo de treino.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PLACEHOLDERS.map((label) => (
            <Card
              key={label}
              className="h-48 border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
            >
              <p className="text-sm text-slate-300">{label}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
