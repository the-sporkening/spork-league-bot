import { ShardingManager } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
// const path = require.resolve("./bot");
try {
  const manager = new ShardingManager(path.join("dist", "bot.js"), {
    totalShards: 1,
    mode: "process"
  });

  manager.spawn();
  manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
} catch (e) {
  /* tslint:disable */
  console.error(e);
  process.exit(1);
}