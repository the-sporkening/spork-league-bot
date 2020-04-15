"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Listener_1 = __importDefault(require("../../struct/Listener"));
const discord_js_1 = require("discord.js");
class GuildMemberAddListener extends Listener_1.default {
    constructor() {
        super("guildMemberAdd", {
            event: "guildMemberAdd",
            emitter: "client",
            category: "client"
        });
    }
    async exec(user) {
        if (user.guild.id == this.client.config.leagueServerID) {
            const exampleEmbed = new discord_js_1.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`Welcome <@${user.id}>`)
                .setDescription('Some description here')
                .addField('Inline field title', 'Some value here', true)
                .setImage('https://i.imgur.com/wSTFkRM.png')
                .setTimestamp()
                .setFooter(this.client.config.botVersion);
        }
        // guild.channels.cache.first()
    }
}
exports.default = GuildMemberAddListener;
//# sourceMappingURL=guildMemberAdd.js.map