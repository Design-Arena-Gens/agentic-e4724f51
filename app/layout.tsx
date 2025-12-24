import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Light Collector — Pixar-Style Short Film Blueprint',
  description:
    'Storyboard, timing, and mood breakdown for a heartwarming Pixar-inspired short about SPARK, a lonely maintenance robot who finds connection by sharing its light.',
  openGraph: {
    title: 'The Light Collector — Pixar-Style Short Film Blueprint',
    description:
      'A 55-second, non-verbal, Pixar-style short film concept following SPARK, a maintenance robot who discovers the power of sharing its light.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Light Collector — Pixar-Style Short Film Blueprint',
    description:
      'Scene-by-scene storyboard and sonic direction for a YouTube-ready short film featuring SPARK the maintenance robot.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="app-shell">{children}</main>
      </body>
    </html>
  );
}
