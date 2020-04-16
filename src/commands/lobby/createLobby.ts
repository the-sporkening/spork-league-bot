import Command from "../../struct/Command";
import { Message } from "discord.js";

class CreateLobbyCommand extends Command {
  constructor() {
    super("cl", {
      aliases: ["cl"],
      category: "general",
      description: "Create Lobby Channel"
    });
  }

  async exec(message: Message) {
    // TODO Check if cmd is on main server
    // TODO Create multiple lobby types
    let lobbyRecord = this.lobbyRepository.findOne({
      where: { discordId: message.guild?.id },
    });
    if (lobbyRecord) return;
    // Create a spork league lobby channel
    await message.guild?.channels.create('Spork League', { type: "category", reason: 'Created main league channel' })
      .then(category => {
        category.guild.channels.create("lobby", {parent: category.id, type: "text"})
        .then(channel => {

        })
        category.guild.channels.create("Waiting Room", {parent: category.id, type: "voice"})
        .then(channel => {
          
        })
    
        this.client.logger.info(`Created lobby record for ${message.guild?.id}`);
    
        let lobbyRecord = this.lobbyRepository.create({discordId: message.guild?.id});
    
        this.lobbyRepository.save(lobbyRecord);
      })
      .catch(console.error);
    return message.channel.send("Created Lobby!");
  }
}

export default CreateLobbyCommand;