

import { Controller, Get } from '@nestjs/common';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {
  constructor(private cursosService: CursosService) {}

  @Get()
  async findAll() {
    return this.cursosService.getAllCursos();  // Retorna todos os cursos
  }
}


