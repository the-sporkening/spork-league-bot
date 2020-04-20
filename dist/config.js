"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bot = {
    "ownerId": "113086797872918528",
    "defaultPrefix": ";",
    "botVersion": "Spork League 🏆 v0.0.1",
    "leagueServerID": "698639619117285397",
    "leagueInvite": "https://discord.gg/sBEDtGf",
    "leagueSite": "https://league.getsporked.lol",
    "token": process.env.DISCORD_TOKEN
};
exports.default = bot;
//# sourceMappingURL=config.js.map