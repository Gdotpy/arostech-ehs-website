import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://safetytech.aros-tech.com'),
  title: {
    default: 'ArosTech EHS | Seguridad Industrial, STPS, ISO y DC3 en México',
    template: '%s | ArosTech EHS',
  },
  description:
    'ArosTech EHS ofrece soluciones integrales de seguridad industrial, salud ocupacional y medio ambiente. Cursos con DC3, consultoría ISO 45001/14001 y gestión de cumplimiento STPS.',
  keywords: [
    'seguridad industrial', 'capacitaciones STPS', 'certificación ISO 45001',
    'consultoría medio ambiente', 'cursos STPS en línea', 'DC3 digital México',
    'EHS consulting Mexico', 'ISO 14001 consultant', 'safety compliance platform',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://safetytech.aros-tech.com',
    siteName: 'ArosTech EHS',
    images: [{ url: '/images/hero.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
