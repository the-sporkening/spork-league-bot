import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Lobby {
    @PrimaryGeneratedColumn()
	id!: number;

	@Column()
	discordId!: number;

	@Column()
	categoryId!: number;
	
	@Column()
    lobbyId!: number;

    @Column()
	waitingRoomId?: number;
	
	@Column({default: 5})
    maxPlayerPerTeam?: number;
}