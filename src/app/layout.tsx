
import type { Metadata } from 'next';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'IX25 - The Official Site',
  description: 'Defying the final line — a battle for startup brilliance, prototypes and the future of ideas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-tommy" suppressHydrationWarning>
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
