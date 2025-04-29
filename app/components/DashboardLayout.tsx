'use client';

import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tab,
  Tabs,
  Button,
} from '@mui/material';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const currentTab = pathname.split('/').pop() || 'videos';

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Cargando...</Typography>
      </Box>
    );
  }

  const baseTabs = [
    { id: 'videos', label: 'Videos' },
    { id: 'mis-cursos', label: 'Mis Cursos' },
    { id: 'progreso', label: 'Mi Progreso' },
  ];

  const teacherTabs = [
    { id: 'videos', label: 'Gestión de Videos' },
    { id: 'mis-cursos', label: 'Mis Cursos' },
    { id: 'estudiantes', label: 'Mis Estudiantes' },
    { id: 'estadisticas', label: 'Estadísticas' },
    { id: 'perfil', label: 'Mi Perfil' }
  ];

  const adminTabs = [
    { id: 'videos', label: 'Gestión de Videos' },
    { id: 'cursos', label: 'Gestión de Cursos' },
    { id: 'inscripciones', label: 'Inscripciones' },
    { id: 'estudiantes', label: 'Gestión de Estudiantes' },
    { id: 'profesores', label: 'Gestión de Profesores' },
    { id: 'estadisticas', label: 'Estadísticas Globales' },
    { id: 'configuracion', label: 'Configuración' },
    { id: 'perfil', label: 'Mi Perfil' }
  ];

  const tabs = {
    admin: adminTabs,
    teacher: teacherTabs,
    student: baseTabs
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1, color: 'text.primary' }}>
              {user.role === 'admin' ? 'Panel de Administración' : 
               user.role === 'teacher' ? 'Panel de Profesor' : 
               'Mi Aula Virtual'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                Bienvenido, {user.name}
              </Typography>
              <Button
                onClick={logout}
                color="inherit"
                sx={{ color: 'text.secondary' }}
              >
                Cerrar Sesión
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Tabs
          value={currentTab}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 3,
            borderBottom: 1,
            borderColor: 'divider',
            '& .MuiTab-root': {
              color: 'text.secondary',
              '&.Mui-selected': {
                color: 'text.primary',
              },
            },
          }}
        >
          {tabs[user.role].map((tab) => (
            <Tab
              key={tab.id}
              label={tab.label}
              value={tab.id}
              component={Link}
              href={`/${user.role}/dashboard/${tab.id}`}
            />
          ))}
        </Tabs>

        <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 3 }}>
          {children}
        </Box>
      </Container>
    </Box>
  );
} 