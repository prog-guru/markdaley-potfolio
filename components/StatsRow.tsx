'use client'

import { motion } from 'framer-motion'

interface Stat {
  label: string
  value: string
}

interface StatsRowProps {
  stats: Stat[]
}

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="text-2xl md:text-3xl font-bold text-accent dark:text-accent-dark mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

