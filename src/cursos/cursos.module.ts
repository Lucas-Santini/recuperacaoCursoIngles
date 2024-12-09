

import { Module } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { PrismaService } from '../modulos/prisma/prisma.service';

@Module({
  controllers: [CursosController],
  providers: [CursosService, PrismaService],
})
export class CursosModule {}
