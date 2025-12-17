import { Client, GatewayIntentBits, ActivityType } from "discord.js";
import "dotenv/config";
import express from "express";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
  // Add these options for better connection stability
  ws: {
    properties: {
      browser: "Discord Client"
    }
  }
});

let statusInterval = null;

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
  console.log(`📊 Connected to ${client.guilds.cache.size} guilds`);

  const statuses = [
    // 🎯 AI & CHAT COMMANDS
    { name: "🤖 Chat with AI — /ask anything!", type: ActivityType.Playing },
    { name: "🎨 Personalize chat — /personalisechat", type: ActivityType.Watching },
    { name: "✨ Generate AI art — /imagine", type: ActivityType.Playing },

    // 🎵 MUSIC COMMANDS
    { name: "🎵 Play music — /play [song]", type: ActivityType.Listening },
    { name: "⏸️ Control playback — /pause /resume /skip", type: ActivityType.Listening },
    { name: "🎼 Manage queue — /queue /shuffle /loop", type: ActivityType.Listening },
    { name: "🎚️ Adjust volume — /volume [0-100]", type: ActivityType.Listening },
    { name: "📜 View now playing — /nowplaying", type: ActivityType.Listening },
    { name: "💾 Save playlists — /playlist", type: ActivityType.Listening },
    { name: "⏮️ Previous track — /previous", type: ActivityType.Listening },
    { name: "⏩ Seek position — /seek [time]", type: ActivityType.Listening },
    { name: "🗑️ Clear queue — /clear", type: ActivityType.Listening },
    { name: "❌ Remove track — /remove [position]", type: ActivityType.Listening },
    { name: "🛑 Stop music — /stop", type: ActivityType.Listening },

    // ⏰ REMINDERS & EVENTS
    { name: "⏰ Set reminders — /reminder", type: ActivityType.Playing },
    { name: "� Reminder dashboard — /reminderdashboard", type: ActivityType.Watching },
    { name: "🎪 WOS events info — /event", type: ActivityType.Playing },
    { name: "🎂 Set birthday — /birthday", type: ActivityType.Playing },

    // 🏰 ALLIANCE & GAME COMMANDS
    { name: "🏰 Alliance monitor — /alliancemonitor", type: ActivityType.Watching },
    { name: "📈 Alliance activity — /allianceactivity", type: ActivityType.Watching },
    { name: "⚙️ Alliance settings — /settings", type: ActivityType.Watching },
    { name: "🔄 Refresh data — /refresh", type: ActivityType.Playing },
    { name: "🎮 Player info — check stats", type: ActivityType.Playing },
    { name: "📅 Server age — /server_age", type: ActivityType.Watching },

    // 🎁 GIFT CODE COMMANDS
    { name: "🎁 Active gift codes — /giftcode", type: ActivityType.Playing },
    { name: "⚙️ Gift code settings — /giftcodesettings", type: ActivityType.Watching },
    { name: "🎯 Auto-redeem codes — configure now!", type: ActivityType.Playing },

    // 🌐 TRANSLATION COMMANDS
    { name: "� Auto translate — /autotranslatecreate", type: ActivityType.Watching },
    { name: "📝 Translation list — /autotranslatelist", type: ActivityType.Watching },
    { name: "✏️ Edit translation — /autotranslateedit", type: ActivityType.Watching },
    { name: "🔄 Toggle translation — /autotranslatetoggle", type: ActivityType.Watching },
    { name: "🗑️ Delete translation — /autotranslatedelete", type: ActivityType.Watching },

    // 👋 SERVER MANAGEMENT
    { name: "👋 Welcome messages — /welcome", type: ActivityType.Watching },
    { name: "�️ Remove welcome — /removewelcomechannel", type: ActivityType.Watching },
    { name: "🔧 Manage server — /manage", type: ActivityType.Playing },
    { name: "🏠 Main menu — /start", type: ActivityType.Playing },

    // 📊 STATISTICS & INFO
    { name: "📊 Server stats — /serverstats", type: ActivityType.Watching },
    { name: "🔥 Most active users — /mostactive", type: ActivityType.Watching },
    { name: "💾 Storage status — /storage_status", type: ActivityType.Watching },

    // 🔍 UTILITIES
    { name: "🔍 Web search — /websearch", type: ActivityType.Playing },
    { name: "🎲 Roll dice — /dice", type: ActivityType.Playing },
    { name: "⚔️ Dice battle — /dicebattle", type: ActivityType.Playing },
    { name: "❓ Help & commands — /help", type: ActivityType.Watching },

    // 🎯 FEATURED HIGHLIGHTS (appear more often)
    { name: "🌟 Start here — /start menu", type: ActivityType.Playing },
    { name: "💬 Ask me anything — /ask", type: ActivityType.Listening },
    { name: "🎵 Music player ready — /play", type: ActivityType.Listening },
    { name: "⏰ Never miss events — /reminder", type: ActivityType.Playing },
    { name: "🎁 Free rewards — /giftcode", type: ActivityType.Playing },
    { name: "🏰 Track alliance — /alliancemonitor", type: ActivityType.Watching },
    { name: "✨ AI image generator — /imagine", type: ActivityType.Playing },
    { name: "🌐 Auto translate chats — setup now!", type: ActivityType.Watching },
    { name: "📊 Server insights — /serverstats", type: ActivityType.Watching },
    { name: "🤖 Full command list — /help", type: ActivityType.Watching },
  ];

  let i = 0;

  // Set initial status immediately
  const setStatus = () => {
    try {
      if (!client.user) {
        console.warn("⚠️ Client user not available, skipping status update");
        return;
      }

      const status = statuses[i];
      client.user.setActivity(status);
      console.log(`🔄 Status updated [${i + 1}/${statuses.length}]: ${status.name}`);
      i = (i + 1) % statuses.length; // Loop back to 0 when reaching the end
    } catch (error) {
      console.error("❌ Error setting status:", error);
    }
  };

  // Set initial status
  setStatus();

  // Clear any existing interval
  if (statusInterval) {
    clearInterval(statusInterval);
  }

  // Update status every 15 seconds in an endless loop (increased from 10s to avoid rate limiting)
  statusInterval = setInterval(setStatus, 15000);

  console.log(`✅ Status rotation started! Cycling through ${statuses.length} statuses every 15 seconds.`);
});

// Handle warnings
client.on("warn", (info) => {
  console.warn("⚠️ Discord Client Warning:", info);
});

// Handle errors
client.on("error", (error) => {
  console.error("❌ Discord Client Error:", error);
});

// Handle disconnect
client.on("disconnect", () => {
  console.warn("⚠️ Discord Client Disconnected! Attempting to reconnect...");
  if (statusInterval) {
    clearInterval(statusInterval);
    statusInterval = null;
  }
});

// Handle reconnecting
client.on("reconnecting", () => {
  console.log("🔄 Discord Client Reconnecting...");
});

// Handle resume
client.on("resume", (replayed) => {
  console.log(`✅ Discord Client Resumed! Replayed ${replayed} events.`);
});

// Handle shard errors
client.on("shardError", (error, shardId) => {
  console.error(`❌ Shard ${shardId} Error:`, error);
});

// Handle shard disconnect
client.on("shardDisconnect", (event, shardId) => {
  console.warn(`⚠️ Shard ${shardId} Disconnected:`, event);
});

// Handle shard reconnecting
client.on("shardReconnecting", (shardId) => {
  console.log(`🔄 Shard ${shardId} Reconnecting...`);
});

// Handle shard resume
client.on("shardResume", (shardId, replayed) => {
  console.log(`✅ Shard ${shardId} Resumed! Replayed ${replayed} events.`);
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN).catch((error) => {
  console.error("❌ Failed to login to Discord:", error);
  process.exit(1);
});

// --- Keep Alive for Render Free Plan ---
const app = express();

app.get("/", (req, res) => {
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);

  res.json({
    status: "✅ Bot is running",
    uptime: `${hours}h ${minutes}m ${seconds}s`,
    guilds: client.guilds?.cache?.size || 0,
    user: client.user?.tag || "Not logged in"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: client.isReady() ? "healthy" : "unhealthy",
    ready: client.isReady(),
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Keep-alive server started on port ${PORT}`);
});
