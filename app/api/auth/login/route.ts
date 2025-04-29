import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validar campos requeridos
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Hacer la petición al backend
    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    // Si la respuesta del backend es exitosa, crear la respuesta con los tokens
    if (response.ok) {
      const nextResponse = NextResponse.json(
        { 
          success: true, 
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          redirectTo: '/admin/dashboard' 
        },
        { status: 200 }
      );

      // Establecer las cookies
      if (data.accessToken) {
        nextResponse.cookies.set('access_token', data.accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 // 24 horas
        });
      }

      if (data.refreshToken) {
        nextResponse.cookies.set('refresh_token', data.refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 7 // 7 días
        });
      }

      return nextResponse;
    }

    // Si hay un error, devolver el mensaje del backend
    return NextResponse.json(
      { message: data.message || 'Error al iniciar sesión' },
      { status: response.status }
    );
  } catch (error) {
    console.error('Error en login:', error);
    return NextResponse.json(
      { message: 'Error al conectar con el servidor' },
      { status: 500 }
    );
  }
} 