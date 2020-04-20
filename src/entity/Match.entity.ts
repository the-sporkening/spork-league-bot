import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
	id!: number;

	@Column()
	teamA1!: string;
	@Column()
	teamA2!: string;
	@Column()
	teamA3!: string;
	@Column()
	teamA4!: string;
	@Column()
	teamA5!: string;

	@Column()
	teamB1!: string;
	@Column()
	teamB2!: string;
	@Column()
	teamB3!: string;
	@Column()
	teamB4!: string;
	@Column()
	teamB5!: string;

    @Column({default: null})
	winningTeam?: string;
}