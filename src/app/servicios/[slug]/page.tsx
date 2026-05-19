import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2, ClipboardCheck, TriangleAlert } from 'lucide-react'
import { serviceLandingPages, siteUrl } from '@/data/marketing'
import styles from './page.module.css'

type Props = {
  params: Promise<{ slug: string }>
}

function getPage(slug: string) {
  return serviceLandingPages.find((page) => page.slug === slug)
}

export function generateStaticParams() {
  return serviceLandingPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getPage(slug)

  if (!page) return {}

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: { canonical: `/servicios/${page.slug}` },
    openGraph: {
      title: page.metadataTitle,
      description: page.metadataDescription,
      url: `${siteUrl}/servicios/${page.slug}`,
    },
  }
}

export default async function ServiceLandingPage({ params }: Props) {
  const { slug } = await params
  const page = getPage(slug)

  if (!page) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.metadataTitle,
    description: page.metadataDescription,
    provider: {
      '@type': 'Organization',
      name: 'ArosTech EHS',
      url: siteUrl,
    },
    areaServed: 'MX',
    url: `${siteUrl}/servicios/${page.slug}`,
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
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className={styles.pageTitle}>
              {page.title}<br />
              <span className={styles.accent}>{page.accent}</span>
            </h1>
            <p className={styles.pageSubtitle}>{page.description}</p>
            <div className={styles.ctaRow}>
              <Link href={`/contacto?cta=${encodeURIComponent(page.cta)}`} className="btn btn-primary btn-lg">
                {page.cta} <ArrowRight size={17} />
              </Link>
              <Link href={page.secondaryHref} className="btn btn-outline btn-lg">
                {page.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className={styles.heroCard}>
            <div className={styles.heroIcon}><ClipboardCheck size={24} /></div>
            <h2>Diagnóstico inicial</h2>
            <p>
              Comparte industria, cuadrilla, fecha objetivo y evidencia disponible.
              Te respondemos con próximos pasos recomendados.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.contentGrid}`}>
          <div>
            <p className="eyebrow">Dolores comunes</p>
            <h2 className="section-title">Qué ayudamos a ordenar.</h2>
            <div className={styles.listStack}>
              {page.painPoints.map((item) => (
                <div key={item} className={styles.listItem}>
                  <TriangleAlert size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Entregables</p>
            <h2 className="section-title">Salida práctica.</h2>
            <div className={styles.listStack}>
              {page.deliverables.map((item) => (
                <div key={item} className={styles.listItem}>
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className="eyebrow">Proceso</p>
            <h2 className="section-title">Cómo empezamos.</h2>
          </div>
          <div className={styles.processGrid}>
            {page.process.map((step, index) => (
              <div key={step} className={`card ${styles.processCard}`}>
                <div className={styles.processNumber}>{String(index + 1).padStart(2, '0')}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.relatedBand}>
        <div className={`container ${styles.relatedInner}`}>
          <div>
            <p className="eyebrow">Siguiente paso</p>
            <h2 className={styles.relatedTitle}>Recursos relacionados</h2>
          </div>
          <div className={styles.relatedLinks}>
            {page.related.map((item) => (
              <Link key={item.href} href={item.href} className="btn btn-outline">
                {item.label} <ArrowRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
