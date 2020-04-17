import { Command, ArgumentGenerator } from "discord-akairo";
import ArgumentOptions from "./ArgumentOptions";
import CommandOptions from "./CommandOptions";
import { Repository, getRepository } from "typeorm";
import { Guild } from "../entity/Guild.entity";
import { Lobby } from "../entity/Lobby.entity";
import { Player } from "../entity/Player.entity";
import SporkLeagueClient from "./SporkLeagueClient";

class CustomCommand extends Command {
	client: SporkLeagueClient = new SporkLeagueClient();
  guildRepository: Repository<Guild>;
  lobbyRepository: Repository<Lobby>;
  playerRepository: Repository<Player>;
  args?: ArgumentOptions[];
  categoryName?: string;
  guild?: Guild;
  lobby?: Lobby;
  player?: Player;

  constructor(id: string, options: CommandOptions) {
    super(id, options);
    this.args = options.args;
    this.categoryName = options.category;
    this.guildRepository = getRepository(Guild);
    this.lobbyRepository = getRepository(Lobby);
    this.playerRepository = getRepository(Player);
  }
}

export default CustomCommand;