import {
	AkairoClient,
	AkairoOptions,
	CommandHandler,
	ListenerHandler,
} from "discord-akairo";
import {
	ClientOptions,
	MessageEmbedOptions,
	MessageEmbed,
} from "discord.js";
import { createConnection, Connection, getConnectionManager } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import Logger from "../util/Logger";
import config from "../config"

import Redis from 'ioredis';

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
	public cache!: Redis.Redis;

	public commandHandler!: CommandHandler;
	private listenerHandler!: ListenerHandler;

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
		this.cache = new Redis(process.env.REDIS_URL);
		this.logger = new Logger();
		this.init();
	}

	private async init() {
		this.cache.on('connect' => {
			this.logger.info("Connected to Redis", { tag: "Redis" });
		})
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

		this.logger.info("Connected to DB", { tag: "Database" });
		this.logger.log("Loading Commands....", { tag: "Command" });
		this.commandHandler = new CommandHandler(this, {
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

		this.commandHandler.useListenerHandler(this.listenerHandler);
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

	public delay(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}
