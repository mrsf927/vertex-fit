import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/cn"

type SectionProps = HTMLMotionProps<"section">

export default function Section({ className, children, ...props }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn("py-16", className)}
      {...props}
    >
      {children}
    </motion.section>
  )
}
