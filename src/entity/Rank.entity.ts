import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Rank {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column()
	discordId!: string;

  @Column()
	rankId!: string;

  @Column()
	pointsRequired!: number;
}