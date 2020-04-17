import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Vote {
    @PrimaryGeneratedColumn()
	id!: number;

	@Column()
	userId!: string;

	@Column()
	matchId!: string;

	@Column()
	vote!: number;
}