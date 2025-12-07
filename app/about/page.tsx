import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'About - Mark Daley',
  description: 'Learn about Mark Daley, a Senior FullStack Engineer with expertise in enterprise platforms, AI/LLM integration, and distributed systems.',
}

export default function AboutPage() {
  return (
    <Section
      title="About"
      subtitle="Engineering leader focused on building scalable, intelligent systems"
    >
      <div className="max-w-3xl mx-auto space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p>
          I'm a Senior Full Stack Engineer and Technical Leader with 10 years of experience building 
          enterprise web platforms using React, Express.js, Spring Boot, and .NET across cloud-native, 
          distributed, and event-driven architectures. My work spans high-traffic airline platforms, 
          networking infrastructure, and ISP customer systems—all requiring mission-critical reliability 
          and performance.
        </p>

        <p>
          Throughout my career, I've specialized in TypeScript, Node.js, JVM-based microservices, and 
          the Microsoft .NET ecosystem, consistently delivering secure, high-throughput systems. I've 
          worked extensively in aviation, networking, and ISP domains, where system reliability directly 
          impacts operations and customer experience.
        </p>

        <p>
          One of my key strengths is integrating GPT/LLMs, vector search, RAG pipelines, and embeddings 
          into production workflows. I've built intelligent search engines that allow teams to instantly 
          query logs, incidents, and historical data, and I've partnered with product teams to identify 
          high-impact LLM automation use cases—from ticket triage to knowledge base generation.
        </p>

        <p>
          I'm passionate about architecture and system design, particularly event-driven and distributed 
          systems. I've designed and implemented Kafka-based event streaming pipelines processing 10K+ 
          messages per second, migrated legacy systems to cloud-native architectures on AWS and GCP, and 
          built microservices platforms that scale with business needs.
        </p>

        <p>
          As a leader, I focus on mentoring engineers, improving CI/CD and DevOps practices, and aligning 
          technical delivery with complex business requirements. I believe in writing clean, maintainable 
          code, making data-driven architecture decisions, and building systems that are both powerful 
          and pragmatic.
        </p>
      </div>
    </Section>
  )
}

