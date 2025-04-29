'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Terms = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen pt-32 ${theme === 'dark' ? 'bg-[#2c2a28] text-[#eae5df]' : 'bg-white text-[#2c2a28]'}`}>
      <div className="container mx-auto px-8 pb-32">
        <h1 className="text-4xl md:text-5xl termina font-bold mb-16 uppercase">
          Términos y Condiciones
        </h1>

        <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''} 
          ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
          
          <section className="mb-12">
            <h2 className="text-2xl termina font-bold mb-8 uppercase">SECCIÓN I. TÉRMINOS Y CONDICIONES DE UTILIZACIÓN DEL SITIO</h2>
            
            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">1. CONDICIONES GENERALES</h3>
              <p className="mb-4">1.1. Los presentes Términos y Condiciones (en adelante, los "Términos") regulan la relación contractual entre HECATE SECURITY LLC, sociedad legalmente constituida en el Estado de Delaware, Estados Unidos, con domicilio en 254 Chapman Rd, Ste 208 #18338, Newark, DE, 19702, y representada en este acto por su CEO, Ailín Castellucci (en adelante, "Hécate" o "la Compañía"), y las personas que hagan uso del sitio www.hecatesecurity.com (en adelante, el "Sitio").</p>
              <p className="mb-4">1.2. Toda persona que navegue el Sitio o adquiera un Curso, según dicho término se define más adelante, declara haber leído, comprendido y aceptado la totalidad de los presentes Términos.</p>
              <p className="mb-4">1.3. QUIEN NO ACEPTARE ESTOS TÉRMINOS DEBERÁ ABSTENERSE DE UTILIZAR EL SITIO Y/O ADQUIRIR CURSOS.</p>
              <p className="mb-4">1.4. Los Términos podrán ser modificados en cualquier momento por la Compañía, sin necesidad de consentimiento previo por parte del Usuario. Las modificaciones entrarán en vigencia desde su publicación.</p>
              <p className="mb-4">1.5. El acceso al Sitio es libre, gratuito y no requiere suscripción previa. Sin embargo, para contratar productos o servicios el Usuario deberá completar un formulario y aceptar los presentes Términos.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">2. POLÍTICA DE PRIVACIDAD Y DATOS PERSONALES</h3>
              <p className="mb-4">2.1. La información personal que el Usuario brinde al contratar un Curso se tratará de acuerdo con la Política de Privacidad disponible en el Sitio.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">3. CAPACIDAD</h3>
              <p className="mb-4">3.1. Los productos y servicios están dirigidos a personas mayores de 16 años con capacidad legal para contratar. Quien contrate en representación de una persona jurídica declara tener la autoridad suficiente para ello.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">4. USO DEL SITIO Y CONTENIDOS</h3>
              <p className="mb-4">4.1. El Usuario se compromete a utilizar el Sitio conforme a la ley, la moral, las buenas costumbres y el orden público, absteniéndose de usarlo con fines ilícitos o lesivos para Hécate o terceros.</p>
              <p className="mb-4">4.2. Los contenidos del Sitio son propiedad de Hécate. Está prohibida su reproducción sin consentimiento.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">5. SEGURIDAD</h3>
              <p className="mb-4">5.1. El Usuario se obliga a no intentar acceder a recursos restringidos o interferir con el funcionamiento normal del Sitio.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl termina font-bold mb-8 uppercase">SECCIÓN II. REGLAMENTO DE LOS CURSOS</h2>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">1. DEFINICIONES Y ALCANCE</h3>
              <p className="mb-4">1.1. A los efectos del presente Reglamento, se entenderá como "Curso" a toda capacitación brindada por Hécate a través de su plataforma.</p>
              <p className="mb-4">1.2. El "Estudiante" será toda persona que contrate y acceda a un Curso.</p>
              <p className="mb-4">1.3. Este Reglamento aplica a todos los Cursos disponibles en la plataforma, sin distinción de duración, modalidad o nivel.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">2. MODALIDAD DE CURSADA</h3>
              <p className="mb-4">2.1. Los Cursos son 100% asincrónicos y autogestionados. El Estudiante podrá acceder al contenido grabado a demanda dentro del plazo de cursada y durante seis (6) meses adicionales tras su finalización.</p>
              <p className="mb-4">2.2. La cursada podrá complementarse con instancias sincrónicas optativas, como sesiones de Q&A, en las fechas y horarios que la Compañía disponga.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">3. CONDICIONES DE PAGO</h3>
              <p className="mb-4">3.1. El Curso podrá abonarse en un pago único o en cuotas mensuales, según lo informado al momento de la inscripción.</p>
              <p className="mb-4">3.2. Las cuotas deberán abonarse antes del día 10 de cada mes. El acceso se suspenderá automáticamente el día 11 ante la falta de pago.</p>
              <p className="mb-4">3.3. El incumplimiento reiterado podrá derivar en la baja definitiva del Estudiante, sin derecho a reintegro.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">4. POLÍTICA DE CANCELACIÓN Y REEMBOLSO</h3>
              <p className="mb-4">4.1. No se realizarán devoluciones una vez iniciado el Curso.</p>
              <p className="mb-4">4.2. Si el Estudiante solicitara la baja antes del inicio, podrá reclamar un reintegro del 80% del valor abonado.</p>
              <p className="mb-4">4.3. La solicitud deberá realizarse por correo a hola@hecatesecurity.com.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">5. CERTIFICACIÓN</h3>
              <p className="mb-4">5.1. El Estudiante podrá obtener un certificado digital de participación si completa la totalidad de los contenidos y actividades requeridas.</p>
              <p className="mb-4">5.2. El certificado no equivale a título universitario oficial ni habilita al ejercicio profesional.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">6. CONDUCTA Y USO DE LA PLATAFORMA</h3>
              <p className="mb-4">6.1. El Estudiante deberá respetar normas de conducta básicas en espacios de interacción.</p>
              <p className="mb-4">6.2. El uso de la plataforma es personal e intransferible. La cesión de acceso podrá implicar la expulsión del Curso.</p>
              <p className="mb-4">6.3. Está prohibida la captación de usuarios para fines comerciales o externos a Hécate.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">7. PROPIEDAD INTELECTUAL</h3>
              <p className="mb-4">7.1. Todos los contenidos de los Cursos son propiedad de Hécate o sus colaboradores. Está prohibida su reproducción sin autorización.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">8. USO DE IMAGEN Y NOMBRE</h3>
              <p className="mb-4">8.1. Al participar en instancias grabadas, el Estudiante autoriza a Hécate a utilizar su imagen, voz y nombre con fines educativos o promocionales, sin compensación adicional.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">9. EMPLEABILIDAD</h3>
              <p className="mb-4">9.1. Hécate no garantiza la obtención de empleo, ascensos ni beneficios laborales a partir de la realización del Curso.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">10. SOPORTE TÉCNICO Y CONTACTO</h3>
              <p className="mb-4">10.1. Para consultas técnicas o académicas, el Estudiante podrá comunicarse a hola@hecatesecurity.com.</p>
              <p className="mb-4">10.2. El tiempo estimado de respuesta es de 48 a 72 horas hábiles.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">11. ACTUALIZACIÓN DE CONTENIDOS</h3>
              <p className="mb-4">11.1. Hécate podrá actualizar, modificar o reemplazar contenidos del Curso durante su vigencia, en función de cambios tecnológicos, mejoras pedagógicas o necesidad de adecuación normativa.</p>
              <p className="mb-4">11.2. Las actualizaciones no generarán costos adicionales para el Estudiante.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">12. VALIDEZ DE PROMOCIONES Y DESCUENTOS</h3>
              <p className="mb-4">12.1. Las promociones, descuentos o becas son aplicables únicamente bajo las condiciones específicas comunicadas en cada campaña.</p>
              <p className="mb-4">12.2. No son acumulables entre sí ni transferibles a terceros.</p>
              <p className="mb-4">12.3. El incumplimiento de requisitos podrá derivar en la pérdida del beneficio sin derecho a reclamo alguno.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">13. MANTENIMIENTO Y DISPONIBILIDAD DE LA PLATAFORMA</h3>
              <p className="mb-4">13.1. La Compañía podrá realizar tareas de mantenimiento sin previo aviso, procurando minimizar el impacto sobre la experiencia del Estudiante.</p>
              <p className="mb-4">13.2. No se garantiza disponibilidad ininterrumpida del servicio.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">14. USO DE LA MARCA HÉCATE</h3>
              <p className="mb-4">14.1. Queda prohibido el uso del nombre, logo o identidad visual de Hécate sin autorización expresa. Esta prohibición incluye a egresados, salvo comunicación escrita de excepción.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">15. CONTACTO CON DOCENTES</h3>
              <p className="mb-4">15.1. El contacto con el equipo docente o tutores deberá hacerse a través de los canales oficiales que disponga la Compañía. El contacto por medios personales, comerciales o externos queda expresamente prohibido.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl termina font-bold mb-4">16. LEY APLICABLE Y JURISDICCIÓN</h3>
              <p className="mb-4">16.1. Los presentes Términos se rigen por las leyes del Estado de Delaware, Estados Unidos.</p>
              <p className="mb-4">16.2. Las Partes se someten a los tribunales de dicha jurisdicción, renunciando a cualquier otro fuero.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms; 