import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';
import { CreateCategoriaDto } from '../dto/create.categoria.dto';
import { UpdateCategoriaDto } from '../dto/update.categoria.dto';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  }

  @Get('nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Categoria[]> {
    return this.categoriaService.findByNome(nome);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCategoriaDto): Promise<Categoria> {
    return this.categoriaService.create(dto);
  }

  @Put()
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdateCategoriaDto): Promise<Categoria> {
    return this.categoriaService.update(dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.categoriaService.delete(id);
  }
}
