import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validar campos requeridos
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Buscar usuario
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Verificar contraseña
    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Generar token
    const token = sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Establecer cookie
    cookies().set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 horas
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error en login:', error);
    return NextResponse.json(
      { error: 'Error al procesar el login' },
      { status: 500 }
    );
  }
} 