import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import ClientLayout from './components/ClientLayout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Cybersecurity Classroom',
  description: 'Una plataforma para aprender ciberseguridad',
  authors: [{ name: 'Cybersecurity Team' }],
  keywords: ['cybersecurity', 'education', 'learning platform'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
