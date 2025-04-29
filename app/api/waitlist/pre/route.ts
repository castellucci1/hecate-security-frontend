import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, background, expectations } = body;

    // Validate required fields
    if (!name || !email || !background || !expectations) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Validate the email format
    // 2. Store the data in your database
    // 3. Send a confirmation email
    // 4. Add to your mailing list if applicable

    // For now, we'll just log the data
    console.log('Pre-inscription received:', { name, email, background, expectations });

    return NextResponse.json(
      { message: 'Pre-inscription received successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing pre-inscription:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 