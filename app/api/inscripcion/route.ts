import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const allowedExperiencia = [
  "Sí, ya trabajo en el rubro",
  "Sí, pero no en seguridad",
  "No, pero me interesa mucho"
]
const allowedComoEnteraste = [
  "TikTok",
  "Instagram",
  "LinkedIn",
  "Por una persona (referido)",
  "Otro"
]

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validar datos requeridos
    const requiredFields = [
      'nombre',
      'dni',
      'email',
      'ubicacion',
      'edad',
      'experiencia',
      'motivacion',
      'comoNosConociste'
    ]

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `El campo ${field} es requerido` },
          { status: 400 }
        )
      }
    }

    // Crear inscripción
    const inscription = await prisma.inscription.create({
      data: {
        nombre: data.nombre,
        dni: data.dni,
        email: data.email,
        ubicacion: data.ubicacion,
        edad: parseInt(data.edad),
        experiencia: data.experiencia,
        motivacion: data.motivacion,
        comoNosConociste: data.comoNosConociste,
        referidoPor: data.referidoPor || null
      }
    })

    return NextResponse.json(inscription)
  } catch (error) {
    console.error('Error al procesar inscripción:', error)
    return NextResponse.json(
      { error: 'Error al procesar la inscripción' },
      { status: 500 }
    )
  }
} 