import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, correo, telefono, empresa, industria, mensaje } = body

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

    const htmlBody = `
      <h2 style="color:#C8102E;font-family:sans-serif">Nueva consulta – ArosTech EHS</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
        <tr><td style="padding:8px 0;color:#888;width:130px">Nombre</td><td style="padding:8px 0;font-weight:600">${nombre}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Correo</td><td style="padding:8px 0"><a href="mailto:${correo}">${correo}</a></td></tr>
        <tr><td style="padding:8px 0;color:#888">Teléfono</td><td style="padding:8px 0">${telefono || '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Empresa</td><td style="padding:8px 0;font-weight:600">${empresa}</td></tr>
        <tr><td style="padding:8px 0;color:#888">Industria</td><td style="padding:8px 0">${industria || '—'}</td></tr>
      </table>
      <hr style="margin:20px 0;border-color:#222"/>
      <p style="font-family:sans-serif;font-size:14px;color:#888;margin-bottom:6px">Mensaje:</p>
      <p style="font-family:sans-serif;font-size:15px;background:#111;padding:16px;border-radius:8px;border-left:3px solid #C8102E">${mensaje.replace(/\n/g, '<br/>')}</p>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ArosTech EHS <noreply@safetytech.aros-tech.com>',
        to: ['info@aros-tech.com'],
        reply_to: correo,
        subject: `Nueva consulta EHS de ${nombre} — ${empresa}`,
        html: htmlBody,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Error al enviar el correo.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 })
  }
}
