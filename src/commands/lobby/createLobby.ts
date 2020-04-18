import Command from "../../struct/Command";
import { Message } from "discord.js";
import { Lobby } from '../../entity/Lobby.entity';

class CreateLobbyCommand extends Command {
  constructor() {
    super("cl", {
      aliases: ["cl"],
      category: "general",
      description: "Create Lobby Channel"
    });
  }

  async exec(message: Message) {
    // TODO Create multiple lobby types
    // let lobbyRecord = await this.lobbyRepository.findOne({
    //   where: { discordId: message.guild?.id },
    // });
    // if (lobbyRecord) {

    // }
    // Create a spork league lobby category
    await message.guild?.channels.create('Spork League', { type: "category", reason: 'Created league channel' })
      .then(category => {
        // TODO Check if guild is patron
        // TODO Check if guild has 1 lobby
          // Save lobby category to lobby record
        this.lobbyRepository.createQueryBuilder()
        .insert()
        .into(Lobby)
        .values([{discordId: category.guild.id, categoryId: category.id}])
        .execute();

        category.guild.channels.create("lobby", {parent: category.id, type: "text"})
        .then(channel => {
          // Save lobby text channel to lobby record
          this.lobbyRepository.createQueryBuilder()
          .update(Lobby)
          .set({lobbyId: channel.id})
          .where("categoryId = :categoryId", { categoryId: category.id })
          .execute();
          this.client.delay(200);
        })
        category.guild.channels.create("Waiting Room", {parent: category.id, type: "voice"})
        .then(channel => {
          // Save Voice Waiting room to lobby record
          this.lobbyRepository.createQueryBuilder()
          .update(Lobby)
          .set({waitingRoomId: channel.id})
          .where("categoryId = :categoryId", { categoryId: category.id })
          .execute();
          this.client.delay(200);
        })
        let channels = category.children.size;
        this.client.logger.info(`Created lobby record for ${message.guild?.id} with ${channels} channels`);
    
        // 
    
        // this.lobbyRepository.save(lobbyRecord);
      })
      .catch(console.error);
    return message.channel.send("Created Lobby!");
  }
}

export default CreateLobbyCommand;

