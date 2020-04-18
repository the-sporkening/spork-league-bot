import Command from "../../struct/Command";
import { Message, MessageEmbed } from 'discord.js';
import { Player } from '../../entity/Player.entity';

class QueueCommand extends Command {
  constructor() {
    super("queue", {
      aliases: ["q", "queue", "join", "j"],
      category: "lobby",
      description: "Join the lobby queue"
    });
  }

  async exec(message: Message) {
	// TODO Add user to lobby queue
	// TODO When lobby gets full start Matchmaking
	// TODO Select amount of players based on max team size
  }
}

export default QueueCommand;