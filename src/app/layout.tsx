import type { Metadata } from 'next';
import localFont from 'next/font/local'
import { Bebas_Neue, Readex_Pro } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const bbhSansBartle = localFont({
  src: '../../public/fonts/BBHSansBartle-Regular.ttf',
  display: 'swap',
  variable: '--font-bbh-sans-bartle',
});

const readexPro = Readex_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-readex-pro',
});

export const metadata: Metadata = {
  title: 'CodeSprint X — Replica',
  description: 'Defying the final line — a battle for startup brilliance, prototypes and the future of ideas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bbhSansBartle.variable} ${readexPro.variable} font-readex`}>
        {children}
      </body>
    </html>
  );
}
