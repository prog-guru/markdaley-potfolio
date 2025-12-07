import type { Metadata } from 'next'
import Section from '@/components/Section'
import ExperienceCard from '@/components/ExperienceCard'
import { experiences } from '@/data/experience'

export const metadata: Metadata = {
  title: 'Experience - Mark Daley',
  description: 'Professional experience as a Senior FullStack Engineer at United Airlines, Cisco, and Phoenix Internet.',
}

export default function ExperiencePage() {
  return (
    <Section
      title="Professional Experience"
      subtitle="10+ years building enterprise platforms, leading teams, and delivering mission-critical systems"
    >
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </Section>
  )
}

