import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  nome: string;

  @Column({ length: 255, nullable: true })
  descricao?: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.categorias, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
