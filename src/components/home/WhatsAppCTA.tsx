import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { CONTACT_GOALS } from "@/lib/constants"
import { contactSchema, type ContactFormValues } from "@/schemas/contact.schema"
import { submitContact } from "@/services/contact"

export default function WhatsAppCTA() {
  const [lastMessage, setLastMessage] = useState<string | null>(null)
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    const { message, url } = submitContact(values)
    setLastMessage(message)

    const opened = window.open(url, "_blank", "noopener,noreferrer")

    toast({
      title: "Enviamos sua solicitacao",
      description: "Se nao abrir, copie a mensagem.",
      action: (
        <ToastAction
          altText="Copiar mensagem"
          onClick={() => handleCopy(message)}
        >
          Copiar mensagem
        </ToastAction>
      ),
    })

    if (!opened) {
      console.warn("Popup bloqueado. Use o link manual.")
    }
  }

  const handleCopy = async (message: string) => {
    try {
      await navigator.clipboard.writeText(message)
      toast({ title: "Mensagem copiada com sucesso." })
    } catch (error) {
      toast({
        title: "Nao foi possivel copiar.",
        description: "Selecione a mensagem manualmente.",
      })
    }
  }

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = form

  return (
    <Section className="pb-24">
      <Container>
        <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-graphite-900 via-black to-graphite-950 p-8 shadow-2xl">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-neon-500/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                WhatsApp direto
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Bora treinar? Agende sua visita hoje.
              </h2>
              <p className="text-sm text-slate-300">
                Responda 4 campos e receba orientacao do melhor plano para seu
                objetivo.
              </p>
            </div>
            <form
              className="grid gap-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="text-xs uppercase tracking-wide text-slate-400"
                  >
                    Nome
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Seu nome"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="contact-whatsapp"
                    className="text-xs uppercase tracking-wide text-slate-400"
                  >
                    WhatsApp
                  </label>
                  <Input
                    id="contact-whatsapp"
                    placeholder="(11) 99999-9999"
                    {...register("whatsapp")}
                  />
                  {errors.whatsapp && (
                    <span className="text-xs text-red-400">
                      {errors.whatsapp.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="text-xs uppercase tracking-wide text-slate-400"
                  >
                    Email (opcional)
                  </label>
                  <Input
                    id="contact-email"
                    placeholder="voce@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="contact-goal"
                    className="text-xs uppercase tracking-wide text-slate-400"
                  >
                    Objetivo
                  </label>
                  <Controller
                    control={control}
                    name="goal"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger id="contact-goal">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {CONTACT_GOALS.map((goal) => (
                            <SelectItem key={goal} value={goal}>
                              {goal}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.goal && (
                    <span className="text-xs text-red-400">
                      {errors.goal.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="contact-message"
                  className="text-xs uppercase tracking-wide text-slate-400"
                >
                  Mensagem (opcional)
                </label>
                <Textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Conte rapidamente seu objetivo."
                  {...register("message")}
                />
                {errors.message && (
                  <span className="text-xs text-red-400">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  className="bg-neon-500 text-graphite-950 hover:bg-neon-500/90"
                  disabled={isSubmitting}
                >
                  Agendar via WhatsApp
                </Button>
                {lastMessage && (
                  <Button
                    type="button"
                    variant="outline"
                    className="border-white/15"
                    onClick={() => handleCopy(lastMessage)}
                  >
                    Copiar mensagem
                  </Button>
                )}
              </div>
            </form>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
