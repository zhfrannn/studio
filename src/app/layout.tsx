import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import 'mapbox-gl/dist/mapbox-gl.css';
import Providers from '@/components/providers';

export const metadata: Metadata = {
  title: 'Wave of Voice',
  description:
    'A platform for sharing stories of resilience, wisdom, and peace from Aceh.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background antialiased text-foreground">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
