export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'Golang', 'Rust', 'SQL', 'Bash/Shell Scripting'],
  },
  {
    name: 'Frameworks & Platforms',
    skills: ['Node.js', 'Express.js', 'NestJS', 'React', 'Angular', 'Next.js', 'Django', 'Flask', 'ASP.NET', 'Spring Boot'],
  },
  {
    name: 'AI/LLM & ML',
    skills: [
      'OpenAI APIs',
      'Anthropic Claude',
      'Google Gemini',
      'Llama Models',
      'LangChain',
      'LlamaIndex',
      'RAG',
      'Vector Databases',
      'Prompt Engineering',
      'LoRA/QLoRA Fine-tuning',
      'Embeddings',
      'AI Agent Frameworks',
      'Function Calling',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'NumPy',
      'Hugging Face',
    ],
  },
  {
    name: 'Big Data & Streaming',
    skills: ['Apache Kafka', 'Apache Hadoop', 'Apache Spark', 'Apache Beam', 'Apache Airflow'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Oracle', 'Cassandra', 'Redis', 'Elasticsearch'],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, Lambda, RDS, S3, DynamoDB, SQS)',
      'GCP (GKE, Cloud Run, Cloud SQL, Cloud Storage)',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Git/GitHub',
      'CircleCI',
      'Jenkins',
    ],
  },
  {
    name: 'Architecture',
    skills: ['Microservices', 'Event-driven Architecture', 'Distributed Systems', 'API Design', 'REST', 'GraphQL', 'gRPC'],
  },
]

