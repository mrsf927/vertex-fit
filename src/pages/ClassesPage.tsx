import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import { setSeo } from "@/lib/seo"
import { fetchClasses } from "@/services/content"

export default function ClassesPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["classes"],
    queryFn: fetchClasses,
  })

  useEffect(() => {
    setSeo({
      title: "Modalidades",
      description: "Conheca as modalidades disponiveis na VertexFit.",
    })
  }, [])

  return (
    <Section>
      <Container className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Modalidades
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Programas para todos os objetivos.
          </h1>
        </div>
        {isError ? (
          <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            Nao foi possivel carregar as modalidades.
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`class-skeleton-${index}`}
                    className="h-28 rounded-2xl border border-white/10 bg-white/5 animate-pulse"
                  />
                ))
              : data?.map((item) => (
                  <Card
                    key={item}
                    className="border-white/10 bg-white/5 p-6 text-sm text-slate-300"
                  >
                    <p className="text-lg font-semibold text-white">{item}</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Acompanhamento completo e turmas reduzidas.
                    </p>
                  </Card>
                ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
