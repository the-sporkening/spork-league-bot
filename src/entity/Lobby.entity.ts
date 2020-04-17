import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Lobby {
    @PrimaryGeneratedColumn()
	id!: number;

	@Column()
	discordId!: string;

	@Column()
	categoryId?: string;
	
	@Column()
    lobbyId?: string;

    @Column()
	waitingRoomId?: string;
	
	@Column({default: 5})
    maxPlayerPerTeam?: number;
}