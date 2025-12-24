import Container from "./Container"
import { Separator } from "@/components/ui/separator"
import {
  ADDRESS,
  EMAIL,
  FOOTER_LINKS,
  INSTAGRAM,
  SCHEDULE_PREVIEW,
} from "@/lib/constants"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite-900/60">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-lg font-semibold">VertexFit</p>
          <p className="text-sm text-slate-400">
            Academia urbana moderna em Sao Paulo.
          </p>
          <p className="text-sm text-slate-400">{ADDRESS}</p>
          <p className="text-sm text-slate-400">{EMAIL}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Horarios
          </p>
          {SCHEDULE_PREVIEW.map((item) => (
            <p key={item.day} className="text-sm text-slate-400">
              {item.day}: {item.hours}
            </p>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Links
          </p>
          <div className="flex flex-col gap-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-400">Instagram: {INSTAGRAM}</p>
        </div>
      </Container>
      <Separator className="bg-white/10" />
      <Container className="flex flex-col items-start gap-2 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <span>VertexFit. Todos os direitos reservados.</span>
        <span>Desenvolvido para conversao via WhatsApp.</span>
      </Container>
    </footer>
  )
}
