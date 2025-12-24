import {
  BENEFITS,
  PROGRAMS,
  PLANS,
  SCHEDULE_PREVIEW,
  TEAM_MEMBERS,
  TESTIMONIALS,
  FAQ_ITEMS,
} from "@/lib/constants"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function simulate<T>(payload: T) {
  await delay(300)
  return payload
}

export function fetchHomeContent() {
  return simulate({
    benefits: BENEFITS,
    programs: PROGRAMS,
    testimonials: TESTIMONIALS,
    faq: FAQ_ITEMS,
  })
}

export function fetchPlans() {
  return simulate(PLANS)
}

export function fetchClasses() {
  return simulate(PROGRAMS)
}

export function fetchSchedule() {
  return simulate(SCHEDULE_PREVIEW)
}

export function fetchTeam() {
  return simulate(TEAM_MEMBERS)
}

export function fetchTestimonials() {
  return simulate(TESTIMONIALS)
}
