import type { Metadata } from 'next'
import Section from '@/components/Section'
import EducationCard from '@/components/EducationCard'
import { education } from '@/data/education'

export const metadata: Metadata = {
  title: 'Education - Mark Daley',
  description: 'Educational background in Computer Science from Nanyang Technological University.',
}

export default function EducationPage() {
  return (
    <Section
      title="Education"
      subtitle="Formal education and continuous learning in computer science and software engineering"
    >
      <div className="max-w-2xl mx-auto">
        {education.map((item, index) => (
          <EducationCard key={index} education={item} index={index} />
        ))}
      </div>
    </Section>
  )
}

