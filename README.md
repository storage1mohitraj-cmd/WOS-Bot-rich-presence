# 🤖 WOS Bot Rich Presence

A professional Discord bot presence system that showcases all available commands in an attractive, rotating display.

## 🌟 Features

- **64 Rotating Statuses**: Comprehensive showcase of all bot commands
- **Organized Categories**: Commands grouped by functionality
- **Professional Design**: Emoji indicators and clear descriptions
- **Smart Rotation**: Featured commands appear more frequently
- **Activity Types**: Proper use of Playing, Watching, and Listening statuses

## 📂 Project Structure

```
Bot-presence/
├── index.js              # Main bot presence script
├── package.json          # Node.js dependencies
├── package-lock.json     # Dependency lock file
├── node_modules/         # Installed packages
├── .git/                 # Git repository
├── UPDATE_SUMMARY.md     # Update changelog
├── COMMAND_REFERENCE.md  # Complete command documentation
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Discord Bot Token
- npm or yarn

### Installation

1. **Clone or navigate to this directory**
   ```bash
   cd Bot-presence
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file:
   ```env
   DISCORD_TOKEN=your_bot_token_here
   PORT=3000
   ```

4. **Run the bot**
   ```bash
   npm start
   ```

## 📋 Status Categories

The bot presence rotates through these categories:

### 🎯 AI & Chat Commands (3 statuses)
- Chat with AI
- Personalize chat experience
- Generate AI art

### 🎵 Music Commands (11 statuses)
- Play, pause, resume, skip
- Queue management
- Volume control
- Playlist features

### ⏰ Reminders & Events (4 statuses)
- Set reminders
- Reminder dashboard
- WOS events
- Birthday system

### 🏰 Alliance & Game (6 statuses)
- Alliance monitoring
- Activity tracking
- Settings management
- Server age

### 🎁 Gift Codes (3 statuses)
- Active codes
- Auto-redeem settings
- Code management

### 🌐 Translation (5 statuses)
- Auto-translate setup
- Translation management
- Multi-language support

### 👋 Server Management (4 statuses)
- Welcome messages
- Server settings
- Main menu

### 📊 Statistics (3 statuses)
- Server stats
- Active users
- Storage status

### 🔍 Utilities (4 statuses)
- Web search
- Dice games
- Help system

### 🎯 Featured Highlights (10 statuses)
- Most important commands
- Appear more frequently
- User-friendly descriptions

## ⚙️ Configuration

### Rotation Speed
Default: 10 seconds per status
```javascript
setInterval(() => {
  // ... rotation logic
}, 10000); // Change this value (in milliseconds)
```

### Adding New Statuses
Edit the `statuses` array in `index.js`:
```javascript
const statuses = [
  { name: "Your status text", type: ActivityType.Playing },
  // Add more statuses here
];
```

### Activity Types
- `ActivityType.Playing` - "Playing [status]"
- `ActivityType.Watching` - "Watching [status]"
- `ActivityType.Listening` - "Listening to [status]"
- `ActivityType.Streaming` - "Streaming [status]"
- `ActivityType.Competing` - "Competing in [status]"

## 🔄 Keep-Alive Server

The bot includes an Express server for platforms like Render:
```javascript
const app = express();
app.get("/", (req, res) => res.send("Bot is running ✅"));
app.listen(process.env.PORT || 3000);
```

This prevents the bot from sleeping on free hosting tiers.

## 📊 Status Breakdown

| Category | Count | Percentage |
|----------|-------|------------|
| Music | 11 | 17.2% |
| Featured | 10 | 15.6% |
| Alliance & Game | 6 | 9.4% |
| Translation | 5 | 7.8% |
| Reminders & Events | 4 | 6.3% |
| Server Management | 4 | 6.3% |
| Utilities | 4 | 6.3% |
| AI & Chat | 3 | 4.7% |
| Gift Codes | 3 | 4.7% |
| Statistics | 3 | 4.7% |
| **Total** | **64** | **100%** |

## 🎨 Emoji Guide

- 🎯 - Featured/Important
- 🤖 - AI/Bot features
- 🎵 - Music related
- ⏰ - Time/Reminders
- 🏰 - Alliance/Game
- 🎁 - Rewards/Gifts
- 🌐 - Translation/Global
- 👋 - Welcome/Social
- 📊 - Statistics/Data
- 🔍 - Search/Utilities

## 🚀 Deployment

### Render.com
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variable: `DISCORD_TOKEN`

### Heroku
1. Create a new app
2. Connect to GitHub
3. Add buildpack: `heroku/nodejs`
4. Set config vars: `DISCORD_TOKEN`
5. Deploy branch

### Railway
1. Create new project
2. Deploy from GitHub
3. Add environment variables
4. Deploy

## 📝 Maintenance

### Updating Statuses
1. Edit `index.js`
2. Modify the `statuses` array
3. Commit and push changes
4. Restart the bot

### Adding New Commands
When you add new commands to your main bot:
1. Add corresponding status to `index.js`
2. Update `COMMAND_REFERENCE.md`
3. Update `UPDATE_SUMMARY.md`

## 🐛 Troubleshooting

### Bot not showing status
- Check if `DISCORD_TOKEN` is correct
- Verify bot has proper intents
- Check console for errors

### Status not rotating
- Verify `setInterval` is running
- Check for JavaScript errors
- Ensure bot is connected

### Keep-alive server not working
- Check `PORT` environment variable
- Verify Express is installed
- Check firewall settings

## 📚 Resources

- [Discord.js Documentation](https://discord.js.org/)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Node.js Documentation](https://nodejs.org/docs/)

## 🤝 Contributing

To contribute to the bot presence:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the WOS Discord Bot ecosystem.

## 🔗 Related

- **Main Bot Repository**: [STARK-whiteout survival bot](../)
- **Command Reference**: [COMMAND_REFERENCE.md](./COMMAND_REFERENCE.md)
- **Update Log**: [UPDATE_SUMMARY.md](./UPDATE_SUMMARY.md)

---

**Version**: 2.0  
**Last Updated**: December 17, 2025  
**Status Count**: 64 rotating statuses  
**Categories**: 10 organized categories
