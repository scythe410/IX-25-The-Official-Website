import type { Metadata } from 'next';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/CustomCursor';
import {Analytics} from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://ix25.cloud'), // Replace with your actual domain
  title: 'IX 25 - The Official Site | Inter-University Designathon',
  description: 'IX 25 is Sri Lanka\'s pioneering AI and XR Designathon. A battle for startup brilliance, prototypes, and the future of ideas, organized by the IEEE Student Branch of IIT.',
  keywords: ['IX 25', 'Designathon', 'UI/UX', 'Hackathon', 'Sri Lanka', 'IEEE', 'IIT', 'Innovation', 'AI', 'XR', 'Wearable Technology'],
  creator: 'IEEE Student Branch of IIT',
  publisher: 'IEEE Student Branch of IIT',
  openGraph: {
    title: 'IX 25 - The Official Site | Inter-University Designathon',
    description: 'Defying the final line — a battle for startup brilliance, prototypes and the future of ideas.',
    url: 'https://ix25.cloud', // Replace with your actual domain
    siteName: 'IX 25',
    images: [
      {
        url: '/images/og-image.png', // OG image should be placed in public/images
        width: 1200,
        height: 630,
        alt: 'IX 25 Designathon Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IX 25 - The Official Site | Inter-University Designathon',
    description: 'IX 25 is Sri Lanka\'s pioneering AI and XR Designathon. Join the battle for startup brilliance!',
    images: ['/images/og-image.png'], // Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IX 25",
    "url": "https://ix25.cloud",
    "logo": "https://ix25.cloud/images/logo.svg",
    "sameAs": [
      "https://www.facebook.com/ieeeinformatics",
      "https://www.linkedin.com/company/ieeesbiit/",
      "https://www.instagram.com/ieeeiit/#"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-tommy" suppressHydrationWarning>
        <CustomCursor />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
