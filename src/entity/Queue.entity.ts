import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Queue {
    @PrimaryGeneratedColumn()
	id!: number;

	@Column()
	userId!: string;

	@Column()
	matchId!: string;

	@Column()
	vote!: number;
}