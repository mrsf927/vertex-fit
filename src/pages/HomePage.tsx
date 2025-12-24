import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Hero from "@/components/home/Hero"
import Benefits from "@/components/home/Benefits"
import Programs from "@/components/home/Programs"
import SchedulePreview from "@/components/home/SchedulePreview"
import PlansPreview from "@/components/home/PlansPreview"
import Differentials from "@/components/home/Differentials"
import Facility from "@/components/home/Facility"
import TeamPreview from "@/components/home/TeamPreview"
import SocialProof from "@/components/home/SocialProof"
import WhatsAppCTA from "@/components/home/WhatsAppCTA"
import FAQ from "@/components/home/FAQ"
import { setSeo } from "@/lib/seo"
import { fetchHomeContent } from "@/services/content"

export default function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["content", "home"],
    queryFn: fetchHomeContent,
  })

  useEffect(() => {
    setSeo({
      title: "Home",
      description:
        "Academia urbana moderna em Sao Paulo com estrutura premium e horarios flexiveis.",
    })
  }, [])

  return (
    <>
      <Hero />
      <Benefits
        items={data?.benefits ?? []}
        isLoading={isLoading}
        isError={isError}
      />
      <Programs />
      <SchedulePreview />
      <PlansPreview />
      <Differentials />
      <Facility />
      <TeamPreview />
      <SocialProof />
      <WhatsAppCTA />
      <FAQ />
    </>
  )
}
