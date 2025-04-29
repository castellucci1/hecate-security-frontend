'use client';

import DashboardLayout from '@/app/components/DashboardLayout';
import { usePathname } from 'next/navigation';

export default function StudentDashboard() {
  const pathname = usePathname();
  const currentTab = pathname.split('/').pop() || 'videos';

  return (
    <DashboardLayout role="student" userName="Estudiante">
      {currentTab === 'videos' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Videos del Curso</h2>
          {/* Aquí irá el contenido de la página de videos */}
        </div>
      )}
      
      {currentTab === 'mis-cursos' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Mis Cursos</h2>
          {/* Aquí irá el contenido de la página de cursos */}
        </div>
      )}
      
      {currentTab === 'progreso' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Mi Progreso</h2>
          {/* Aquí irá el contenido de la página de progreso */}
        </div>
      )}
      
      {currentTab === 'certificados' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Mis Certificados</h2>
          {/* Aquí irá el contenido de la página de certificados */}
        </div>
      )}
    </DashboardLayout>
  );
} 