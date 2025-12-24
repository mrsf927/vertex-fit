import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import { setSeo } from "@/lib/seo"
import { fetchTestimonials } from "@/services/content"

export default function TestimonialsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  })

  useEffect(() => {
    setSeo({
      title: "Depoimentos",
      description: "Resultados reais de quem treina na VertexFit.",
    })
  }, [])

  return (
    <Section>
      <Container className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Depoimentos
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Historias que inspiram constancia.
          </h1>
        </div>
        {isError ? (
          <Card className="border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            Nao foi possivel carregar os depoimentos.
          </Card>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`testimonial-skeleton-${index}`}
                    className="h-36 rounded-2xl border border-white/10 bg-white/5 animate-pulse"
                  />
                ))
              : data?.map((item) => (
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
        )}
      </Container>
    </Section>
  )
}
