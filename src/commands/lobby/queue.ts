import Command from "../../struct/Command";
import { Message } from 'discord.js';
import { Queue } from './../../entity/Queue.entity';

class QueueCommand extends Command {
  constructor() {
    super("queue", {
      aliases: ["q", "queue", "join", "j"],
      category: "lobby",
      description: "Join the lobby queue"
    });
  }

  async exec(message: Message) {
    // TODO When lobby gets full start Matchmaking
    // TODO Select amount of queues based on max team size
    // TODO check if the user is queue banned
    // TODO check if command is being sent in the lobby channel

    // Check if user is in queue
    const queueTest = await this.queueRepository.findOne({
      where: { 
        userId: message.member?.id
      }
    });
    // Amount of users in queue
    const queueCount = await this.queueRepository.findAndCount({
      where: { 
        lobbyId: message.channel?.id 
      }
    });
    if(queueTest?.userId !== message.member?.id){
      // Add user to queue if not already in one
      await this.queueRepository.createQueryBuilder()
      .insert()
      .into(Queue)
      .values([{discordId: message.guild?.id, lobbyId: message.channel?.id, userId: message.member?.id}])
      .execute();

      // Queue Embed
      let regEmbed = this.client.successEmbed(`<@${message.member?.id}> joined the queue **[ ${queueCount[1] + 1} / 10 ]**`)
      message.channel.send(regEmbed);
    }else{
      // Delete user if in queue already
      this.queueRepository.createQueryBuilder()
      .delete()
      .from(Queue)
      .where("lobbyId = :lobbyId", { lobbyId: message.channel.id })
      .execute();
      let regEmbed = this.client.errorEmbed("You have been removed from the queue")
      message.channel.send(regEmbed);
    }
  }
}

export default QueueCommand;