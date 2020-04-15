import Listener from "../../struct/Listener";
import { Guild, GuildMember } from "discord.js";

class GuildDeleteListener extends Listener {
  constructor() {
    super("guildDelete", {
      event: "guildDelete",
	  emitter: "client",
	  category: "client"
    });
  }
  async exec(guild: Guild) {
    let guildRecord = await this.guildRepository.findOne({
      where: { discordId: guild.id },
    });
    if (!guildRecord) return;
  }
}

export default GuildDeleteListener;