import Listener from "../../struct/Listener";
import { Guild, GuildMember } from "discord.js";

class GuildMemberAddListener extends Listener {
  constructor() {
    super("guildMemberAdd", {
      event: "guildMemberAdd",
	  emitter: "client",
	  category: "client"
    });
  }
  async exec(guild: Guild) {
	  if(guild.id == this.client.config)
	guild.channels.cache.first()
  }
}

export default GuildMemberAddListener;