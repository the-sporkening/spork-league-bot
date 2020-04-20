import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Maps {
    @PrimaryGeneratedColumn()
	id!: number;

	@Column()
	discordId!: string;

	@Column()
	lobbyId!: string;

	@Column()
	mapId!: string;
}