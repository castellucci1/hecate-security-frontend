import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Crear usuario admin
  const hashedPassword = await hash('admin123', 10);
  
  await prisma.user.upsert({
    where: { email: 'admin@hecatesecurity.com' },
    update: {},
    create: {
      email: 'admin@hecatesecurity.com',
      password: hashedPassword,
      role: 'ADMIN'
    }
  });

  console.log('Base de datos sembrada con éxito');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 