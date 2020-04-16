import Listener from "../../struct/Listener";
import { GuildMember } from "discord.js";
import { MessageEmbed } from "discord.js";

class GuildMemberAddListener extends Listener {
  constructor() {
    super("guildMemberAdd", {
      event: "guildMemberAdd",
	  emitter: "client",
	  category: "client"
    });
  }
  async exec(user: GuildMember) {
	//   if(user.guild.id == this.client.config.leagueServerID){
	// 	const exampleEmbed = new MessageEmbed()
	// 	  .setColor('#0099ff')
	// 	  .setTitle(`Welcome <@${user.id}>`)
	// 	  .setDescription('Some description here')

	// 	  .addField('Inline field title', 'Some value here', true)
	// 	  .setImage('https://i.imgur.com/wSTFkRM.png')
	// 	  .setTimestamp()
	// 	  .setFooter(this.client.config.botVersion);
		  
	//   }
	// guild.channels.cache.first()
  }
}

export default GuildMemberAddListener;