'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Search, Clock, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react'
import { courses } from '@/data/content'
import { useRevealAll } from '@/hooks/useReveal'
import styles from './page.module.css'

const INITIAL_COUNT = 8
const categories = ['Todos', 'Seguridad', 'ISO', 'Ambiental', 'Emergencias']

const catColorMap: Record<string, string> = {
  Seguridad: 'badge-red',
  ISO: 'badge-amber',
  Ambiental: 'badge-green',
  Emergencias: 'badge-red',
}

export default function CursosPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)

  useRevealAll()

  const filtered = courses.filter((c) => {
    const matchCat = activeCategory === 'Todos' || c.category === activeCategory
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      (c.nom && c.nom.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="grid-overlay" />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className="eyebrow">Catálogo de Cursos</p>
          <h1 className={styles.pageTitle}>
            Capacitación certificada<br />
            <span className={styles.accent}>con enfoque STPS.</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Cursos presenciales y en línea con apoyo documental para constancias DC-3. Formamos a tu equipo para ordenar capacitación, evidencia y prácticas de seguridad.
          </p>
        </div>
      </section>

      {/* Filter + Search Bar */}
      <section className={styles.filterBar}>
        <div className={`container ${styles.filterBarInner}`}>
          <div className={styles.searchWrap}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="search"
              placeholder="Buscar por nombre, NOM o tema..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.filterPills}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="section section--alt">
        <div className="container">
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No se encontraron cursos con ese criterio.</p>
              <button className="btn btn-outline" onClick={() => { setSearch(''); setActiveCategory('Todos') }}>
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              <div className="grid-3">
                {(showAll ? filtered : filtered.slice(0, INITIAL_COUNT)).map((course, i) => (
                  <Link
                    key={course.slug}
                    href={`/cursos/${course.slug}`}
                    className={`card ${styles.courseCard} reveal reveal-delay-${(i % 3) + 1}`}
                  >
                    <div className={styles.courseTop}>
                      <span className={`badge ${catColorMap[course.category] || 'badge-red'}`}>
                        {course.category}
                      </span>
                      <span className={styles.courseFormat}>{course.format}</span>
                    </div>

                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <p className={styles.courseNom}>{course.nom}</p>
                    <p className={styles.courseDesc}>{course.description}</p>

                    <div className={styles.courseMeta}>
                      <span className={styles.courseDuration}>
                        <Clock size={12} /> {course.duration}
                      </span>
                    </div>

                    <div className={styles.courseFooter}>
                      <span className={styles.coursePrice}>{course.price}</span>
                      <span className={styles.courseLink}>
                        Ver curso <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              {!showAll && filtered.length > INITIAL_COUNT && (
                <div className={styles.showMoreWrap}>
                  <button
                    className={`btn btn-outline ${styles.showMoreBtn}`}
                    onClick={() => setShowAll(true)}
                  >
                    <ChevronDown size={16} />
                    Ver los {filtered.length - INITIAL_COUNT} cursos restantes
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* DC-3 Note */}
      <section className={styles.dc3Banner}>
        <div className={`container ${styles.dc3Inner}`}>
          <div className={styles.dc3Icon}>DC-3</div>
          <div>
            <h3 className={styles.dc3Title}>Apoyo documental para constancias DC-3</h3>
            <p className={styles.dc3Sub}>
              Te ayudamos a preparar evidencia y documentación de capacitación para que tu expediente sea más claro y fácil de revisar.
            </p>
          </div>
          <Link href="/contacto" className="btn btn-primary">
            Solicitar curso <ChevronRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
