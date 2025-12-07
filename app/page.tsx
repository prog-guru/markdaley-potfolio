'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import StatsRow from '@/components/StatsRow'
import ExperienceCard from '@/components/ExperienceCard'
import { experiences } from '@/data/experience'

export default function Home() {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Domains', value: '3' },
    { label: 'Key Stacks', value: '4+' },
    { label: 'Projects', value: '20+' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Mark Daley
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-2">
              Senior FullStack Engineer
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-500 mb-8">
              Palm Bay, FL
            </p>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Building enterprise web platforms with React, Spring Boot, and .NET across cloud-native, 
              distributed architectures. Specializing in AI/LLM integration, event-driven systems, and 
              mission-critical applications for aviation, networking, and ISP domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/experience"
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                View Experience
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="bg-slate-50 dark:bg-slate-900">
        <StatsRow stats={stats} />
      </Section>

      {/* Experience Preview */}
      <Section
        title="Experience"
        subtitle="Leading teams and building scalable systems across aviation, networking, and ISP domains"
      >
        <div className="space-y-6">
          {experiences.slice(0, 2).map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/experience"
            className="inline-block px-6 py-3 text-accent dark:text-accent-dark font-medium hover:underline"
          >
            View All Experience →
          </Link>
        </div>
      </Section>
    </>
  )
}

