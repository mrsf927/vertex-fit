import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SCHEDULE_PREVIEW } from "@/lib/constants"
import { Link } from "react-router-dom"

export default function SchedulePreview() {
  return (
    <Section>
      <Container className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Horarios
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Abra sua agenda e escolha o melhor horario.
          </h2>
          <p className="text-sm text-slate-300">
            Abrimos cedo e fechamos tarde para encaixar no seu dia.
          </p>
          <Button asChild variant="outline" className="border-white/15">
            <Link to="/horarios">Ver horarios completos</Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {SCHEDULE_PREVIEW.map((item) => (
            <Card
              key={item.day}
              className="flex items-center justify-between border-white/10 bg-white/5 p-4 text-sm text-slate-300"
            >
              <span>{item.day}</span>
              <span className="font-semibold text-white">{item.hours}</span>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
