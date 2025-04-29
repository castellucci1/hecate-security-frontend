import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('auth_token');

    if (!token) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    // Verificar el token
    verify(token.value, JWT_SECRET);
    
    return NextResponse.json({ authenticated: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'No autorizado' },
      { status: 401 }
    );
  }
} 