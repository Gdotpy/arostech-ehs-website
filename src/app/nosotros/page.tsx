import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Target, Eye, Shield, Users, Award, ChevronRight, CheckCircle2
} from 'lucide-react'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Nosotros – ArosTech EHS',
  description:
    'Conoce al equipo detrás de ArosTech EHS. Consultores certificados con experiencia en seguridad industrial, ISO 45001/14001 y cumplimiento normativo en México.',
}

const values = [
  {
    icon: Shield,
    title: 'Rigor técnico',
    desc: 'Cada solución está respaldada por consultores certificados y metodologías probadas en campo industrial real.',
  },
  {
    icon: Target,
    title: 'Orientación a resultados',
    desc: 'No vendemos cumplimiento en papel. Diseñamos programas que reducen accidentes, multas y tiempos de auditoría.',
  },
  {
    icon: Users,
    title: 'Proximidad con el cliente',
    desc: 'Trabajamos como una extensión de tu equipo EHS. Disponibles para resolver dudas regulatorias cuando las necesitas.',
  },
  {
    icon: Award,
    title: 'Excelencia documentada',
    desc: 'Toda nuestra metodología y entregables están auditados internamente para garantizar calidad consistente.',
  },
]

const certifications = [
  'ISO 45001 Lead Auditor (IRCA)',
  'ISO 14001 Lead Implementer',
  'Técnico en Seguridad e Higiene STPS',
  'Certificado IMSS / INFONAVIT',
  'NOM-009-STPS Trabajo en Alturas',
  'Diplomado en Derecho Ambiental Mexicano',
]

const team = [
  {
    initials: 'CS',
    name: 'Carlos Salinas',
    role: 'Director General & Consultor Senior EHS',
    bio: 'Más de 15 años formando sistemas de gestión ISO en plantas automotrices y contratistas telecom. Ex-auditor BSI México.',
  },
  {
    initials: 'AL',
    name: 'Alejandra López',
    role: 'Directora de Capacitación',
    bio: 'Especialista en diseño instruccional para industria. Ha capacitado a más de 8,000 trabajadores en normas STPS y estándares internacionales.',
  },
  {
    initials: 'RH',
    name: 'Rafael Herrera',
    role: 'Consultor EHS — Telecomunicaciones',
    bio: 'Experto en seguridad para trabajo en alturas y espacios confinados. Certificado NOM-009. Ha trabajado con los principales operadores de torres en México.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="grid-overlay" />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className="eyebrow">Nosotros</p>
          <h1 className={styles.pageTitle}>
            Expertos en EHS<br />
            <span className={styles.accent}>al servicio de México.</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Somos una división especializada de ArosTech, combinando tecnología y consultoría certificada para que las empresas mexicanas operen de forma segura, legal y competitiva.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={`card ${styles.missionCard}`}>
              <div className={styles.missionIcon}><Target size={24} strokeWidth={1.5} /></div>
              <h2 className={styles.missionTitle}>Misión</h2>
              <p className={styles.missionText}>
                Democratizar el acceso a soluciones de seguridad industrial de clase mundial para empresas mexicanas, combinando consultoría experta con tecnología digital que simplifica el cumplimiento normativo.
              </p>
            </div>
            <div className={`card ${styles.missionCard}`}>
              <div className={styles.missionIcon}><Eye size={24} strokeWidth={1.5} /></div>
              <h2 className={styles.missionTitle}>Visión</h2>
              <p className={styles.missionText}>
                Ser la plataforma EHS de referencia en México y LATAM — donde cualquier empresa, sin importar su tamaño, puede gestionar su seguridad, capacitación y cumplimiento ambiental desde un solo lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Nuestros valores</p>
            <h2 className="section-title">Lo que nos guía.</h2>
          </div>
          <div className="grid-4">
            {values.map((v) => (
              <div key={v.title} className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}><v.icon size={20} strokeWidth={1.5} /></div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">El equipo</p>
            <h2 className="section-title">Consultores con experiencia real en campo.</h2>
          </div>
          <div className="grid-3">
            {team.map((member) => (
              <div key={member.name} className={`card ${styles.teamCard}`}>
                <div className={styles.teamAvatar}>{member.initials}</div>
                <div className={styles.teamName}>{member.name}</div>
                <div className={styles.teamRole}>{member.role}</div>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.certGrid}>
            <div>
              <p className="eyebrow">Credenciales</p>
              <h2 className="section-title">Certificaciones de nuestro equipo.</h2>
              <p className="section-subtitle">
                Nuestros consultores cuentan con acreditaciones nacionales e internacionales que respaldan cada servicio que ofrecemos.
              </p>
              <Link href="/contacto" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Hablar con un especialista <ChevronRight size={15} />
              </Link>
            </div>
            <div className={styles.certList}>
              {certifications.map((cert) => (
                <div key={cert} className={styles.certItem}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ArosTech parent note */}
      <section className={styles.parentSection}>
        <div className="container">
          <div className={styles.parentCard}>
            <div className={styles.parentLogo}>
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinejoin="round"/>
                <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="#00B4D8" opacity="0.18"/>
                <line x1="14" y1="2" x2="14" y2="7" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="26" y1="8" x2="21" y2="11" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="26" y1="20" x2="21" y2="17" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="14" y1="26" x2="14" y2="21" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="2" y1="20" x2="7" y2="17" stroke="#00B4D8" strokeWidth="1.5"/>
                <line x1="2" y1="8" x2="7" y2="11" stroke="#00B4D8" strokeWidth="1.5"/>
              </svg>
              <span>ArosTech</span>
            </div>
            <p className={styles.parentText}>
              ArosTech EHS es una división de <strong>ArosTech</strong>, empresa líder en tecnología industrial y distribución de soluciones de trabajo conectado en México y LATAM. Nuestro conocimiento del ecosistema industrial mexicano nos da una ventaja única para entender los retos reales de nuestros clientes.
            </p>
            <a href="https://aros-tech.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              Conocer ArosTech
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
