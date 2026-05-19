import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2, Download } from 'lucide-react'
import LeadMagnetForm from '@/components/LeadMagnetForm/LeadMagnetForm'
import { resources, siteUrl } from '@/data/marketing'
import styles from './page.module.css'

type Props = {
  params: Promise<{ slug: string }>
}

function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug)
}

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const resource = getResource(slug)

  if (!resource) return {}

  return {
    title: resource.metadataTitle,
    description: resource.metadataDescription,
    alternates: { canonical: `/recursos/${resource.slug}` },
    openGraph: {
      title: resource.metadataTitle,
      description: resource.metadataDescription,
      url: `${siteUrl}/recursos/${resource.slug}`,
    },
  }
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params
  const resource = getResource(slug)

  if (!resource) notFound()

  const isLeadMagnet = resource.slug === 'checklist-stps-dc3-contratistas'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.title,
    description: resource.metadataDescription,
    datePublished: resource.datePublished,
    dateModified: resource.datePublished,
    author: {
      '@type': 'Organization',
      name: 'ArosTech EHS',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ArosTech EHS',
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/recursos/${resource.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <section className={styles.pageHero}>
        <div className="grid-overlay" />
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className="badge badge-red">{resource.type}</span>
            <h1 className={styles.pageTitle}>{resource.title}</h1>
            <p className={styles.pageSubtitle}>{resource.subtitle}</p>
            <div className={styles.ctaRow}>
              <a href="#solicitar" className="btn btn-primary btn-lg">
                {resource.cta} <ArrowRight size={17} />
              </a>
              <Link href="/contacto" className="btn btn-outline btn-lg">
                Hablar con un especialista
              </Link>
            </div>
          </div>

          <aside className={styles.heroCard}>
            <Download size={24} />
            <h2>Uso recomendado</h2>
            <p>{resource.audience}</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.contentGrid}`}>
          <article className={styles.article}>
            {resource.body.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>

          <aside className={styles.sidebar}>
            <div className={`card ${styles.summaryCard}`}>
              <h2>Qué te llevas</h2>
              <ul>
                {resource.highlights.map((highlight) => (
                  <li key={highlight}>
                    <CheckCircle2 size={15} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`card ${styles.summaryCard}`}>
              <h2>Relacionado</h2>
              <div className={styles.relatedLinks}>
                {resource.related.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label} <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="solicitar" className="section section--alt">
        <div className={`container ${styles.formGrid}`}>
          <div>
            <p className="eyebrow">{isLeadMagnet ? 'Descarga' : 'Diagnóstico'}</p>
            <h2 className="section-title">
              {isLeadMagnet ? 'Solicita el checklist y la matriz editable.' : 'Revisemos tu caso.'}
            </h2>
            <p className="section-subtitle">
              {isLeadMagnet
                ? 'Completa el formulario y ArosTech EHS te contactará con el material y próximos pasos.'
                : 'Cuéntanos tu situación para recomendar el siguiente paso de capacitación, evidencia o diagnóstico.'}
            </p>
          </div>
          {isLeadMagnet ? (
            <LeadMagnetForm />
          ) : (
            <div className={styles.contactCard}>
              <p>
                Para revisar este tema con un especialista, comparte industria, número de
                trabajadores, fecha objetivo y evidencia disponible.
              </p>
              <Link href={`/contacto?cta=${encodeURIComponent(resource.cta)}`} className="btn btn-primary">
                {resource.cta} <ArrowRight size={15} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
