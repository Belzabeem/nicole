import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nicole Yahaya — Tech Creator & Keynote Speaker',
  description:
    'Tech content creator, product specialist, and keynote speaker helping global smartphone brands educate and build trust in emerging markets.',
  openGraph: {
    title: 'Nicole Yahaya',
    description: 'Tech Content Creator & Keynote Speaker',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
