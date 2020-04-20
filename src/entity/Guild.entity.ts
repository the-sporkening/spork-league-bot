import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Guild {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column()
	discordId!: string;
	
  @Column({ default: ';' })
  prefix?: string;

  @Column({default: null})
  adminRole?: string;

  @Column({default: null})
  modRole?: string;
}