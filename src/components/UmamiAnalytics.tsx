'use client'

import Script from 'next/script'

const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

export function UmamiAnalytics() {
  if (!UMAMI_WEBSITE_ID) {
    console.warn('Umami: NEXT_PUBLIC_UMAMI_WEBSITE_ID not set')
    return null
  }

  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  )
}
