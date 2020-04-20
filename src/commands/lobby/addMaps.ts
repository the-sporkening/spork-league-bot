import Command from "../../struct/Command";
import { Message } from 'discord.js';
import { Maps } from "../../entity/Maps.entity";

class AddMapsCommand extends Command {
  constructor() {
    super("addMap", {
      aliases: ["am", "addmap", "addm"],
      category: "lobby",
	  description: "Add Maps to the league",
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
        if (!message.member?.roles.cache.map(role => { role.name == "Moderator"})) {
            return 'Moderator';
        }

        return null;
    }
	});
  }

  async exec(message: Message, args: any) {
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
			.into(Maps)
			.values([{
				discordId: message.guild?.id, 
				rankId: args.role.id, 
				pointsRequired: args.points
			}])
			.execute();
			message.channel.send(this.client.successEmbed(`Successfully added <MAPS HERE>`))
		} else {
			message.channel.send(this.client.errorEmbed("Some kind of error"))
		}
	}
  }
}

export default AddMapsCommand;