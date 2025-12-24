import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PLANS } from "@/lib/constants"
import { Link } from "react-router-dom"

export default function PlansPreview() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Planos
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Escolha o ritmo ideal para voce.
          </h2>
        </div>
        <Tabs defaultValue={PLANS[0].id} className="space-y-6">
          <TabsList className="flex flex-wrap gap-2 bg-white/5">
            {PLANS.map((plan) => (
              <TabsTrigger key={plan.id} value={plan.id}>
                {plan.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {PLANS.map((plan) => (
            <TabsContent key={plan.id} value={plan.id}>
              <Card className="border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-white">
                        {plan.name}
                      </h3>
                      <Badge className="bg-neon-500 text-graphite-950">
                        {plan.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-300">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">{plan.cadence}</p>
                    <p className="text-2xl font-semibold text-white">
                      {plan.price}
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        <Button asChild className="bg-neon-500 text-graphite-950 hover:bg-neon-500/90">
          <Link to="/planos">Ver detalhes dos planos</Link>
        </Button>
      </Container>
    </Section>
  )
}
