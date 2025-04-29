import { NextResponse } from 'next/server';
import { verifyAuth } from '../../../lib/auth';
import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
  try {
    const isAuthenticated = await verifyAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
    }

    const { rows } = await sql`
      SELECT * FROM inscriptions
      ORDER BY created_at DESC
    `;

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching inscriptions:', error);
    return NextResponse.json({ message: 'Error del servidor' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const isAuthenticated = await verifyAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
    }

    const { courseId, userId, status = 'PENDING' } = await request.json();

    const { rows } = await sql`
      INSERT INTO inscriptions (course_id, user_id, status)
      VALUES (${courseId}, ${userId}, ${status})
      RETURNING *
    `;

    return NextResponse.json(rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating inscription:', error);
    return NextResponse.json({ message: 'Error del servidor' }, { status: 500 });
  }
} 