import type { Metadata } from 'next'
import { STIX_Two_Text, DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Blindagem Metabólico — Evento Gratuito ao Vivo | 26 de Março',
  description:
    'Evento gratuito online com a nutricionista Michelly Silveira. Aprenda como a nutrição protege seu corpo durante o uso das canetas emagrecedoras e garante a manutenção do peso. 26 de março, 20h.',
  openGraph: {
    title: 'Blindagem Metabólico — Evento Gratuito ao Vivo | 26 de Março',
    description:
      'Evento gratuito online com a nutricionista Michelly Silveira. Aprenda como a nutrição protege seu corpo durante o uso das canetas emagrecedoras.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WPJMPTWV');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'Blindagem Metabólico',
              startDate: '2026-03-26T20:00:00-03:00',
              eventAttendanceMode:
                'https://schema.org/OnlineEventAttendanceMode',
              eventStatus: 'https://schema.org/EventScheduled',
              isAccessibleForFree: true,
              organizer: {
                '@type': 'Person',
                name: 'Michelly Silveira',
                jobTitle: 'Nutricionista Clínica',
              },
              location: {
                '@type': 'VirtualLocation',
                url: 'https://blindagemmetabolico.com.br',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${stixTwoText.variable} ${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPJMPTWV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
        <Script
          id="tracking-utms"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  let parametros = ["utm_source"];
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  for (const [key] of params) {
    if (!parametros.includes(key)) parametros.push(key);
  }
  const urlParamsCapt = new URLSearchParams(window.location.search);
  const urlParamsCaptReferrer = new URLSearchParams(document.referrer.split('?')[1] || '');
  let utms = {};
  parametros.forEach(el => {
    if (el === "utm_source") {
      utms[el] = urlParamsCapt.get(el) ?? (document.referrer ? (urlParamsCaptReferrer.get(el) ?? new URL(document.referrer).hostname) : "direto");
    } else {
      utms[el] = urlParamsCapt.get(el) ?? (urlParamsCaptReferrer.get(el) ?? "");
    }
  });
  let scks = Object.values(utms).filter(value => value !== "");
  let currentSckValues = [];
  if (urlParamsCapt.get('sck')) currentSckValues = urlParamsCapt.get('sck').split('|');
  scks = scks.filter(value => !currentSckValues.includes(value));
  const updateLinks = (el, elURL) => {
    const elSearchParams = new URLSearchParams(elURL.search);
    let modified = false;
    for (let key in utms) {
      if (!elSearchParams.has(key)) { elSearchParams.append(key, utms[key]); modified = true; }
    }
    if (!elSearchParams.has('sck') && scks.length > 0) { elSearchParams.append('sck', scks.join('|')); modified = true; }
    if (modified) return elURL.origin + elURL.pathname + "?" + elSearchParams.toString();
    return el.href;
  };
  document.querySelectorAll('a').forEach(el => {
    const elURL = new URL(el.href);
    if (!elURL.hash) el.href = updateLinks(el, elURL);
  });
  document.querySelectorAll('iframe').forEach(iframe => {
    let actualSrc = iframe.hasAttribute('data-src') ? iframe.getAttribute('data-src') : iframe.src;
    if (actualSrc) {
      const iframeURL = new URL(actualSrc);
      if (iframe.hasAttribute('data-src')) iframe.setAttribute('data-src', updateLinks(iframe, iframeURL));
      else iframe.src = updateLinks(iframe, iframeURL);
    }
  });
})();
            `,
          }}
        />
      </body>
    </html>
  )
}
