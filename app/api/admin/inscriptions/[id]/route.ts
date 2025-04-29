import { NextResponse, NextRequest } from 'next/server';
import { verifyAuth } from '../../../../../lib/auth';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const isAuthenticated = await verifyAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
    }

    const { rows } = await sql`
      SELECT * FROM inscriptions WHERE id = ${params.id}
    `;

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Inscripción no encontrada' }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Error fetching inscription:', error);
    return NextResponse.json({ message: 'Error del servidor' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const isAuthenticated = await verifyAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
    }

    const { status } = await request.json();

    const { rows } = await sql`
      UPDATE inscriptions 
      SET status = ${status}
      WHERE id = ${params.id}
      RETURNING *
    `;

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Inscripción no encontrada' }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Error updating inscription:', error);
    return NextResponse.json({ message: 'Error del servidor' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const isAuthenticated = await verifyAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
    }

    const { rows } = await sql`
      DELETE FROM inscriptions 
      WHERE id = ${params.id}
      RETURNING *
    `;

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Inscripción no encontrada' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Inscripción eliminada con éxito' });
  } catch (error) {
    console.error('Error deleting inscription:', error);
    return NextResponse.json({ message: 'Error del servidor' }, { status: 500 });
  }
} 