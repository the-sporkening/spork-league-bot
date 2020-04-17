import Command from "../../struct/Command";
import { Message } from "discord.js";

class ClearChannelsCommand extends Command {
  constructor() {
    super("dcc", {
      aliases: ["dcc"],
      category: "dev",
      description: "Clear all channels except lobby"
    });
  }

  async exec(message: Message) {
	let channels = message.guild?.channels.cache;
	channels?.forEach(channel => {
		channel.delete()
	})
	await message.guild?.channels.create("lobby", {type: "text"})
  }
}

export default ClearChannelsCommand;