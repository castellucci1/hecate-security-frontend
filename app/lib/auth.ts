import { cookies } from 'next/headers';
import { jwtVerify, JWTPayload } from 'jose';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export interface AuthUser {
  _id: string;
  email: string;
  name: string;
  role: string;
}

export async function verifyAuth(request: NextRequest): Promise<boolean> {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return false;
    }

    // Verify the token
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    return !!payload;
  } catch (error) {
    console.error('Auth verification error:', error);
    return false;
  }
}

export async function getUser(request: NextRequest): Promise<AuthUser | null> {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return null;
    }

    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    return {
      _id: payload.userId as string,
      email: payload.email as string,
      name: payload.name as string,
      role: payload.role as string
    };
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
}

interface SessionUser {
  id: string;
  email: string;
  role: string;
}

interface Session {
  user: SessionUser;
}

export async function getSession(): Promise<Session | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken');

    if (!token?.value) {
      return null;
    }

    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET || 'your-secret-key');
    const { payload } = await jwtVerify(token.value, secret);

    if (!payload.sub || !payload.email || !payload.role) {
      return null;
    }

    return {
      user: {
        id: payload.sub as string,
        email: payload.email as string,
        role: payload.role as string
      }
    };
  } catch (error) {
    console.error('Session verification error:', error);
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return session !== null;
}

export async function hasRole(allowedRoles: string[]): Promise<boolean> {
  const session = await getSession();
  if (!session?.user?.role) return false;
  return allowedRoles.includes(session.user.role);
} 