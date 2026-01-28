import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: "tb_produtos"})
export class Produto{
    
    @PrimaryGeneratedColumn()
    //@ApiProperty()// 
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    //@ApiProperty()// 
    nomeProduto: string

    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2})
    //@ApiProperty()// 
    preco: number;

    @IsNotEmpty()
    @Column({type: 'boolean', nullable: false})
    //@ApiProperty()// 
    status: boolean;

    //@ApiProperty()
    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
    
     @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria;

}