import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"

type Benefit = {
  title: string
  description: string
}

type BenefitsProps = {
  items: Benefit[]
  isLoading?: boolean
  isError?: boolean
}

export default function Benefits({ items, isLoading, isError }: BenefitsProps) {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Beneficios
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Tudo para voce manter constancia.
          </h2>
        </div>
        {isError ? (
          <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            Nao foi possivel carregar os beneficios agora.
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`benefit-skeleton-${index}`}
                    className="h-36 rounded-2xl border border-white/10 bg-white/5 animate-pulse"
                  />
                ))
              : items.map((item) => (
                  <Card
                    key={item.title}
                    className="border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      {item.description}
                    </p>
                  </Card>
                ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
