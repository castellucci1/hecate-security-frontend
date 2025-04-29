'use client';

import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { Container, Typography, Box, CircularProgress } from '@mui/material';

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    } else if (!loading && user && user.role !== 'admin') {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Panel de Administración
      </Typography>
      <Typography variant="h6" gutterBottom>
        Bienvenido, {user.name}
      </Typography>
      {/* Aquí va el contenido del dashboard */}
    </Container>
  );
} 