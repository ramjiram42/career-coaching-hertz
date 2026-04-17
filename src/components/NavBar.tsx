'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Sparkles, ChevronDown, User, BarChart3, ShieldCheck, LogOut } from 'lucide-react'

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/your-move', label: 'Your Move' },
  { href: '/career-tree', label: 'Journeys' },
  { href: '/mentors', label: 'Mentors' },
  { href: '/learn', label: 'Learn' },
  { href: '/jobs', label: 'Careers' },
  { href: '/skills', label: 'Skills' },
]

const userMenuItems = [
  { href: '/profile', label: 'My Profile', icon: User },
  { href: '/dashboard', label: 'My Dashboard', icon: BarChart3 },
  { href: '/manager', label: 'Manager View', icon: ShieldCheck },
  { href: '/admin', label: 'Admin Console', icon: ShieldCheck },
]

export function NavBar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', height: 64, display: 'flex', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>

        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ width: 36, height: 36, background: '#FFD100', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.05rem', color: '#000', fontStyle: 'italic' }}>H</div>
          <span style={{ fontWeight: 900, fontSize: '0.95rem', letterSpacing: '-0.03em', textTransform: 'uppercase', color: '#000', whiteSpace: 'nowrap' }}>
            Hertz <span style={{ color: '#FFD100' }}>Career</span>
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          {mainLinks.map(link => {
            const active = pathname === link.href
            return (
              <Link key={link.href} href={link.href} style={{
                color: active ? '#000' : '#6B7280',
                fontWeight: active ? 800 : 600,
                fontSize: '0.82rem',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderBottom: active ? '2px solid #FFD100' : '2px solid transparent',
                paddingBottom: '2px',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}>
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {/* Advisor pill */}
          <Link href="/advisor" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#000', color: '#FFD100', padding: '0.45rem 1.1rem', borderRadius: 999, fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            <Sparkles size={13} /> Advisor
          </Link>

          {/* User Avatar dropdown */}
          <div ref={menuRef} style={{ position: 'relative' }}>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#F9FAFB', border: '1.5px solid #E5E7EB', borderRadius: 999, padding: '0.3rem 0.75rem 0.3rem 0.3rem', cursor: 'pointer', transition: 'border-color 0.15s', borderColor: menuOpen ? '#FFD100' : '#E5E7EB' }}>
              <div style={{ width: 30, height: 30, background: '#FFD100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem', color: '#000', overflow: 'hidden' }}>
                <Image src="/ram_profile.png" alt="Ram" width={30} height={30} style={{ objectFit: 'cover' }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151' }}>Ram</span>
              <ChevronDown size={14} color="#6B7280" style={{ transform: menuOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
            </button>

            {menuOpen && (
              <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: '0.5rem', background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', minWidth: 200, overflow: 'hidden', zIndex: 200 }}>
                <div style={{ padding: '1rem 1rem 0.75rem', borderBottom: '1px solid #F1F5F9' }}>
                  <p style={{ fontWeight: 900, fontSize: '0.875rem', color: '#000', margin: 0 }}>Ram</p>
                  <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: '0.15rem 0 0' }}>Branch Manager / Operations</p>
                </div>
                {userMenuItems.map(item => {
                  const Icon = item.icon
                  return (
                    <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', textDecoration: 'none', color: '#374151', fontSize: '0.875rem', fontWeight: 600, borderBottom: '1px solid #F9FAFB', transition: 'background 0.1s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#F9FAFB')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      <Icon size={15} color="#6B7280" />
                      {item.label}
                    </Link>
                  )
                })}
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', fontSize: '0.875rem', fontWeight: 700, textAlign: 'left' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#FEF2F2')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                  <LogOut size={15} color="#EF4444" /> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
