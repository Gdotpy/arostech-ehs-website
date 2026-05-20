'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2, Send } from 'lucide-react'
import styles from './LeadMagnetForm.module.css'

const painOptions = [
  'DC-3 / capacitación',
  'EPP',
  'Trabajo en altura',
  'Inducción de contratistas',
  'Evidencia documental',
  'ISO / auditoría de cliente',
  'Otro',
]

export default function LeadMagnetForm() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    empresa: '',
    telefono: '',
    industria: '',
    tipoContratista: '',
    numeroTrabajadores: '',
    principalDolor: '',
    urgencia30Dias: '',
    matrizCapacitacion: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus('sending')

    const message = [
      'Solicitud de checklist STPS y DC-3 para contratistas.',
      `Tipo de contratista o cuadrilla: ${formData.tipoContratista || 'No especificado'}.`,
      `Trabajadores a coordinar: ${formData.numeroTrabajadores || 'No especificado'}.`,
      `Dolor principal: ${formData.principalDolor || 'No especificado'}.`,
    ].join('\n')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          mensaje: message,
          leadSource: 'Lead magnet: Checklist STPS y DC-3 para contratistas',
          cta: 'Descargar checklist',
          leadMagnetSlug: 'checklist-stps-dc3-contratistas',
          leadMagnetTitle: 'Checklist STPS y DC-3 para contratistas',
          leadMagnetDownloadUrl: '/downloads/checklist-stps-dc3-contratistas.pdf',
        }),
      })

      if (!response.ok) {
        setStatus('error')
        return
      }

      router.push('/gracias/checklist-stps-dc3-contratistas')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <CheckCircle2 size={34} />
        <h2>Checklist solicitado</h2>
        <p>
          Gracias. Un especialista de ArosTech EHS revisará tu solicitud y te contactará
          con el material y próximos pasos para el diagnóstico.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="lead-nombre">Nombre *</label>
          <input
            id="lead-nombre"
            name="nombre"
            className="form-input"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ing. Juan Rodriguez"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lead-correo">Correo corporativo *</label>
          <input
            id="lead-correo"
            name="correo"
            type="email"
            className="form-input"
            required
            value={formData.correo}
            onChange={handleChange}
            placeholder="juan@empresa.com"
          />
        </div>
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="lead-empresa">Empresa *</label>
          <input
            id="lead-empresa"
            name="empresa"
            className="form-input"
            required
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Nombre de la empresa"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lead-telefono">Teléfono / WhatsApp</label>
          <input
            id="lead-telefono"
            name="telefono"
            className="form-input"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+52 (81) 1234-5678"
          />
        </div>
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="lead-industria">Industria</label>
          <input
            id="lead-industria"
            name="industria"
            className="form-input"
            value={formData.industria}
            onChange={handleChange}
            placeholder="Telecom, manufactura, construccion..."
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lead-tipo">Tipo de cuadrilla</label>
          <input
            id="lead-tipo"
            name="tipoContratista"
            className="form-input"
            value={formData.tipoContratista}
            onChange={handleChange}
            placeholder="Alturas, mantenimiento, instalacion..."
          />
        </div>
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="lead-trabajadores">Trabajadores a coordinar</label>
          <input
            id="lead-trabajadores"
            name="numeroTrabajadores"
            className="form-input"
            value={formData.numeroTrabajadores}
            onChange={handleChange}
            placeholder="Ej. 12"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lead-dolor">Principal dolor actual</label>
          <select
            id="lead-dolor"
            name="principalDolor"
            className="form-select"
            value={formData.principalDolor}
            onChange={handleChange}
          >
            <option value="">Selecciona una opcion</option>
            {painOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="lead-urgencia">Ingreso en proximos 30 dias</label>
          <select
            id="lead-urgencia"
            name="urgencia30Dias"
            className="form-select"
            value={formData.urgencia30Dias}
            onChange={handleChange}
          >
            <option value="">Selecciona una opcion</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
            <option value="No se">No se</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lead-matriz">Matriz de capacitacion</label>
          <select
            id="lead-matriz"
            name="matrizCapacitacion"
            className="form-select"
            value={formData.matrizCapacitacion}
            onChange={handleChange}
          >
            <option value="">Selecciona una opcion</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
            <option value="No se">No se</option>
          </select>
        </div>
      </div>

      {status === 'error' && (
        <p className={styles.error}>
          Hubo un error al enviar la solicitud. Intenta de nuevo o escribe a contacto@aros-tech.com.
        </p>
      )}

      <button className={`btn btn-primary btn-lg ${styles.submit}`} disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : <>Descargar checklist <Send size={16} /></>}
      </button>
      <p className={styles.note}>
        Material practico de organizacion. No sustituye revision legal, normativa o tecnica especifica.
      </p>
    </form>
  )
}
