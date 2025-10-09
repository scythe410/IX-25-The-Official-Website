import type { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vt323',
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
      <body className={`${vt323.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
