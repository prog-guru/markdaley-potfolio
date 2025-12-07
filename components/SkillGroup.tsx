'use client'

import { motion } from 'framer-motion'
import { SkillCategory } from '@/data/skills'

interface SkillGroupProps {
  category: SkillCategory
  index: number
}

export default function SkillGroup({ category, index }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700"
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

