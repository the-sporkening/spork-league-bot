import { Command, ArgumentGenerator } from "discord-akairo";
import ArgumentOptions from "./ArgumentOptions";
import CommandOptions from "./CommandOptions";
import { Repository, getRepository } from "typeorm";
import { Guild } from "../entity/Guild.entity";
import { Lobby } from "../entity/Lobby.entity";
import SporkLeagueClient from "./SporkLeagueClient";

class CustomCommand extends Command {
	client: SporkLeagueClient = new SporkLeagueClient();
  guildRepository: Repository<Guild>;
  lobbyRepository: Repository<Lobby>;
  args?: ArgumentOptions[];
  categoryName?: string;
  guild?: Guild;
  lobby?: Lobby;

  constructor(id: string, options: CommandOptions) {
    super(id, options);
    this.args = options.args;
    this.categoryName = options.category;
    this.guildRepository = getRepository(Guild);
    this.lobbyRepository = getRepository(Lobby);
  }
}

export default CustomCommand;