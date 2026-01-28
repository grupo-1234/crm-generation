import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateCategoriaDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @MaxLength(100)
  nome: string;

  @MaxLength(255)
  descricao?: string;
}
