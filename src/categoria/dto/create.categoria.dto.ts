import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty()
  @MaxLength(100)
  nome: string;

  @MaxLength(255)
  descricao?: string;
}
