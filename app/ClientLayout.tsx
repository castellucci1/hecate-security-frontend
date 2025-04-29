'use client';

import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ThemeRegistry from './providers/ThemeRegistry';
import MainLayout from './components/MainLayout';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ThemeRegistry>
        <AuthProvider>
          <MainLayout>{children}</MainLayout>
        </AuthProvider>
      </ThemeRegistry>
    </ThemeProvider>
  );
} 