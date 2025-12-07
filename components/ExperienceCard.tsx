'use client'

import { motion } from 'framer-motion'
import { ExperienceItem } from '@/data/experience'
import { Calendar, MapPin } from 'lucide-react'

interface ExperienceCardProps {
  experience: ExperienceItem
  index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-lg p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-lg text-accent dark:text-accent-dark font-medium">
            {experience.company}
          </p>
        </div>
        <div className="mt-2 md:mt-0 flex flex-col md:items-end gap-1 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-2">
        {experience.description.map((item, idx) => (
          <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2">
            <span className="text-accent dark:text-accent-dark mt-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

