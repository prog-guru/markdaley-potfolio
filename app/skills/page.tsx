import type { Metadata } from 'next'
import Section from '@/components/Section'
import SkillGroup from '@/components/SkillGroup'
import { skillCategories } from '@/data/skills'

export const metadata: Metadata = {
  title: 'Skills - Mark Daley',
  description: 'Technical skills in full-stack development, AI/LLM integration, cloud platforms, and distributed systems.',
}

export default function SkillsPage() {
  return (
    <Section
      title="Skills & Expertise"
      subtitle="Comprehensive technical skills across languages, frameworks, AI/LLM, cloud platforms, and system architecture"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillGroup key={index} category={category} index={index} />
        ))}
      </div>
    </Section>
  )
}

