export interface Project {
  title: string
  description: string
  role: string
  techStack: string[]
  impact: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Airline Operations Platform Modernization',
    description: 'Led the modernization of core airline operations systems, migrating from legacy architectures to cloud-native microservices. Improved system reliability, reduced latency, and enabled real-time operational visibility.',
    role: 'Lead FullStack Engineer',
    techStack: ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'AWS', 'Kafka', 'React', 'Next.js'],
    impact: 'Improved response times by 40%, increased system uptime to 99.9%, and enabled real-time flight operations monitoring for control centers.',
    githubUrl: 'https://github.com/topdev70',
  },
  {
    title: 'Kafka Event Streaming for Flight Operations',
    description: 'Designed and implemented a high-throughput event streaming pipeline using Apache Kafka to process real-time flight events, crew status updates, and operational alerts.',
    role: 'Lead FullStack Engineer',
    techStack: ['Apache Kafka', 'Java', 'Spring Boot', 'AWS Lambda', 'DynamoDB', 'TypeScript'],
    impact: 'Processes 10K+ messages per second, enabling real-time visibility into flight operations and reducing incident response time by 60%.',
  },
  {
    title: 'RAG-Based Search and Insights Engine',
    description: 'Built an internal intelligent search platform using RAG (Retrieval-Augmented Generation) with vector databases, embeddings, and LLMs to enable instant querying of logs, incidents, and historical operational data.',
    role: 'Lead FullStack Engineer',
    techStack: ['Python', 'LangChain', 'Vector Databases', 'OpenAI APIs', 'Embeddings', 'React', 'Node.js'],
    impact: 'Reduced support team query time from hours to seconds, enabling instant access to historical operational insights and automated knowledge base generation.',
  },
  {
    title: 'Network Anomaly Detection Platform',
    description: 'Developed ML-powered anomaly detection system for network infrastructure, using TensorFlow and PyTorch to identify patterns and predict potential issues before they impact operations.',
    role: 'Senior Full Stack Engineer',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'Spring Boot', 'PostgreSQL', 'React', 'GCP'],
    impact: 'Reduced network incidents by 35% through proactive anomaly detection and enabled predictive maintenance workflows.',
  },
  {
    title: 'ISP Customer Portal & Billing System',
    description: 'Built a comprehensive customer portal and billing system for residential and business clients, featuring real-time usage tracking, automated provisioning, and secure payment processing.',
    role: 'Full Stack Developer',
    techStack: ['ASP.NET Core', 'Node.js', 'Express', 'React', 'Angular', 'PostgreSQL', 'Docker', 'Kubernetes'],
    impact: 'Streamlined customer onboarding by 50%, improved billing accuracy, and reduced support tickets related to account management.',
  },
  {
    title: 'Cloud-Native Microservices Platform',
    description: 'Architected and deployed a scalable microservices platform on AWS and GCP, implementing event-driven patterns, service mesh, and automated CI/CD pipelines for high-availability systems.',
    role: 'Senior Full Stack Engineer',
    techStack: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'GCP', 'Spring Boot', 'Node.js', 'TypeScript'],
    impact: 'Increased deployment frequency by 5x, reduced infrastructure costs by 30%, and improved system fault tolerance with automated failover.',
  },
]

