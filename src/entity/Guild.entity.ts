import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Guild {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column()
	discordId!: string;
	
  @Column({ default: 'sl!' })
  prefix?: string;
}