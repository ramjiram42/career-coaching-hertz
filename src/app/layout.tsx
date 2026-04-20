import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import { CareerAdvisor } from '@/components/CareerAdvisor'

const font = Outfit({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: 'Hertz CAREER COACHING',
  description: 'Internal mobility platform for Hertz employees.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className} style={{ background: '#F8FAFC', color: '#111827', fontFamily: font.style.fontFamily }}>
        <NavBar />
        <div style={{ minHeight: 'calc(100vh - 64px)' }}>
          {children}
        </div>
        <CareerAdvisor />
      </body>
    </html>
  )
}
