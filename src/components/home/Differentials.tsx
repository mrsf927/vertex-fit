import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"

const DIFFERENTIALS = [
  { label: "Area total", value: "1.200m2" },
  { label: "Equipamentos", value: "120+" },
  { label: "Turmas semanais", value: "40+" },
  { label: "Satisfacao", value: "95%" },
]

export default function Differentials() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Diferenciais
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Experiencia premium em cada detalhe.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item) => (
            <Card
              key={item.label}
              className="border-white/10 bg-white/5 p-6 text-center"
            >
              <p className="text-2xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
                {item.label}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
