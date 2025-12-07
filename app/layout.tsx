import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Mark Daley - Senior FullStack Engineer',
  description: 'Senior Full Stack Engineer specializing in enterprise platforms, AI/LLM integration, and distributed systems. 10+ years of experience building scalable applications.',
  keywords: [
    'Full Stack Engineer',
    'Software Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Spring Boot',
    'AI/LLM',
    'RAG',
    'Kafka',
    'Microservices',
    'Distributed Systems',
  ],
  authors: [{ name: 'Mark Daley' }],
  openGraph: {
    title: 'Mark Daley - Senior FullStack Engineer',
    description: 'Senior Full Stack Engineer specializing in enterprise platforms, AI/LLM integration, and distributed systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Daley - Senior FullStack Engineer',
    description: 'Senior Full Stack Engineer specializing in enterprise platforms, AI/LLM integration, and distributed systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

