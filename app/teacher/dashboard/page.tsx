'use client';

import { useAuth } from '@/app/context/AuthContext';
import DashboardLayout from '@/app/components/DashboardLayout';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function TeacherDashboard() {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const currentTab = pathname.split('/').pop() || 'videos';

  useEffect(() => {
    if (!loading && (!user || user.role !== 'teacher')) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return <div>Cargando...</div>;
  }

  return (
    <DashboardLayout>
      {currentTab === 'videos' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Mis Videos</h2>
          {/* Aquí irá el contenido de la página de videos */}
        </div>
      )}
      
      {currentTab === 'estudiantes' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Mis Estudiantes</h2>
          {/* Aquí irá el contenido de la página de estudiantes */}
        </div>
      )}
      
      {currentTab === 'estadisticas' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Estadísticas</h2>
          {/* Aquí irá el contenido de la página de estadísticas */}
        </div>
      )}
      
      {currentTab === 'perfil' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Mi Perfil</h2>
          {/* Aquí irá el contenido de la página de perfil */}
        </div>
      )}
    </DashboardLayout>
  );
} 