import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import styles from './Footer.module.css'

const standards = ['ISO 45001', 'ISO 14001', 'STPS', 'NOM-009', 'DC-3', 'SEMARNAT']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            {/* ArosTech isotype */}
            <div className={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinejoin="round"/>
                <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="#00B4D8" opacity="0.18"/>
                <line x1="14" y1="2" x2="14" y2="7" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="26" y1="8" x2="21" y2="11" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="26" y1="20" x2="21" y2="17" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="14" y1="26" x2="14" y2="21" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="2" y1="20" x2="7" y2="17" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="2" y1="8" x2="7" y2="11" stroke="#00B4D8" strokeWidth="1.5"/>
              </svg>
              <span className={styles.logoText}>
                <span style={{ color: 'var(--color-white)' }}>ArosTech</span>
                <span style={{ color: 'var(--color-primary)', fontWeight: 800 }}> EHS</span>
              </span>
            </div>
            <p className={styles.descriptor}>Seguridad · Salud · Medio Ambiente</p>
            <p className={styles.tagline}>
              Cumplimiento EHS moderno para la industria mexicana. Consultoría, capacitación y tecnología de cumplimiento normativo.
            </p>
            <div className={styles.standards}>
              {standards.map((s) => (
                <span key={s} className={`badge badge-red ${styles.standardBadge}`}>{s}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Servicios</h4>
            <ul className={styles.colLinks}>
              <li><Link href="/servicios/dc3-sirce">DC-3 / SIRCE</Link></li>
              <li><Link href="/servicios/seguridad-telecom-alturas">Telecom y alturas</Link></li>
              <li><Link href="/servicios/iso-45001">ISO 45001</Link></li>
              <li><Link href="/servicios/iso-14001">ISO 14001</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Empresa</h4>
            <ul className={styles.colLinks}>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/cursos">Catálogo de Cursos</Link></li>
              <li><Link href="/recursos">Recursos</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
              <li><Link href="#">Aviso de Privacidad</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contacto</h4>
            <ul className={styles.contactList}>
              <li>
                <Mail size={14} />
                <a href="mailto:contacto@aros-tech.com">contacto@aros-tech.com</a>
              </li>
              <li>
                <Phone size={14} />
                <a href="tel:+5218001234567">+52 (800) 123-4567</a>
              </li>
              <li>
                <MapPin size={14} />
                <span>Monterrey, Nuevo León, México</span>
              </li>
            </ul>
            <div className={styles.social}>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="X / Twitter" className={styles.socialLink}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} ArosTech EHS. Todos los derechos reservados.
          </p>
          <a
            href="https://aros-tech.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.parent}
          >
            Una empresa de ArosTech <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}
