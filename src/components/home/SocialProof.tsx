import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import { TESTIMONIALS } from "@/lib/constants"

export default function SocialProof() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Depoimentos
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Resultados reais de quem treina com a gente.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <Card
              key={item.name}
              className="border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm text-slate-300">"{item.quote}"</p>
              <p className="mt-4 text-sm font-semibold text-white">
                {item.name}, {item.age}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
