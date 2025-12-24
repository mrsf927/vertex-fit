import { createBrowserRouter } from "react-router-dom"
import RootLayout from "@/components/layout/RootLayout"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import PlansPage from "@/pages/PlansPage"
import ClassesPage from "@/pages/ClassesPage"
import SchedulePage from "@/pages/SchedulePage"
import TeamPage from "@/pages/TeamPage"
import TestimonialsPage from "@/pages/TestimonialsPage"
import ContactPage from "@/pages/ContactPage"
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage"
import NotFoundPage from "@/pages/NotFoundPage"

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sobre", element: <AboutPage /> },
      { path: "/planos", element: <PlansPage /> },
      { path: "/modalidades", element: <ClassesPage /> },
      { path: "/horarios", element: <SchedulePage /> },
      { path: "/equipe", element: <TeamPage /> },
      { path: "/depoimentos", element: <TestimonialsPage /> },
      { path: "/contato", element: <ContactPage /> },
      { path: "/politicas", element: <PrivacyPolicyPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])
