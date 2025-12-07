'use client'

import { motion } from 'framer-motion'
import { EducationItem } from '@/data/education'
import { GraduationCap, Calendar } from 'lucide-react'

interface EducationCardProps {
  education: EducationItem
  index: number
}

export default function EducationCard({ education, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-lg p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-accent/10 dark:bg-accent/20">
          <GraduationCap className="text-accent dark:text-accent-dark" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
            {education.degree} in {education.field}
          </h3>
          <p className="text-lg text-accent dark:text-accent-dark font-medium mb-3">
            {education.institution}
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
            <Calendar size={14} />
            <span>
              {education.startDate} - {education.endDate}
            </span>
          </div>
          {education.description && (
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {education.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

