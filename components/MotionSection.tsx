"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MotionSectionProps {
  children: ReactNode
  delay?: number
  className?: string
}

export const MotionSection = ({ children, delay = 0, className }: MotionSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
