import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Clock, Monitor, FileCheck, ChevronRight,
  CheckCircle2, BookOpen, ArrowLeft, ChevronDown
} from 'lucide-react'
import { courses } from '@/data/content'
import styles from './page.module.css'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find((c) => c.slug === params.slug)
  if (!course) return {}
  return {
    title: `${course.title} – Capacitación STPS | ArosTech EHS`,
    description: `Curso certificado STPS: ${course.title}. ${course.description}. Incluye constancia DC-3 oficial.`,
  }
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((c) => c.slug === params.slug)
  if (!course) notFound()

  const related = courses.filter((c) => c.slug !== course.slug && c.category === course.category).slice(0, 2)

  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/cursos" className={styles.backLink}>
            <ArrowLeft size={14} /> Catálogo de Cursos
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.courseHero}>
        <div className="grid-overlay" />
        <div className={`container ${styles.courseHeroInner}`}>
          <div className={styles.courseHeroLeft}>
            <span className="badge badge-red">{course.category}</span>
            <h1 className={styles.courseHeroTitle}>{course.title}</h1>
            <p className={styles.courseHeroDesc}>{course.description}</p>

            <div className={styles.courseMeta}>
              <div className={styles.courseMetaItem}>
                <Clock size={16} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className={styles.metaLabel}>Duración</div>
                  <div className={styles.metaValue}>{course.duration}</div>
                </div>
              </div>
              <div className={styles.courseMetaItem}>
                <Monitor size={16} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className={styles.metaLabel}>Formato</div>
                  <div className={styles.metaValue}>{course.format}</div>
                </div>
              </div>
              <div className={styles.courseMetaItem}>
                <FileCheck size={16} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className={styles.metaLabel}>Normativa</div>
                  <div className={styles.metaValue}>{course.nom}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar enroll card */}
          <div className={`card ${styles.enrollCard}`}>
            <div className={styles.enrollPrice}>{course.price}</div>
            <div className={styles.enrollPriceSub}>por participante</div>

            <div className={styles.enrollFeatures}>
              {[
                'Constancia DC-3 incluida',
                'Material didáctico digital',
                'Acceso a grabación (cursos online)',
                'Soporte post-capacitación 30 días',
              ].map((f) => (
                <div key={f} className={styles.enrollFeatureItem}>
                  <CheckCircle2 size={14} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <Link href="/contacto" className={`btn btn-primary ${styles.enrollBtn}`}>
              Inscríbete Ahora <ChevronRight size={16} />
            </Link>
            <p className={styles.enrollNote}>
              También disponible para grupos. Contacta para cotización corporativa.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className={`container ${styles.contentGrid}`}>
          <div className={styles.contentMain}>
            {/* Objectives */}
            {course.objectives.length > 0 && (
              <div className={styles.contentBlock}>
                <h2 className={styles.contentBlockTitle}>
                  <BookOpen size={20} /> Lo que aprenderás
                </h2>
                <div className={styles.objectiveGrid}>
                  {course.objectives.map((obj) => (
                    <div key={obj} className={styles.objectiveItem}>
                      <CheckCircle2 size={15} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }} />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Syllabus */}
            {course.syllabus.length > 0 && (
              <div className={styles.contentBlock}>
                <h2 className={styles.contentBlockTitle}>
                  <ChevronDown size={20} /> Temario del curso
                </h2>
                <div className={styles.syllabusAccordion}>
                  {course.syllabus.map((item, i) => (
                    <div key={item} className={styles.syllabusItem}>
                      <span className={styles.syllabusNumber}>{String(i + 1).padStart(2, '0')}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructor */}
            <div className={styles.contentBlock}>
              <h2 className={styles.contentBlockTitle}>Instructor</h2>
              <div className={`card ${styles.instructorCard}`}>
                <div className={styles.instructorAvatar}>RH</div>
                <div>
                  <div className={styles.instructorName}>Ing. Rafael Herrera</div>
                  <div className={styles.instructorRole}>Consultor Senior EHS · 12 años de experiencia en industria</div>
                  <p className={styles.instructorBio}>
                    Especialista en seguridad industrial y sistemas de gestión ISO 45001/14001. Ha trabajado con empresas del sector automotriz, telecomunicaciones y construcción en toda la República Mexicana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {related.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <h2 className={styles.relatedTitle}>Cursos relacionados</h2>
            <div className="grid-2" style={{ maxWidth: '800px' }}>
              {related.map((c) => (
                <Link key={c.slug} href={`/cursos/${c.slug}`} className={`card ${styles.relatedCard}`}>
                  <span className="badge badge-red">{c.category}</span>
                  <h3 className={styles.relatedCardTitle}>{c.title}</h3>
                  <div className={styles.relatedCardMeta}>{c.duration} · {c.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
