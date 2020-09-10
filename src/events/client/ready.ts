import Listener from "../../struct/Listener";

class ReadyListener extends Listener {
  constructor() {
    super("ready", {
      emitter: "client",
	    event: "ready",
	    category: "client"
    });
  }

  async exec() {
	const me = this.client.user;
	const guildSize = this.client.guilds.cache.size;

	this.client.logger.info(`Logged in as ${me?.tag} (ID: ${me?.id})`);
  // me?.setActivity(`;r | ;register`, { type: 'LISTENING' });
  me?.setActivity(`COMING SOON.....✅`, { type: 'LISTENING' });

	if (guildSize)
	  this.client.logger.info(`Listening to ${guildSize === 1
		? this.client.guilds.cache.first()
		: `${guildSize} Guilds`}`);
	else this.client.logger.info('Standby Mode');
      // Create guild stuff for guilds that added bot when offline
    this.client?.guilds.cache.map(guild => {
      this.guildRepository
        .findOne({ discordId: guild.id })
        .then(async guildRec => {
          if (!guildRec) {
            const guildRecord = this.guildRepository.create({
              discordId: guild.id
            });
            this.guildRepository.save(guildRecord);
            this.client.logger.debug(`Created guild record for ${guild.id}`);
          }
        });
    });

    const prefix = this.client.options.defaultPrefix;

    // setInterval(async () => {
    //   this.client.user?.setActivity(`;register`, { type: "LISTENING" });
    // }, 15000);
  }
}

export default ReadyListener;