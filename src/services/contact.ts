import { WHATSAPP_NUMBER } from "@/lib/constants"
import type { ContactFormValues } from "@/schemas/contact.schema"

export function buildWhatsAppMessage(values: ContactFormValues) {
  const email = values.email ? values.email : "Nao informado"

  return `Ola! Quero conhecer a VertexFit. Meu objetivo e: ${values.goal}. Nome: ${values.name}. WhatsApp: ${values.whatsapp}. Email: ${email}.`
}

export function getWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export function submitContact(values: ContactFormValues) {
  const message = buildWhatsAppMessage(values)
  const url = getWhatsAppUrl(message)

  return { message, url }
}
