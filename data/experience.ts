export interface ExperienceItem {
  company: string
  title: string
  location: string
  startDate: string
  endDate: string
  description: string[]
}

export const experiences: ExperienceItem[] = [
  {
    company: 'United Airlines',
    title: 'Lead FullStack Engineer',
    location: 'Remote',
    startDate: 'Nov 2022',
    endDate: 'Present',
    description: [
      'Led a team of full-stack engineers delivering high-traffic airline platforms, owning architecture decisions, code quality standards, and delivery timelines across flight operations and customer-facing systems.',
      'Modernized core backend services using Java, Spring Boot, Node.js, and TypeScript, improving response times, resiliency, and overall reliability of crew management, scheduling, and booking workflows.',
      'Designed and maintained REST and GraphQL APIs consumed by Angular, React, and Next.js applications, standardizing contracts and improving integration between flight operations tools and customer platforms.',
      'Implemented a Kafka-based event streaming pipeline processing 10K+ messages per second, enabling real-time visibility into flight events, crew status, and operational alerts for control centers.',
      'Migrated key systems to AWS using services such as EC2, Lambda, RDS, S3, DynamoDB, and SQS, increasing deployment speed, fault tolerance, and cost efficiency for mission-critical workloads.',
      'Designed and shipped an internal RAG-based search and insights engine using embeddings, vector stores, and LLMs, allowing support teams to instantly query logs, incidents, and historical operational data.',
      'Partnered with data and product teams to identify high-impact LLM automation use cases—such as ticket triage, knowledge base generation, and system health summaries—and integrated them into daily workflows.',
    ],
  },
  {
    company: 'Cisco',
    title: 'Senior Full Stack Engineer',
    location: 'Remote',
    startDate: 'Jan 2018',
    endDate: 'Oct 2022',
    description: [
      'Built high-performance backend services using Java, Spring Boot, Spring MVC, JPA, and Hibernate with PostgreSQL, powering secure transaction workflows and data processing for internal and customer-facing networking platforms.',
      'Developed RESTful and JSON-based APIs in Spring Boot and Python/Django, integrating with internal services and external partner systems to support dashboards, reporting, automation, and network configuration tools.',
      'Implemented ML-backed features using Python, TensorFlow, and PyTorch for anomaly detection and predictive analytics, exposing model inferences through secure API endpoints consumed by UI and operational tools.',
      'Deployed and operated services on Google Cloud Platform using GKE/Cloud Run, Cloud SQL, and Cloud Storage, and standardized infrastructure with Terraform, Docker, and Kubernetes for resilient, scalable deployments.',
      'Delivered rich front-end features using Angular and React, building reusable component libraries and integrating them with Spring Boot/Django APIs to support operations, engineering, and network management dashboards.',
      'Collaborated closely with Product Owners, solution architects, and security teams to refine user stories and acceptance criteria, ensuring all features aligned with Cisco\'s networking, security, and infrastructure requirements.',
    ],
  },
  {
    company: 'Phoenix Internet',
    title: 'Full Stack Developer',
    location: 'Remote',
    startDate: 'Nov 2015',
    endDate: 'Dec 2017',
    description: [
      'Developed and maintained full-stack web applications using Node.js, Express, Angular, and React, delivering responsive, scalable user interfaces for Phoenix Internet\'s residential and business clients.',
      'Designed and implemented RESTful APIs and backend services using ASP.NET Core, TypeScript, and PostgreSQL, ensuring reliable, efficient data flows for billing, provisioning, and customer portals.',
      'Implemented backend services with ASP.NET Core MVC and gRPC to expose high-performance, strongly typed APIs consumed by internal tools, desktop clients, and web applications.',
      'Managed database architecture and performance tuning across PostgreSQL and SQL Server, optimizing queries, indexes, and caching strategies to improve latency and scalability for client-facing and internal apps.',
      'Implemented authentication, authorization, and RBAC using OAuth2, JWT, and Spring Security patterns, strengthening security and compliance across management and customer systems.',
      'Automated deployments using Docker, Kubernetes, and CI/CD pipelines, standardizing builds and releases across development, staging, and production, and reducing deployment-related incidents.',
    ],
  },
]

