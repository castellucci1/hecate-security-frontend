import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    // Validar campos requeridos
    if (!email || !password || !name) {
      return NextResponse.json(
        { message: 'Email, contraseña y nombre son requeridos' },
        { status: 400 }
      );
    }

    // Hacer la petición al backend
    const response = await fetch('http://localhost:3001/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await response.json();

    // Si la respuesta del backend es exitosa, crear la respuesta
    if (response.ok) {
      return NextResponse.json(
        { 
          success: true, 
          message: data.message,
          user: data.user
        },
        { status: 201 }
      );
    }

    // Si hay un error, devolver el mensaje del backend
    return NextResponse.json(
      { message: data.message || 'Error al registrar usuario' },
      { status: response.status }
    );
  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { message: 'Error al conectar con el servidor' },
      { status: 500 }
    );
  }
} 