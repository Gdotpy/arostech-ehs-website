import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield, GraduationCap, ClipboardList, Award,
  CheckCircle2, ChevronRight, ArrowRight
} from 'lucide-react'
import { services } from '@/data/content'
import { serviceLandingPages } from '@/data/marketing'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Servicios EHS en México – ArosTech EHS',
  description:
    'Conozca nuestros servicios de seguridad industrial, medio ambiente y salud ocupacional adaptados a la industria mexicana. Consultoría, capacitación, auditorías ISO y gestión ambiental.',
  keywords: ['consultoría seguridad', 'auditorías ISO 45001', 'cursos EHS en línea', 'gestión ambiental México'],
}

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck: Shield,
  GraduationCap,
  ClipboardList,
  Award,
}

const steps = [
  { n: '01', title: 'Evaluación Inicial', desc: 'Diagnóstico gratuito de tu situación normativa, identificando brechas y prioridades.' },
  { n: '02', title: 'Propuesta a Medida', desc: 'Diseñamos un plan de trabajo específico para tu industria, tamaño y regulaciones aplicables.' },
  { n: '03', title: 'Implementación', desc: 'Ejecutamos el plan con consultores certificados, capacitaciones y generación de documentación.' },
  { n: '04', title: 'Seguimiento Continuo', desc: 'Monitoreo de cumplimiento, alertas de vencimiento y soporte ante inspecciones.' },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="grid-overlay" />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className="eyebrow">Nuestros Servicios</p>
          <h1 className={styles.pageTitle}>
            Cumplimiento EHS<br />
            <span className={styles.accent}>de principio a fin.</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Desde el diagnóstico inicial hasta la certificación ISO, somos el socio estratégico que tu empresa necesita para operar con seguridad, confianza y sin sorpresas ante las autoridades.
          </p>
          <Link href="/contacto" className="btn btn-primary btn-lg">
            Solicitar diagnóstico <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesStack}>
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon]
              return (
                <div
                  key={svc.id}
                  className={`${styles.serviceBlock} ${i % 2 === 1 ? styles.serviceBlockReverse : ''}`}
                >
                  <div className={styles.serviceBlockLeft}>
                    <div className={styles.serviceBlockIcon}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h2 className={styles.serviceBlockTitle}>{svc.title}</h2>
                    <p className={styles.serviceBlockDesc}>{svc.description}</p>
                    <Link href="/contacto" className="btn btn-primary">
                      Solicitar cotización <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div className={`card ${styles.serviceBlockRight}`}>
                    <h4 className={styles.serviceBlockFeatureTitle}>¿Qué incluye?</h4>
                    <ul className={styles.serviceFeatureList}>
                      {svc.features.map((f) => (
                        <li key={f}>
                          <CheckCircle2 size={14} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Focus Pages */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className="eyebrow">Soluciones prioritarias</p>
            <h2 className="section-title">Páginas de acción rápida.</h2>
            <p className="section-subtitle">
              Rutas directas para los temas que suelen bloquear auditorías, ingreso a sitio o preparación ISO.
            </p>
          </div>
          <div className={styles.focusGrid}>
            {serviceLandingPages.map((page) => (
              <Link key={page.slug} href={`/servicios/${page.slug}`} className={`card ${styles.focusCard}`}>
                <span className="badge badge-red">{page.eyebrow}</span>
                <h3>{page.metadataTitle}</h3>
                <p>{page.metadataDescription}</p>
                <span>
                  Ver solución <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className="eyebrow">Nuestra Metodología</p>
            <h2 className="section-title">Así trabajamos contigo.</h2>
            <p className="section-subtitle">
              Un proceso claro, transparente y orientado a resultados medibles.
            </p>
          </div>
          <div className={styles.processGrid}>
            {steps.map((step) => (
              <div key={step.n} className={`card ${styles.processCard}`}>
                <div className={styles.processNumber}>{step.n}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <h2 className={styles.ctaStripTitle}>¿Cuál servicio necesitas?</h2>
          <p className={styles.ctaStripSub}>Cuéntanos tu situación y te proponemos el paquete ideal.</p>
          <Link href="/contacto" className="btn btn-primary btn-lg">
            Hablar con un especialista <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
