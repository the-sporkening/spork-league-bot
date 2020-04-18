import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Lobby {
    @PrimaryGeneratedColumn()
	id!: number;

	@Column()
	discordId!: string;

	@Column({default: null})
	categoryId?: string;
	
	@Column({default: null})
    lobbyId?: string;

    @Column({default: null})
	waitingRoomId?: string;
	
	@Column({default: 5})
    maxPlayerPerTeam?: number;
}