import React from 'react'

interface GlassCardProps {
    children: React.ReactNode
    className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
    return (
        <div className={`glass-panel rounded-2xl p-8 ${className}`}>
            {children}
        </div>
    )
}
