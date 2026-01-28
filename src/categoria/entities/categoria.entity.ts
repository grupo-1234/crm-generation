import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produtos/entities/produto.entity';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_categorias' })
export class Categoria {

  @PrimaryGeneratedColumn()
  @ApiProperty() 
  id: number;

  @Column({ length: 100, unique: true })
  nome: string;

  @IsNotEmpty()
  @ApiProperty() 
  @Column({ length: 255, nullable: false })
  descricao: string;

  @ApiProperty()
  @OneToMany(() => Produto, (produto) => produto.usuario)
  produto: Produto[];

}
