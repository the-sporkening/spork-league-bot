import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Guild {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column()
	discordId!: string;

  @Column("jsonb", { default: { guildSearch: true } })
	config!: {
		[key: string]: string | boolean; // for guild["key"] expression
		lobbyChannel: string;
		guildSearch: boolean;
	};

  @Column({ default: 'sl!' })
  prefix?: string;
}