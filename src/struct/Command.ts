import { Command, ArgumentGenerator } from "discord-akairo";
import ArgumentOptions from "./ArgumentOptions";
import CommandOptions from "./CommandOptions";
import { Repository, getRepository } from "typeorm";
import { Guild } from "../entity/Guild.entity";
import SporkLeagueClient from "./SporkLeagueClient";

class CustomCommand extends Command {
	client: SporkLeagueClient = new SporkLeagueClient();
  guildRepository: Repository<Guild>;
  args: ArgumentOptions[];
  categoryName: string;
  guild?: Guild;

  constructor(id: string, options: CommandOptions) {
    super(id, options);
    this.args = options?.args;
    this.categoryName = options?.category;
    this.guildRepository = getRepository(Guild);
  }
}

export default CustomCommand;