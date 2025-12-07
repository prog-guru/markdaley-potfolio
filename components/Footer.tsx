import Link from 'next/link'
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '@/data/contact'

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Mark Daley
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Senior FullStack Engineer specializing in enterprise platforms, AI/LLM integration, and distributed systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                <Mail size={16} />
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                <Phone size={16} />
                {contactInfo.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {contactInfo.location}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Mark Daley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

