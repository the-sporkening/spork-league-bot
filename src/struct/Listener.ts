import { Listener, ListenerOptions, AkairoClient } from 'discord-akairo';
import client from "../bot";
import { Guild } from "../entity/Guild.entity";
import { Repository, getRepository } from "typeorm";

export default class SporkLeagueListener extends Listener {

  guildRepository: Repository<Guild>;

  constructor(id: string, options?: ListenerOptions) {
    super(id, options);
    this.client = client;
    this.guildRepository = getRepository(Guild);
  }
}
