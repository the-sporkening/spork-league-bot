import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
	id!: number;

    @Column()
	winningTeam!: string;
}