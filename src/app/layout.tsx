import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import { CareerAdvisor } from '@/components/CareerAdvisor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hertz Career Coaching',
  description: 'Internal mobility platform for Hertz employees.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: '#fff', color: '#111827' }}>
        <NavBar />
        <div style={{ minHeight: 'calc(100vh - 64px)' }}>
          {children}
        </div>
        <CareerAdvisor />
      </body>
    </html>
  )
}
