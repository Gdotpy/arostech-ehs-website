'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  ChevronRight, Shield, GraduationCap, Award, ClipboardList,
  Zap, Clock, FileCheck, BarChart3, ArrowRight, CheckCircle2,
  Building2, Radio, HardHat
} from 'lucide-react'
import styles from './page.module.css'
import { courses } from '@/data/content'
import { useRevealAll } from '@/hooks/useReveal'

/* ── Animated Counter ─────────────────────────────────────── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 1800
        const step = target / (duration / 16)
        const timer = setInterval(() => {
          start = Math.min(start + step, target)
          setCount(Math.floor(start))
          if (start >= target) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString('es-MX')}{suffix}</span>
}

/* ── Industry Tab Data ────────────────────────────────────── */
const industries = [
  {
    id: 'telecom',
    icon: Radio,
    label: 'Telecomunicaciones',
    title: 'Soluciones para Contratistas Telecom',
    description: 'Los instaladores de torres y fibra óptica enfrentan riesgos de caída, eléctricos y de trabajo en espacio confinado. Gestionamos todas sus certificaciones STPS y documentación de campo.',
    points: ['Certificación NOM-009 Trabajo en Altura', 'Gestión de DC-3 para toda la cuadrilla', 'Reportes de auditoría para clientes corporativos', 'Cumplimiento AMIPCI / CANATEL'],
  },
  {
    id: 'manufacturing',
    icon: Building2,
    label: 'Manufactura',
    title: 'Cumplimiento ISO para Manufactura',
    description: 'Plantas automotrices, aeroespaciales y electrónicas requieren ISO 45001/14001 para exportar y para cumplir auditorías Tier-1. Somos su aliado de implementación.',
    points: ['Implementación ISO 45001 y 14001', 'Gestión de permisos SEMARNAT (MIA, LAU)', 'Capacitación de equipos de seguridad', 'Preparación para auditorías de certificación'],
  },
  {
    id: 'construction',
    icon: HardHat,
    label: 'Construcción & Energía',
    title: 'Seguridad en Proyectos de Gran Escala',
    description: 'Parques eólicos, refinerías y plantas industriales requieren planes de seguridad robustos, gestión de contratistas y control de riesgos en tiempo real.',
    points: ['Planes de seguridad específicos por proyecto', 'Gestión de contratistas y proveedores', 'Control de incidentes y estadísticas de seguridad', 'Auditorías de campo y listas de verificación'],
  },
]

/* ── Platform Features ────────────────────────────────────── */
const platformFeatures = [
  { icon: FileCheck, label: 'DC-3 Automático', desc: 'Genera constancias oficiales en segundos' },
  { icon: BarChart3, label: 'Dashboard de Cumplimiento', desc: 'Visualiza el estado de tu empresa en tiempo real' },
  { icon: Clock, label: 'Alertas de Vencimiento', desc: 'Recibe notificaciones antes de que expiren certificaciones' },
  { icon: Zap, label: 'Repositorio de Evidencias', desc: 'Centraliza auditorías, fotos e informes' },
]

/* ── Color map for course categories ─────────────────────── */
const catColor: Record<string, string> = {
  Seguridad: 'red', ISO: 'amber', Ambiental: 'green', Emergencias: 'red',
}

export default function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  useRevealAll()

  const ActiveIcon = industries[activeIndustry].icon

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero.png"
            alt="Instalación industrial con trabajadores en equipo de seguridad"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className="grid-overlay" />

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadgeRow}>
            <span className="badge badge-red">
              <Shield size={10} /> STPS · ISO · SEMARNAT
            </span>
          </div>

          <h1 className={styles.heroTitle}>
            Seguridad.<br />
            <span className={styles.heroTitleAccent}>Cumplimiento.</span><br />
            Tecnología.
          </h1>

          <p className={styles.heroSubtitle}>
            Cumplimiento EHS moderno para la industria mexicana. Consultoría ISO 45001/14001,
            capacitación STPS y tecnología de cumplimiento normativo.
          </p>

          <div className={styles.heroCtas}>
            <Link href="/contacto" className="btn btn-primary btn-lg">
              Solicita una Consulta Gratis <ChevronRight size={18} />
            </Link>
            <Link href="/servicios" className="btn btn-outline btn-lg">
              Ver Servicios
            </Link>
          </div>

          {/* Compliance strip */}
          <div className={styles.heroStrip}>
            {['ISO 45001', 'ISO 14001', 'NOM-009', 'NOM-029', 'DC-3', 'STPS', 'SEMARNAT'].map((s) => (
              <span key={s} className={styles.heroStripItem}>{s}</span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollDot} />
        </div>
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════════ */}
      <section className={styles.statsBar}>
        <div className={`container ${styles.statsGrid}`}>
          {[
            { n: 500, suffix: '+', label: 'Empresas capacitadas' },
            { n: 10000, suffix: '+', label: 'Certificaciones emitidas' },
            { n: 98, suffix: '%', label: 'Tasa de cumplimiento' },
            { n: 15, suffix: ' años', label: 'De experiencia' },
          ].map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statNumber}>
                <Counter target={stat.n} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICES OVERVIEW ══════════════════════════════════ */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Nuestros Servicios</p>
            <h2 className="section-title reveal">Cumplimiento normativo,<br />de principio a fin.</h2>
            <p className="section-subtitle reveal reveal-delay-1">
              Desde la evaluación inicial hasta la certificación ISO, somos el socio estratégico que tu empresa necesita para operar con seguridad y confianza.
            </p>
          </div>

          <div className={`grid-4 ${styles.serviceGrid}`}>
            {[
              { icon: Shield, title: 'Consultoría de Seguridad', desc: 'Asesoría experta en normativa STPS y SEMARNAT. Diagnósticos, programas de seguridad y atención de inspecciones.', href: '/servicios' },
              { icon: GraduationCap, title: 'Capacitación Industrial', desc: 'Cursos certificados STPS en línea y presenciales. Emisión automática de constancias DC-3 oficiales.', href: '/cursos' },
              { icon: ClipboardList, title: 'Gestión de Incidentes', desc: 'Investigación de accidentes, registro digital y planes de acción correctiva para reducir recurrencias.', href: '/servicios' },
              { icon: Award, title: 'Auditorías ISO', desc: 'Implementación ISO 45001/14001, formación de auditores internos y acompañamiento a la certificación.', href: '/servicios' },
            ].map((s, i) => (
              <Link key={s.title} href={s.href} className={`card ${styles.serviceCard} reveal reveal-delay-${i + 1}`}>
                <div className={styles.serviceIconWrap}>
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
                <span className={styles.serviceCardLink}>
                  Ver más <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLATFORM TEASER ════════════════════════════════════ */}
      <section className="section">
        <div className={`container ${styles.platformGrid}`}>
          {/* Left copy */}
          <div className={styles.platformCopy}>
            <p className="eyebrow reveal">Plataforma Digital</p>
            <h2 className={`section-title reveal reveal-delay-1`}>
              Tu cumplimiento,<br />
              en un solo lugar.
            </h2>
            <p className={`section-subtitle reveal reveal-delay-2`}>
              Olvida las hojas de cálculo. Nuestra plataforma centraliza capacitaciones, certificaciones DC-3 y evidencias de auditoría en un dashboard intuitivo.
            </p>

            <div className={styles.featureList}>
              {platformFeatures.map((f, i) => (
                <div key={f.label} className={`${styles.featureItem} reveal reveal-delay-${i + 1}`}>
                  <div className={styles.featureIcon}>
                    <f.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className={styles.featureLabel}>{f.label}</div>
                    <div className={styles.featureDesc}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contacto" className={`btn btn-primary reveal reveal-delay-4 ${styles.platformCta}`}>
              Solicitar Demo <ChevronRight size={16} />
            </Link>
          </div>

          {/* Right image */}
          <div className={`${styles.platformImageWrap} reveal reveal-delay-2`}>
            <div className={styles.platformGlow} />
            <Image
              src="/images/platform.png"
              alt="Plataforma de cumplimiento EHS en laptop"
              width={640}
              height={480}
              className={styles.platformImage}
            />
          </div>
        </div>
      </section>

      {/* ══ INDUSTRY FOCUS ═════════════════════════════════════ */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Sectores que Atendemos</p>
            <h2 className="section-title reveal">Soluciones específicas<br />para cada industria.</h2>
          </div>

          {/* Tabs */}
          <div className={`${styles.industryTabs} reveal`}>
            {industries.map((ind, i) => (
              <button
                key={ind.id}
                className={`${styles.industryTab} ${i === activeIndustry ? styles.activeTab : ''}`}
                onClick={() => setActiveIndustry(i)}
              >
                <ind.icon size={16} />
                {ind.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className={`${styles.industryContent} reveal reveal-delay-1`}>
            <div className={styles.industryText}>
              <div className={styles.industryIconBig}>
                <ActiveIcon size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.industryTitle}>{industries[activeIndustry].title}</h3>
              <p className={styles.industryDesc}>{industries[activeIndustry].description}</p>
              <ul className={styles.industryPoints}>
                {industries[activeIndustry].points.map((p) => (
                  <li key={p}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="btn btn-primary">
                Hablar con un Especialista <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED COURSES ═══════════════════════════════════ */}
      <section className="section section--alt">
        <div className="container">
          <div className={`${styles.sectionHeaderRow}`}>
            <div>
              <p className="eyebrow">Catálogo de Cursos</p>
              <h2 className="section-title reveal">Capacitación certificada<br />cuando la necesitas.</h2>
            </div>
            <Link href="/cursos" className={`btn btn-outline reveal ${styles.seeAllBtn}`}>
              Ver todos los cursos <ArrowRight size={15} />
            </Link>
          </div>

          <div className={`grid-3 ${styles.coursesGrid}`}>
            {courses.slice(0, 3).map((course, i) => (
              <Link
                key={course.slug}
                href={`/cursos/${course.slug}`}
                className={`card ${styles.courseCard} reveal reveal-delay-${i + 1}`}
              >
                <div className={styles.courseCardTop}>
                  <span className={`badge badge-${catColor[course.category] || 'red'}`}>{course.category}</span>
                  <span className={styles.courseDuration}>{course.duration}</span>
                </div>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseSubtitle}>{course.subtitle}</p>
                <p className={styles.courseDesc}>{course.description}</p>
                <div className={styles.courseFooter}>
                  <span className={styles.coursePrice}>{course.price}</span>
                  <span className={styles.courseCtaLink}>
                    Ver curso <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═══════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Testimonios</p>
            <h2 className="section-title reveal">Lo que dicen<br />nuestros clientes.</h2>
          </div>
          <div className="grid-3">
            {[
              {
                quote: 'Logramos pasar nuestra auditoría ISO 45001 por primera vez gracias al acompañamiento de ArosTech. El proceso fue claro y muy bien organizado.',
                name: 'Ing. Roberto Sánchez',
                role: 'Gerente de Seguridad, Planta Automotriz Monterrey',
              },
              {
                quote: 'La plataforma nos permitió digitalizar más de 300 constancias DC-3 en una semana. Antes tardábamos meses con Excel.',
                name: 'Lic. Claudia Torres',
                role: 'Coordinadora EHS, Contratista Telecom CDMX',
              },
              {
                quote: 'Los cursos en línea son de alta calidad y el soporte del equipo es excelente. Muy recomendado para empresas que quieren cumplir con la STPS rápido.',
                name: 'Ing. Héctor Morales',
                role: 'Director de Operaciones, Constructora Industrial',
              },
            ].map((t, i) => (
              <div key={t.name} className={`card ${styles.testimonialCard} reveal reveal-delay-${i + 1}`}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {t.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═════════════════════════════════════════ */}
      <section className={styles.ctaBanner}>
        <div className="grid-overlay" />
        <div className={styles.ctaBannerGlow} />
        <div className={`container ${styles.ctaBannerContent}`}>
          <h2 className={styles.ctaBannerTitle}>
            ¿Listo para cumplir con la normativa?
          </h2>
          <p className={styles.ctaBannerSub}>
            Solicita tu evaluación gratuita hoy. Nuestros especialistas te contactarán en menos de 24 horas.
          </p>
          <div className={styles.ctaBannerActions}>
            <Link href="/contacto" className="btn btn-primary btn-lg">
              Solicitar Evaluación Gratis <ChevronRight size={18} />
            </Link>
            <Link href="/cursos" className="btn btn-outline btn-lg">
              Ver Catálogo de Cursos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
