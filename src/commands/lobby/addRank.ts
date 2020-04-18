import Command from "../../struct/Command";
import { Message } from 'discord.js';
import { Rank } from "../../entity/Rank.entity";

class AddRankCommand extends Command {
  constructor() {
    super("addRank", {
      aliases: ["ar", "addrank", "addr"],
      category: "lobby",
	  description: "Add Rank to the league",
	  args: [
		{
			id: 'role',
			type: 'roleMention'
		},
		{
			id: 'points',
			type: 'number',
			default: '0'
		}
	],
    });
  }

  async exec(message: Message, args: any) {
	// TODO Add role to database
	// TODO Add args for how many points to reach it
	// TODO Add per guild ranks

	if(args.role != undefined){
		const roleTest = await this.rankRepository.findOne({
			where: { 
				discordId: message.guild?.id,
				rankId: args.role.id
			}
		});

        if(roleTest?.rankId !== args.role.id){
          this.playerRepository.createQueryBuilder()
			.insert()
			.into(Rank)
			.values([{
				discordId: message.guild?.id, 
				rankId: args.role.id, 
				pointsRequired: args.points
			}])
			.execute();
			message.channel.send(this.client.successEmbed(`Successfully registered <@&${args.role.id}> for ${args.points} points`))
		} else {
			message.channel.send(this.client.errorEmbed("Rank already exists"))
		}
	}
  }
}

export default AddRankCommand;