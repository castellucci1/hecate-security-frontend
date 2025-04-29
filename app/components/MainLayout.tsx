'use client';

import { useAuth } from '../context/AuthContext';
import { Box } from '@mui/material';
import { Navbar } from './Navbar';
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const pathname = usePathname();

  // No mostrar la navbar en la página de login
  if (pathname === '/login') {
    return <>{children}</>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          minHeight: '100vh',
        }}
      >
        {children}
      </Box>
    </Box>
  );
} 