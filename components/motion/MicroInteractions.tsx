'use client'

import { motion } from 'framer-motion'

interface MicroInteractionProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  hoverY?: number
  tapScale?: number
}

export default function MicroInteraction({
  children,
  className = '',
  hoverScale = 1,
  hoverY = -4,
  tapScale = 0.98
}: MicroInteractionProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: hoverScale,
        y: hoverY,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      whileTap={{ scale: tapScale }}
    >
      {children}
    </motion.div>
  )
}

export function SoftHover({ 
  children,
  className = ''
}: { 
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
    >
      {children}
    </motion.div>
  )
}

export function ScaleOnHover({ 
  children,
  className = '',
  scale = 1.02
}: { 
  children: React.ReactNode
  className?: string
  scale?: number
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
    >
      {children}
    </motion.div>
  )
}
