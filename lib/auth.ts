import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret-key');

export async function verifyAuth(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token) return null;

  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload;
  } catch (err) {
    return null;
  }
}

export async function getSession() {
  const token = cookies().get('token')?.value;

  if (!token) return null;

  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload;
  } catch (err) {
    return null;
  }
}

export async function signToken(payload: any) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secret);

  return token;
} 