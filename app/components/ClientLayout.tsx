'use client';

import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import Footer from './Footer';
import Navbar from './Navbar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
} 