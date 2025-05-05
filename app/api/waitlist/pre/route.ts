import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, experience, source, otherSource, referrerName } = body;

    // Validate required fields
    if (!fullName || !email || !experience || !source) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingUser } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          full_name: fullName,
          email,
          experience,
          source,
          other_source: otherSource,
          referrer_name: referrerName,
          status: 'pending',
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Error inserting into Supabase:', error);
      return NextResponse.json(
        { error: 'Error al guardar los datos' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Pre-inscripción recibida exitosamente', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing pre-inscription:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 