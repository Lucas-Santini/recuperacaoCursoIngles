import { Injectable } from '@nestjs/common';
import { PrismaService } from '../modulos/prisma/prisma.service';


@Injectable()
export class CursosService {
  constructor(private prisma: PrismaService) { }

  async getAllCursos() {
    return this.prisma.curso.findMany();  // Consulta simples para pegar todos os cursos
  }
}
