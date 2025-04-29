import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
 
export async function GET() {
  cookies().delete('admin_token');
  return NextResponse.redirect(new URL('/admin/login', request.url));
} 