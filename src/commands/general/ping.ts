import { Command } from "discord-akairo";
import { Message } from "discord.js";

class PingCommand extends Command {
  constructor() {
    super("ping", {
      aliases: ["ping"],
      category: "general",
      description: "commands.ping.desc"
    });
  }

  async exec(message: Message) {
    return message.channel.send("pong!");
  }
}

export default PingCommand;