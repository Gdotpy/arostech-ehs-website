import Link from 'next/link'
import { CheckCircle2, Download, Mail, CalendarCheck, ShieldCheck } from 'lucide-react'
import styles from './page.module.css'

const downloadUrl = '/downloads/checklist-stps-dc3-contratistas.pdf'

export const metadata = {
  title: 'Gracias — Checklist STPS y DC-3 para Contratistas | ArosTech EHS',
  description: 'Descarga el checklist STPS y DC-3 para contratistas de ArosTech EHS.',
  robots: { index: false, follow: false },
}

export default function ChecklistGraciasPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="grid-overlay" />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.iconWrap}><CheckCircle2 size={38} /></div>
          <p className="eyebrow">Recurso solicitado</p>
          <h1>Tu checklist está listo</h1>
          <p>
            Descarga el checklist STPS y DC-3 para contratistas. También enviamos una copia
            al correo que registraste junto con los próximos pasos recomendados.
          </p>
          <div className={styles.actions}>
            <a className="btn btn-primary btn-lg" href={downloadUrl} download>
              Descargar checklist <Download size={18} />
            </a>
            <Link className="btn btn-outline btn-lg" href="/contacto?cta=diagnostico-stps-dc3">
              Solicitar diagnóstico
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <article className={`card ${styles.card}`}>
            <Mail size={22} />
            <h2>Revisa tu correo</h2>
            <p>
              Deberías recibir el enlace de descarga en unos minutos. Si no aparece, revisa spam
              o escribe a <a href="mailto:info@aros-tech.com">info@aros-tech.com</a>.
            </p>
          </article>
          <article className={`card ${styles.card}`}>
            <ShieldCheck size={22} />
            <h2>Cómo usarlo</h2>
            <p>
              Empieza por listar contratistas, actividad real, evidencia disponible y pendientes.
              El objetivo es detectar brechas antes del ingreso a sitio.
            </p>
          </article>
          <article className={`card ${styles.card}`}>
            <CalendarCheck size={22} />
            <h2>Siguiente paso</h2>
            <p>
              Si el semáforo queda amarillo o rojo, agenda una revisión EHS para priorizar
              capacitación, DC-3, inducción, EPP y evidencia documental.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
