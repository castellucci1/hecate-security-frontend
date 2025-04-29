import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET() {
  try {
    const token = cookies().get('admin_token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: 'No autorizado' },
        { status: 401 }
      );
    }

    verify(token, JWT_SECRET!);
    return NextResponse.json({ authenticated: true });
  } catch (error) {
    return NextResponse.json(
      { message: 'No autorizado' },
      { status: 401 }
    );
  }
} 