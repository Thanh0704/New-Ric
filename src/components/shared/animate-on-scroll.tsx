'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
}

export function AnimateOnScroll({ children, className }: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
