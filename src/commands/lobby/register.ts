import Command from "../../struct/Command";
import { Message, MessageEmbed } from 'discord.js';
import { Player } from '../../entity/Player.entity';

class RegisterCommand extends Command {
  constructor() {
    super("register", {
      aliases: ["r", "register", "reg"],
      category: "lobby",
      description: "Register for the league"
    });
  }

  async exec(message: Message) {
    // TODO Assign role on user register
    const playerTest = await this.playerRepository.findOne({where: { userId: message.member?.id }});
        if(playerTest?.userId !== message.member?.id){
          this.playerRepository.createQueryBuilder()
          .insert()
          .into(Player)
          .values([{userId: message.member?.id}])
          .execute();
  
          let regEmbed = this.client.successEmbed("Registered!")
          message.channel.send(regEmbed);
        }else{
          let regEmbed = this.client.errorEmbed("You are already registered.")
          message.channel.send(regEmbed);
        }
  }
}

export default RegisterCommand;