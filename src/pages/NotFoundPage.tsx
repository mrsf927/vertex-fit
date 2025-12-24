import { Link } from "react-router-dom"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <Section>
      <Container className="flex flex-col items-start gap-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            404
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Pagina nao encontrada.
          </h1>
          <p className="text-sm text-slate-300">
            A rota que voce tentou acessar nao existe.
          </p>
        </div>
        <Button asChild className="bg-neon-500 text-graphite-950 hover:bg-neon-500/90">
          <Link to="/">Voltar para a home</Link>
        </Button>
      </Container>
    </Section>
  )
}
