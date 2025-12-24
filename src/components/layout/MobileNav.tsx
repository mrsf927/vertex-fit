import { NavLink, Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants"
import { cn } from "@/lib/cn"
import { getWhatsAppUrl } from "@/services/contact"

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export default function MobileNav() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Abrir menu">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="border-white/10 bg-graphite-900 text-white">
          <div className="flex flex-col gap-6 pt-10">
            <Link to="/" className="text-xl font-semibold">
              VertexFit
            </Link>
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <NavLink
                    to={link.href}
                    end={link.href === "/"}
                    className={({ isActive }) =>
                      cn(
                        "text-base text-slate-300 transition hover:text-white",
                        isActive && "text-white"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </SheetClose>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Button asChild variant="outline" className="border-white/15">
                  <Link to="/planos">Ver planos</Link>
                </Button>
              </SheetClose>
              <Button asChild className="bg-neon-500 text-graphite-950 hover:bg-neon-500/90">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Agendar visita
                </a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
