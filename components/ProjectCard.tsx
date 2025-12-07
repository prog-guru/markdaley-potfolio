'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
          {project.title}
        </h3>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-accent dark:hover:text-accent-dark transition-colors"
            aria-label="View on GitHub"
          >
            <Github size={20} />
          </a>
        )}
      </div>

      <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-500 mb-2">Role</p>
        <p className="text-sm text-slate-700 dark:text-slate-300">{project.role}</p>
      </div>

      <div className="mb-4">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-500 mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-500 mb-2">Impact</p>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{project.impact}</p>
      </div>
    </motion.div>
  )
}

