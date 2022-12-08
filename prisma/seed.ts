import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'test@test.com',
        password: await bcrypt.hash('test12345', 12),
      },
      {
        email: 'test2@test2.com',
        password: await bcrypt.hash('test12345', 12),
      },
    ],
    skipDuplicates: true,
  });

  await prisma.video.createMany({
    data: [
      {
        name: 'AO VIVO E COM IMAGENS: BRASIL X CROÁCIA | QUARTAS DE FINAL | COPA DO MUNDO 2022',
        url: 'https://www.youtube.com/watch?v=88jWB1TBw0s',
        userId: 1,
      },
      {
        name: 'Como ESTUDAR PROGRAMAÇÃO',
        url: 'https://www.youtube.com/watch?v=bMLbf10uC0Y',
        userId: 1,
      },
      {
        name: '3 dicas essenciais de como estudar programação',
        url: 'https://www.youtube.com/watch?v=R39nsC6NYZY',
        userId: 2,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.tag.createMany({
    data: [
      {
        name: 'copadomundo',
      },
      {
        name: 'programação',
      },
      {
        name: 'estudo',
      },
      {
        name: 'diversão',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.videoTags.createMany({
    data: [
      {
        videoId: 1,
        tagId: 1,
      },
      {
        videoId: 1,
        tagId: 3,
      },
      {
        videoId: 2,
        tagId: 1,
      },
      {
        videoId: 2,
        tagId: 2,
      },
      {
        videoId: 2,
        tagId: 1,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
