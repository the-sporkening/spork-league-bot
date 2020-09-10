import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
	id!: number;

	@Column()
	userId!: string;

	@Column({default: 0})
	points?: number;

	@Column({default: 0})
    wins?: number;

    @Column({default: 0})
    losses?: number;
}