import { NextRequest, NextResponse } from 'next/server'

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      nombre,
      correo,
      telefono,
      empresa,
      industria,
      mensaje,
      leadSource,
      cta,
      principalDolor,
      tipoContratista,
      numeroTrabajadores,
      urgencia30Dias,
      matrizCapacitacion,
      leadMagnetTitle,
      leadMagnetDownloadUrl,
    } = body

    if (!nombre || !correo || !empresa || !mensaje) {
      return NextResponse.json({ error: 'Campos requeridos incompletos.' }, { status: 400 })
    }

    // Using Resend for email delivery.
    // Set RESEND_API_KEY in your .env.local to activate.
    // If no key is present, we log and return success (dev mode).
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.log('📧 [DEV] Contact form submission (no RESEND_API_KEY set):', body)
      return NextResponse.json({ ok: true, dev: true })
    }

    const absoluteDownloadUrl = leadMagnetDownloadUrl
      ? new URL(String(leadMagnetDownloadUrl), process.env.NEXT_PUBLIC_SITE_URL || 'https://ehs.aros-tech.com').toString()
      : ''

    const htmlBody = `
      <h2 style="color:#C8102E;font-family:sans-serif">Nueva consulta – ArosTech EHS</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
        <tr><td style="padding:8px 0;color:#888;width:160px">Nombre</td><td style="padding:8px 0;font-weight:600">${escapeHtml(nombre)}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Correo</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(correo)}">${escapeHtml(correo)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#888">Teléfono</td><td style="padding:8px 0">${escapeHtml(telefono || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Empresa</td><td style="padding:8px 0;font-weight:600">${escapeHtml(empresa)}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Industria</td><td style="padding:8px 0">${escapeHtml(industria || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Origen</td><td style="padding:8px 0">${escapeHtml(leadSource || 'Contacto general')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">CTA</td><td style="padding:8px 0">${escapeHtml(cta || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Dolor principal</td><td style="padding:8px 0">${escapeHtml(principalDolor || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Tipo contratista</td><td style="padding:8px 0">${escapeHtml(tipoContratista || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Trabajadores</td><td style="padding:8px 0">${escapeHtml(numeroTrabajadores || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Ingreso 30 días</td><td style="padding:8px 0">${escapeHtml(urgencia30Dias || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Matriz actual</td><td style="padding:8px 0">${escapeHtml(matrizCapacitacion || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Lead magnet</td><td style="padding:8px 0">${escapeHtml(leadMagnetTitle || '—')}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Descarga</td><td style="padding:8px 0">${absoluteDownloadUrl ? `<a href="${escapeHtml(absoluteDownloadUrl)}">${escapeHtml(absoluteDownloadUrl)}</a>` : '—'}</td></tr>
      </table>
      <hr style="margin:20px 0;border-color:#222"/>
      <p style="font-family:sans-serif;font-size:14px;color:#888;margin-bottom:6px">Mensaje:</p>
      <p style="font-family:sans-serif;font-size:15px;background:#111;padding:16px;border-radius:8px;border-left:3px solid #C8102E">${escapeHtml(mensaje).replace(/\n/g, '<br/>')}</p>
    `

    const emailPayloads = [
      {
        from: 'ArosTech EHS <noreply@aros-tech.com>',
        to: ['info@aros-tech.com'],
        reply_to: correo,
        subject: `Nueva consulta EHS de ${nombre} — ${empresa}`,
        html: htmlBody,
      },
    ]

    if (absoluteDownloadUrl && leadMagnetTitle) {
      emailPayloads.push({
        from: 'ArosTech EHS <noreply@aros-tech.com>',
        to: [correo],
        reply_to: 'info@aros-tech.com',
        subject: `Tu ${leadMagnetTitle} está listo`,
        html: `
          <div style="font-family:sans-serif;line-height:1.6;color:#111;max-width:640px">
            <h1 style="color:#C8102E">Tu checklist está listo</h1>
            <p>Hola ${escapeHtml(nombre)},</p>
            <p>Gracias por solicitar el <strong>${escapeHtml(leadMagnetTitle)}</strong> de ArosTech EHS.</p>
            <p>Puedes descargarlo aquí:</p>
            <p><a href="${escapeHtml(absoluteDownloadUrl)}" style="display:inline-block;background:#C8102E;color:#fff;padding:12px 18px;border-radius:8px;text-decoration:none;font-weight:700">Descargar checklist</a></p>
            <p>Si tu semáforo queda en amarillo o rojo, responde este correo con tu caso: tipo de cuadrilla, actividad y fecha objetivo de ingreso a sitio.</p>
            <p style="font-size:13px;color:#666;border-top:1px solid #ddd;padding-top:14px">Este material es una herramienta práctica de organización. No sustituye revisión legal, normativa o técnica específica.</p>
          </div>
        `,
      })
    }

    for (const payload of emailPayloads) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json()
        console.error('Resend error:', err)
        return NextResponse.json({ error: 'Error al enviar el correo.' }, { status: 500 })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 })
  }
}
