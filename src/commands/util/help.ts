import Command from "../../struct/Command";
import ArgumentOptions from "../../struct/ArgumentOptions";
import { Message, MessageEmbed } from "discord.js";

class HelpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help"],
      category: "categories.bot",
      description: "commands.help.desc",
      args: [
        {
          id: "command",
          description: "commands.help.args.command.desc",
        },
      ],
    });
  }

  async exec(message: Message, args: any) {
	
  }
}

export default HelpCommand;