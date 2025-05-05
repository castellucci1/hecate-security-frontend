import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import ClientLayout from './components/ClientLayout';
import Background from './components/Background';
import Loader from './components/Loader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Hécate - Academia de Seguridad de la Información',
  description: 'Una plataforma para aprender ciberseguridad',
  authors: [{ name: 'Hécate Team' }],
  keywords: ['cybersecurity', 'education', 'learning platform'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.className} antialiased bg-[#111216] text-white`}>
        <Background />
        <Loader />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
