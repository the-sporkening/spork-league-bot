import Command from "../../struct/Command";
import { Message } from "discord.js";
import { Lobby } from '../../entity/Lobby.entity';

class CreateLobbyCommand extends Command {
  constructor() {
    super("r", {
      aliases: ["r", "register", "reg"],
      category: "lobby",
      description: "Register for the league"
    });
  }

  async exec(message: Message) {
	this.playerRepository.create({userId: message.member?.id})
  }
}

export default CreateLobbyCommand;