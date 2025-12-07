export interface EducationItem {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description?: string
}

export const education: EducationItem[] = [
  {
    institution: 'Nanyang Technological University',
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    startDate: 'Sep 2011',
    endDate: 'Apr 2015',
    description: 'Focused on software engineering, algorithms, data structures, and distributed systems. Laid the foundation for expertise in building scalable, enterprise-grade applications.',
  },
]

