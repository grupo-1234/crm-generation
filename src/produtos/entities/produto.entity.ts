import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

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

    /*@ApiProperty()
    @ManyToOne(() => Usuario, (usuario) => usuario.produto,{
        onDelete: "CASCADE"
    })
    
    usuario: Usuario;*/

}