import { Command } from "discord-akairo";
import { Message } from "discord.js";

class CreateLobbyCommand extends Command {
  constructor() {
    super("cl", {
      aliases: ["cl"],
      category: "categories.bot",
      description: "Create Lobby Channel"
    });
  }

  async exec(message: Message) {
    return message.channel.send("pong!");
  }
}

export default CreateLobbyCommand;