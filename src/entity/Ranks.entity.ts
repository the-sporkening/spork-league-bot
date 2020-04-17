import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Ranks {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column()
	discordId!: string;

  @Column()
	rankId!: string;

  @Column()
	pointsRequired!: number;
}