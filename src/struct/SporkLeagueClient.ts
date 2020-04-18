import {
	AkairoClient,
	AkairoOptions,
	CommandHandler,
	ListenerHandler,
	InhibitorHandler,
  } from "discord-akairo";
  import {
	ClientOptions,
	Message,
	MessageEmbedOptions,
	MessageEmbed,
	Guild as DiscordGuild,
	GuildChannel,
	DiscordAPIError,
  } from "discord.js";
  import { createConnection, Connection, getRepository, getConnectionManager } from "typeorm";
  import { SnakeNamingStrategy } from "typeorm-naming-strategies";
  import path from "path";
  import dotenv from "dotenv";
  dotenv.config();
  import Logger from "../util/Logger";
  import config from "../config"

  interface ICustomClientOptions {
	ownerId: string;
	defaultPrefix: string;
	leagueInvite: string;
	leagueServerID: string;
	leagueSite: string;
	botVersion: string;
	token: string | undefined;
  }

  export default class SporkLeagueClient extends AkairoClient {
	options!: AkairoOptions & ClientOptions & ICustomClientOptions;
  
	public logger: Logger;
	public db!: Connection;
  
	public commandHandler!: CommandHandler;
	private listenerHandler!: ListenerHandler;
	// private inhibitorHandler!: InhibitorHandler;
  
	constructor(
	  options?: AkairoOptions & ClientOptions & ICustomClientOptions,
	  clientOptions?: ClientOptions
	) {
	  super(options, clientOptions);
	  this.options.leagueServerID = config.leagueServerID;
	  this.options.defaultPrefix = config.defaultPrefix;
	  this.options.leagueInvite = config.leagueInvite;
	  this.options.leagueSite = config.leagueSite;
	  this.options.botVersion = config.botVersion;
		
	  this.logger = new Logger();
	  this.init();
	}
  
	private async init() {
	try {
		this.db = await createConnection({
		  name: "default",
		  type: "postgres",
		  url: process.env.POSTGRES_URL,
		  synchronize: true,
		  entities: [path.join(__dirname, "..", "entity", "*.entity.{ts,js}")],
		  namingStrategy: new SnakeNamingStrategy(),
		});
	} catch (err) {
		// If AlreadyHasActiveConnectionError occurs, return already existent connection
		if (err.name === "AlreadyHasActiveConnectionError") {
		  const existentConn = getConnectionManager().get("default");
		  return existentConn;
	   }
  }
  
	//   setInterval(async () => {

	//   }, 1000 * 10);
	  this.logger.info("Connected to DB", { tag: "Database" });
	  this.logger.log("Loading Commands....", { tag: "Command" });
	  this.commandHandler = await new CommandHandler(this, {
		prefix: this.options.defaultPrefix,
		directory: path.join(__dirname, "..", "commands"),
		allowMention: true,
		blockBots: true,
		handleEdits: true,
		commandUtil: true
	  });
	  this.logger.info("Loaded Commands!", { tag: "Command" });

	  this.logger.log("Loading Listeners....", { tag: "Listener" });
	  this.listenerHandler = new ListenerHandler(this, {
		directory: path.join(__dirname, "..", "events"),
	  });
	  this.logger.info("Loaded Listeners!", { tag: "Listener" });
	//   this.logger.info("Loading Inhibitors....");
	//   this.inhibitorHandler = new InhibitorHandler(this, {
	// 	directory: path.join(__dirname, "..", "inhibitors"),
	//   });
  
	  this.commandHandler.useListenerHandler(this.listenerHandler);
	//   this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
	//   this.inhibitorHandler.loadAll();
	  this.listenerHandler.loadAll();
	  this.commandHandler.loadAll();
	}
  
	public embed(data: string | MessageEmbedOptions) {
	  if (typeof data === "string") {
		return new MessageEmbed().setDescription(data);
	  }
	  return new MessageEmbed(data);
	}
  
	public errorEmbed(description: string) {
	  return this.embed({ description, color: "#e53935" });
	}
  
	public successEmbed(description: string) {
	  return this.embed({ description, color: "#43a047" });
	}

	public delay(ms: number)
	{
	return new Promise(resolve => setTimeout(resolve, ms));
	}
  }
