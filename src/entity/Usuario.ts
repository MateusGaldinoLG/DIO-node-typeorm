import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity('usuarios')
export class Usuario {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string

    @Column()
    email: string
}
