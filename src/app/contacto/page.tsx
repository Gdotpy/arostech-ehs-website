'use client'
import { useState, FormEvent } from 'react'
import Link from 'next/link'
import {
  Mail, Phone, MapPin, MessageSquare, Clock,
  Send, CheckCircle2, ChevronRight
} from 'lucide-react'
import { useRevealAll } from '@/hooks/useReveal'
import styles from './page.module.css'

const industries = [
  'Telecomunicaciones',
  'Manufactura / Automotriz',
  'Construcción',
  'Energía / Petroquímica',
  'Aeroespacial',
  'Alimentos y Bebidas',
  'Otro',
]

export default function ContactoPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nombre: '', correo: '', telefono: '', empresa: '', industria: '', mensaje: '',
  })

  useRevealAll()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ nombre: '', correo: '', telefono: '', empresa: '', industria: '', mensaje: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="grid-overlay" />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className="eyebrow">Contáctanos</p>
          <h1 className={styles.pageTitle}>
            ¿Cómo podemos<br />
            <span className={styles.accent}>ayudarte?</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Cuéntanos tu situación y un especialista EHS te contactará en menos de 24 horas con una propuesta a medida para tu empresa.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section">
        <div className={`container ${styles.contactGrid}`}>

          {/* Form */}
          <div className={`${styles.formWrap} reveal`}>
            {status === 'success' ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}><CheckCircle2 size={40} /></div>
                <h2 className={styles.successTitle}>¡Mensaje enviado!</h2>
                <p className={styles.successDesc}>
                  Gracias por contactarnos. Un especialista de ArosTech EHS te responderá en menos de 24 horas hábiles.
                </p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="nombre">Nombre completo *</label>
                    <input
                      id="nombre" name="nombre" type="text" required
                      className="form-input" placeholder="Ing. Juan Rodríguez"
                      value={formData.nombre} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="correo">Correo electrónico *</label>
                    <input
                      id="correo" name="correo" type="email" required
                      className="form-input" placeholder="juan@empresa.com"
                      value={formData.correo} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="telefono">Teléfono</label>
                    <input
                      id="telefono" name="telefono" type="tel"
                      className="form-input" placeholder="+52 (81) 1234-5678"
                      value={formData.telefono} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="empresa">Empresa *</label>
                    <input
                      id="empresa" name="empresa" type="text" required
                      className="form-input" placeholder="Nombre de tu empresa"
                      value={formData.empresa} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="industria">Industria</label>
                  <select
                    id="industria" name="industria"
                    className="form-select" value={formData.industria} onChange={handleChange}
                  >
                    <option value="">Selecciona tu industria</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="mensaje">¿En qué te podemos ayudar? *</label>
                  <textarea
                    id="mensaje" name="mensaje" required
                    className="form-textarea"
                    placeholder="Cuéntanos sobre tu empresa, cuántos trabajadores tienes, qué normativas aplican, y cuál es tu principal reto de cumplimiento..."
                    value={formData.mensaje} onChange={handleChange}
                    rows={5}
                  />
                </div>

                {status === 'error' && (
                  <div className={styles.errorNote}>
                    Hubo un error al enviar el mensaje. Por favor intenta de nuevo o escríbenos directamente a{' '}
                    <a href="mailto:info@aros-tech.com">info@aros-tech.com</a>
                  </div>
                )}

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>Enviando...</>
                  ) : (
                    <>Enviar Consulta <Send size={16} /></>
                  )}
                </button>

                <p className={styles.formDisclaimer}>
                  Al enviar este formulario aceptas nuestra{' '}
                  <Link href="#">Política de Privacidad</Link>.
                  Nunca compartimos tu información con terceros.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={`card ${styles.contactInfoCard} reveal reveal-delay-1`}>
              <h3 className={styles.sidebarTitle}>Información de contacto</h3>
              <ul className={styles.contactInfoList}>
                <li>
                  <div className={styles.contactInfoIcon}><Mail size={16} /></div>
                  <div>
                    <div className={styles.contactInfoLabel}>Correo</div>
                    <a href="mailto:info@aros-tech.com" className={styles.contactInfoValue}>
                      info@aros-tech.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles.contactInfoIcon}><Phone size={16} /></div>
                  <div>
                    <div className={styles.contactInfoLabel}>Teléfono / WhatsApp</div>
                    <a href="https://wa.me/528112345678" className={styles.contactInfoValue}>
                      +52 (81) 1234-5678
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles.contactInfoIcon}><MapPin size={16} /></div>
                  <div>
                    <div className={styles.contactInfoLabel}>Ubicación</div>
                    <span className={styles.contactInfoValue}>
                      Monterrey, Nuevo León, México
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.contactInfoIcon}><Clock size={16} /></div>
                  <div>
                    <div className={styles.contactInfoLabel}>Horario de atención</div>
                    <span className={styles.contactInfoValue}>
                      Lunes–Viernes · 8:00 AM – 6:00 PM CST
                    </span>
                  </div>
                </li>
              </ul>

              <a
                href="https://wa.me/528112345678?text=Hola,%20me%20interesa%20conocer%20los%20servicios%20EHS%20de%20ArosTech%20EHS."
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-outline ${styles.whatsappBtn}`}
              >
                <MessageSquare size={16} /> Escribir por WhatsApp
              </a>
            </div>

            <div className={`card ${styles.responseCard} reveal reveal-delay-2`}>
              <div className={styles.responseIcon}><Clock size={18} /></div>
              <h4 className={styles.responseTitle}>Respuesta en &lt; 24 horas</h4>
              <p className={styles.responseDesc}>
                Nuestro equipo de consultores revisa cada solicitud y te asigna un especialista según tu industria y necesidades.
              </p>
            </div>

            <div className={`card ${styles.responseCard} reveal reveal-delay-3`}>
              <div className={styles.responseIcon} style={{ background: 'rgba(34,197,94,0.1)', color: 'var(--color-success)', borderColor: 'rgba(34,197,94,0.25)' }}>
                <CheckCircle2 size={18} />
              </div>
              <h4 className={styles.responseTitle}>Evaluación gratuita incluida</h4>
              <p className={styles.responseDesc}>
                Todas las consultas iniciales incluyen un diagnóstico gratuito de tu situación normativa sin compromiso.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
