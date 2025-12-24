import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { Card } from "@/components/ui/card"
import { TEAM_MEMBERS } from "@/lib/constants"

export default function TeamPreview() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Equipe
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Profissionais presentes no seu treino.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <Card
              key={member.name}
              className="border-white/10 bg-white/5 p-6"
            >
              <p className="text-lg font-semibold text-white">{member.name}</p>
              <p className="text-sm text-neon-500">{member.role}</p>
              <p className="mt-2 text-sm text-slate-300">
                {member.specialty}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
