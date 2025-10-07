import type { Metadata } from 'next';
import { Bebas_Neue, Readex_Pro } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
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
      <body className={`${bebasNeue.variable} ${readexPro.variable} font-readex`}>
        {children}
      </body>
    </html>
  );
}
