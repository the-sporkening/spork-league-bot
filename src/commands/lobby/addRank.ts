import Command from "../../struct/Command";
import { Message } from 'discord.js';

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
			userPermissions(message) {
				if (!message.member?.roles.cache.map(role => { role.name == "Moderator" })) {
					return 'Moderator';
				}

				return null;
			}
		});
	}

	async exec(message: Message, args: any) {
		// TODO Check if user has league moderator role
		// if (args.role != undefined) {
		// 	const roleTest = await this.rankRepository.findOne({
		// 		where: {
		// 			discordId: message.guild?.id,
		// 			rankId: args.role.id
		// 		}
		// 	});

		// 	if (roleTest?.rankId !== args.role.id) {
		// 		this.playerRepository.createQueryBuilder()
		// 			.insert()
		// 			.into(Rank)
		// 			.values([{
		// 				discordId: message.guild?.id,
		// 				rankId: args.role.id,
		// 				pointsRequired: args.points
		// 			}])
		// 			.execute();
		// 		message.channel.send(this.client.successEmbed(`Successfully registered <@&${args.role.id}> for ${args.points} points`))
		// 	} else {
		// 		message.channel.send(this.client.errorEmbed("Rank already exists"))
		// 	}
		// }
	}
}

export default AddRankCommand;