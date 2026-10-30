import type { Metadata, Viewport } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';
import { site, socials } from '@/data/site';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
});

const title = `${site.name} - ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    'Nicole Yahaya',
    'keynote host Nigeria',
    'tech creator Nigeria',
    'Xiaomi Nigeria',
    'smartphone reviewer',
    'product launch host',
    'brand partnerships',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    locale: 'en_NG',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: `${site.name} - ${site.tagline}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#12100d',
  colorScheme: 'dark light',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: site.creatorBrand,
  url: site.url,
  image: `${site.url}/images/nicole-portrait.jpg`,
  jobTitle: 'Retail Manager',
  worksFor: { '@type': 'Organization', name: 'Xiaomi Nigeria' },
  description: site.description,
  email: `mailto:${site.email}`,
  sameAs: socials.map((s) => s.href),
  knowsAbout: ['Smartphones', 'Consumer technology', 'Keynote hosting', 'Product launches', 'Emerging-market strategy'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
