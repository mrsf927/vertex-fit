import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/lib/constants"

export default function FAQ() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Duvidas frequentes sobre a VertexFit.
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="border-white/10"
            >
              <AccordionTrigger className="text-left text-white">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
