import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { setSeo } from "@/lib/seo"
import { fetchPlans } from "@/services/content"

export default function PlansPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  })

  useEffect(() => {
    setSeo({
      title: "Planos",
      description: "Compare os planos da VertexFit e escolha seu ritmo.",
    })
  }, [])

  return (
    <Section>
      <Container className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Planos
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Planos flexiveis para sua rotina.
          </h1>
        </div>
        {isError ? (
          <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            Nao foi possivel carregar os planos no momento.
          </Card>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`plan-skeleton-${index}`}
                    className="h-44 rounded-2xl border border-white/10 bg-white/5 animate-pulse"
                  />
                ))
              : data?.map((plan) => (
                  <Card
                    key={plan.id}
                    className="border-white/10 bg-white/5 p-6"
                  >
                    <Badge className="bg-neon-500 text-graphite-950">
                      {plan.badge}
                    </Badge>
                    <h2 className="mt-4 text-xl font-semibold text-white">
                      {plan.name}
                    </h2>
                    <p className="text-sm text-slate-400">{plan.cadence}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {plan.price}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      {plan.description}
                    </p>
                  </Card>
                ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
