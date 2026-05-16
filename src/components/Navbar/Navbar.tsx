'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Shield, ChevronRight } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/nosotros', label: 'Nosotros' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          {/* ArosTech isotype — cyan geometric accent */}
          <svg className={styles.isotype} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinejoin="round"/>
            <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="#00B4D8" opacity="0.18"/>
            <line x1="14" y1="2" x2="14" y2="7" stroke="#00B4D8" strokeWidth="1.5"/>
            <line x1="26" y1="8" x2="21" y2="11" stroke="#00B4D8" strokeWidth="1.5"/>
            <line x1="26" y1="20" x2="21" y2="17" stroke="#00B4D8" strokeWidth="1.5"/>
            <line x1="14" y1="26" x2="14" y2="21" stroke="#00B4D8" strokeWidth="1.5"/>
            <line x1="2" y1="20" x2="7" y2="17" stroke="#00B4D8" strokeWidth="1.5"/>
            <line x1="2" y1="8" x2="7" y2="11" stroke="#00B4D8" strokeWidth="1.5"/>
          </svg>
          <div className={styles.logoWords}>
            <span className={styles.logoText}>
              <span className={styles.logoAros}>ArosTech</span>
              <span className={styles.logoEHS}> EHS</span>
            </span>
            <span className={styles.logoDescriptor}>Seguridad · Salud · Medio Ambiente</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={styles.link}>{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className={styles.actions}>
          <button
            className={styles.langToggle}
            title="Switch language"
            aria-label="Toggle English/Spanish"
          >
            EN
          </button>
          <Link href="#" className={`btn btn-ghost ${styles.portalLink}`}>
            Portal →
          </Link>
          <Link href="/contacto" className="btn btn-primary btn-sm">
            Contáctanos <ChevronRight size={14} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={styles.menuBtn}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.drawer}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.drawerLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className={styles.drawerActions}>
            <Link href="#" className="btn btn-outline" onClick={() => setOpen(false)}>
              Acceder al Portal
            </Link>
            <Link href="/contacto" className="btn btn-primary" onClick={() => setOpen(false)}>
              Contáctanos
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
