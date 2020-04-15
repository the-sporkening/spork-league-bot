import { Listener, ListenerOptions, AkairoClient } from 'discord-akairo';
import SporkLeagueClient from "./SporkLeagueClient";
import { Guild } from "../entity/Guild.entity";
import { Repository, getRepository } from "typeorm";

export default class SporkLeagueListener extends Listener {
  client: SporkLeagueClient = new SporkLeagueClient();
  guildRepository: Repository<Guild>;

  constructor(id: string, options?: ListenerOptions) {
    super(id, options);

    this.guildRepository = getRepository(Guild);
  }
}
