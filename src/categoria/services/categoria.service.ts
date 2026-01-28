import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';
import { CreateCategoriaDto } from '../dto/create.categoria.dto';
import { UpdateCategoriaDto } from '../dto/update.categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({ where: { id } });

    if (!categoria) {
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );
    }

    return categoria;
  }

  async findByNome(nome: string): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      where: { nome: Like(`%${nome}%`) },
    });
  }

  async create(dto: CreateCategoriaDto): Promise<Categoria> {
    const existe = await this.categoriaRepository.findOne({
      where: { nome: dto.nome },
    });

    if (existe) {
      throw new HttpException(
        'Já existe uma categoria com esse nome!',
        HttpStatus.CONFLICT,
      );
    }

    const categoria = this.categoriaRepository.create(dto);
    return this.categoriaRepository.save(categoria);
  }

  async update(dto: UpdateCategoriaDto): Promise<Categoria> {
    await this.findById(dto.id);

    const existe = await this.categoriaRepository.findOne({
      where: { nome: dto.nome },
    });

    if (existe && existe.id !== dto.id) {
      throw new HttpException(
        'Já existe outra categoria com esse nome!',
        HttpStatus.CONFLICT,
      );
    }

    const categoria = this.categoriaRepository.create(dto);
    return this.categoriaRepository.save(categoria);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.categoriaRepository.delete(id);
  }
}
