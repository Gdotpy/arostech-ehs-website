import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { siteUrl } from '@/data/marketing'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || '83dc5320-0864-404e-bdfc-32f669c67e47'
const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || 'https://cloud.umami.is/script.js'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ArosTech EHS | Seguridad Industrial, STPS, ISO y DC3 en México',
    template: '%s | ArosTech EHS',
  },
  description:
    'ArosTech EHS ofrece soluciones integrales de seguridad industrial, salud ocupacional y medio ambiente. Cursos STPS, apoyo documental DC-3, consultoría ISO 45001/14001 y gestión de evidencia.',
  keywords: [
    'seguridad industrial', 'capacitaciones STPS', 'certificación ISO 45001',
    'consultoría medio ambiente', 'cursos STPS en línea', 'DC3 digital México',
    'EHS consulting Mexico', 'ISO 14001 consultant', 'safety compliance platform',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteUrl,
    siteName: 'ArosTech EHS',
    images: [{ url: '/images/hero.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
      {umamiWebsiteId && (
        <Script
          src={umamiScriptUrl}
          data-website-id={umamiWebsiteId}
          strategy="afterInteractive"
        />
      )}
    </html>
  )
}
