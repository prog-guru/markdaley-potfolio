import type { Metadata } from 'next'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects - Mark Daley',
  description: 'Notable projects including airline operations platforms, Kafka event streaming, RAG-based search engines, and cloud-native microservices.',
}

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      subtitle="Building scalable, high-impact systems across aviation, networking, and cloud platforms"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}

