

import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { PrismaService } from './modulos/prisma/prisma.module';

@Module({
  imports: [CursosModule],
  providers: [PrismaService],
})
export class AppModule {}
