import Command from "../../struct/Command";
import { Message } from 'discord.js';
import { AdvancedConsoleLogger } from "typeorm";

class RemoveRankCommand extends Command {
  constructor() {
    super("removeRank", {
      aliases: ["rr", "removerank", "remr"],
      category: "lobby",
	  description: "Remove a Rank from the league",
	  args: [
		{
			id: 'role',
			type: 'roleMention'
		}
	],
    });
  }

  async exec(message: Message, args: any) {
	// TODO Add role to database
	// TODO Add args for how many points to reach it
	// TODO Add per guild ranks
	const roleTest = await this.rankRepository.findOne({
		where: {
			rankId: args.role.id
		}
	});
	console.log(roleTest);
	if(roleTest !== undefined){
		// if(args.role.id) {
			this.rankRepository.delete({
				discordId: message.guild?.id,
				rankId: args.role.id
			})
			message.channel.send(this.client.successEmbed(`Successfully removed ${args.role.name}`))
		// }
	} else {
		message.channel.send(this.client.errorEmbed("Rank not found"))
	}
  }
}

export default RemoveRankCommand;