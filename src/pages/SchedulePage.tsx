import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import { setSeo } from "@/lib/seo"
import { fetchSchedule } from "@/services/content"

export default function SchedulePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["schedule"],
    queryFn: fetchSchedule,
  })

  useEffect(() => {
    setSeo({
      title: "Horarios",
      description: "Horarios amplos para voce treinar quando puder.",
    })
  }, [])

  return (
    <Section>
      <Container className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Horarios
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Treine cedo ou tarde, do jeito que preferir.
          </h1>
        </div>
        {isError ? (
          <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            Nao foi possivel carregar os horarios.
          </Card>
        ) : (
          <div className="grid gap-4">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`schedule-skeleton-${index}`}
                    className="h-16 rounded-2xl border border-white/10 bg-white/5 animate-pulse"
                  />
                ))
              : data?.map((item) => (
                  <Card
                    key={item.day}
                    className="flex items-center justify-between border-white/10 bg-white/5 p-4 text-sm text-slate-300"
                  >
                    <span>{item.day}</span>
                    <span className="font-semibold text-white">
                      {item.hours}
                    </span>
                  </Card>
                ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
