"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Listener_1 = __importDefault(require("../../struct/Listener"));
class ReadyListener extends Listener_1.default {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    async exec() {
        var _a;
        const me = this.client.user;
        const guildSize = this.client.guilds.cache.size;
        this.client.logger.info(`Logged in as ${me === null || me === void 0 ? void 0 : me.tag} (ID: ${me === null || me === void 0 ? void 0 : me.id})`);
        me === null || me === void 0 ? void 0 : me.setActivity(`;r | ;register`, { type: 'LISTENING' });
        if (guildSize)
            this.client.logger.info(`Listening to ${guildSize === 1
                ? this.client.guilds.cache.first()
                : `${guildSize} Guilds`}`);
        else
            this.client.logger.info('Standby Mode');
        (_a = this.client) === null || _a === void 0 ? void 0 : _a.guilds.cache.map(guild => {
            this.guildRepository
                .findOne({ discordId: guild.id })
                .then(async (guildRec) => {
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
exports.default = ReadyListener;
//# sourceMappingURL=ready.js.map