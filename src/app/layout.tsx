import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'iX — 25',
  description: 'Defying the final line — a battle for startup brilliance, prototypes and the future of ideas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
