import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Header from "./Header"
import Footer from "./Footer"
import { useScrollToTop } from "@/hooks/useScrollToTop"

const transition = { duration: 0.2, ease: "easeOut" }

export default function RootLayout() {
  const location = useLocation()
  useScrollToTop()

  return (
    <div className="min-h-screen bg-graphite-950 text-slate-100">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={transition}
          className="pt-20"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
