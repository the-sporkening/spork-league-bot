"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Logger_1 = __importDefault(require("../util/Logger"));
const config_1 = __importDefault(require("../config"));
class SporkLeagueClient extends discord_akairo_1.AkairoClient {
    // private inhibitorHandler!: InhibitorHandler;
    constructor(options, clientOptions) {
        super(options, clientOptions);
        this.options.leagueServerID = config_1.default.leagueServerID;
        this.options.defaultPrefix = config_1.default.defaultPrefix;
        this.options.leagueInvite = config_1.default.leagueInvite;
        this.options.leagueSite = config_1.default.leagueSite;
        this.options.botVersion = config_1.default.botVersion;
        this.logger = new Logger_1.default();
        this.init();
    }
    async init() {
        try {
            this.db = await typeorm_1.createConnection({
                name: "default",
                type: "postgres",
                url: process.env.POSTGRES_URL,
                synchronize: true,
                entities: [path_1.default.join(__dirname, "..", "entity", "*.entity.{ts,js}")],
                namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
            });
        }
        catch (err) {
            // If AlreadyHasActiveConnectionError occurs, return already existent connection
            if (err.name === "AlreadyHasActiveConnectionError") {
                const existentConn = typeorm_1.getConnectionManager().get("default");
                return existentConn;
            }
        }
        //   setInterval(async () => {
        //   }, 1000 * 10);
        this.logger.info("Connected to DB", { tag: "Database" });
        this.logger.log("Loading Commands....", { tag: "Command" });
        this.commandHandler = await new discord_akairo_1.CommandHandler(this, {
            prefix: this.options.defaultPrefix,
            directory: path_1.default.join(__dirname, "..", "commands"),
            allowMention: true,
            blockBots: true,
            handleEdits: true,
            commandUtil: true
        });
        this.logger.info("Loaded Commands!", { tag: "Command" });
        this.logger.log("Loading Listeners....", { tag: "Listener" });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.default.join(__dirname, "..", "events"),
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
    embed(data) {
        if (typeof data === "string") {
            return new discord_js_1.MessageEmbed().setDescription(data);
        }
        return new discord_js_1.MessageEmbed(data);
    }
    errorEmbed(description) {
        return this.embed({ description, color: "#e53935" });
    }
    successEmbed(description) {
        return this.embed({ description, color: "#43a047" });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.default = SporkLeagueClient;
//# sourceMappingURL=SporkLeagueClient.js.map