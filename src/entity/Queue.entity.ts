import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Queue {
    @PrimaryGeneratedColumn()
	id!: number;

	@Column()
	discordId!: string;

	@Column()
	lobbyId!: string;

	@Column()
	userId!: string;
}