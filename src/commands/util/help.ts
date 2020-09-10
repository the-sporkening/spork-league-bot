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
    // const command = args.command || this;
    // const usage = await command.getUsage(this.client.options.defaultPrefix);

    // if (args.command) {
    //     return message.channel.send(this.client.embed(usage));
    // } else {
    //     const command_list = this.client.commandHandler.modules.array().filter(command => command.showInHelp && !command.ownerOnly).map(command => {
    //         return `\`${first(command.aliases)}\``;
    //     });

    //     return message.channel.send(this.client.embed(usage, `List of commands: ${command_list.join(', ')}`);
    // }
  }
}

export default HelpCommand;