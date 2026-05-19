import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { resources, siteUrl } from '@/data/marketing'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Recursos EHS para contratistas y cumplimiento',
  description:
    'Checklist, guías y artículos prácticos de ArosTech EHS para capacitación STPS, DC-3, EPP, contratistas e ISO.',
  alternates: { canonical: '/recursos' },
  openGraph: {
    title: 'Recursos EHS para contratistas y cumplimiento',
    description:
      'Checklist, guías y artículos prácticos de ArosTech EHS para capacitación STPS, DC-3, EPP, contratistas e ISO.',
    url: `${siteUrl}/recursos`,
  },
}

export default function RecursosPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="grid-overlay" />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className="eyebrow">Centro de recursos</p>
          <h1 className={styles.pageTitle}>
            Guías prácticas para ordenar<br />
            <span className={styles.accent}>cumplimiento EHS.</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Materiales accionables para capacitación, DC-3, contratistas, EPP e ISO.
            Todo está diseñado para iniciar conversaciones calificadas con ArosTech EHS.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.resourceGrid}>
            {resources.map((resource) => (
              <Link key={resource.slug} href={`/recursos/${resource.slug}`} className={`card ${styles.resourceCard}`}>
                <div className={styles.cardTop}>
                  <span className="badge badge-red">{resource.type}</span>
                  <FileText size={18} />
                </div>
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                <span className={styles.cardLink}>
                  Ver recurso <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
