import { z } from "zod"
import { CONTACT_GOALS } from "@/lib/constants"

const whatsappRegex = /^[0-9()+\-\s]{8,}$/

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  whatsapp: z
    .string()
    .min(8, "Informe seu WhatsApp")
    .regex(whatsappRegex, "Formato de WhatsApp invalido"),
  email: z.preprocess(
    (value) =>
      typeof value === "string" && value.trim() === "" ? undefined : value,
    z.string().email("Email invalido").optional()
  ),
  goal: z.enum(CONTACT_GOALS, {
    required_error: "Selecione um objetivo",
  }),
  message: z.preprocess(
    (value) =>
      typeof value === "string" && value.trim() === "" ? undefined : value,
    z.string().max(500, "Mensagem muito longa").optional()
  ),
})

export type ContactFormValues = z.infer<typeof contactSchema>
