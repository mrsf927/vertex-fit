import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import { setSeo } from "@/lib/seo"
import { fetchTeam } from "@/services/content"

export default function TeamPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["team"],
    queryFn: fetchTeam,
  })

  useEffect(() => {
    setSeo({
      title: "Equipe",
      description: "Conheca os profissionais da VertexFit.",
    })
  }, [])

  return (
    <Section>
      <Container className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Equipe
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Treinadores focados em sua evolucao.
          </h1>
        </div>
        {isError ? (
          <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            Nao foi possivel carregar a equipe.
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`team-skeleton-${index}`}
                    className="h-36 rounded-2xl border border-white/10 bg-white/5 animate-pulse"
                  />
                ))
              : data?.map((member) => (
                  <Card
                    key={member.name}
                    className="border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-lg font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="text-sm text-neon-500">{member.role}</p>
                    <p className="mt-2 text-sm text-slate-300">
                      {member.specialty}
                    </p>
                  </Card>
                ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
