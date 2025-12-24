import { NavLink, Link } from "react-router-dom"
import Container from "./Container"
import MobileNav from "./MobileNav"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/cn"
import { NAV_LINKS, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants"
import { getWhatsAppUrl } from "@/services/contact"

export default function Header() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-graphite-950/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight text-white">
          VertexFit
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-slate-300 transition hover:text-white",
                  isActive && "text-white"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" className="border-white/15">
            <Link to="/planos">Ver planos</Link>
          </Button>
          <Button asChild className="bg-neon-500 text-graphite-950 hover:bg-neon-500/90">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Agendar visita
            </a>
          </Button>
        </div>
        <MobileNav />
      </Container>
    </header>
  )
}
