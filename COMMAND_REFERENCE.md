# 🎮 WOS Discord Bot - Complete Command Reference

## 📋 Table of Contents
1. [AI & Chat Commands](#ai--chat-commands)
2. [Music Player Commands](#music-player-commands)
3. [Reminders & Events](#reminders--events)
4. [Alliance & Game Management](#alliance--game-management)
5. [Gift Code System](#gift-code-system)
6. [Auto Translation](#auto-translation)
7. [Server Management](#server-management)
8. [Statistics & Analytics](#statistics--analytics)
9. [Utilities](#utilities)
10. [Admin Commands](#admin-commands)

---

## 🎯 AI & Chat Commands

### `/ask`
**Description**: Chat with AI about anything - Whiteout Survival or any topic  
**Usage**: `/ask [your question]`  
**Example**: `/ask What's the best furnace strategy?`

### `/personalisechat`
**Description**: Personalize your chat experience with the bot  
**Usage**: `/personalisechat`  
**Features**: Set pronouns, personality traits, and game info

### `/imagine`
**Description**: Generate AI images using advanced AI  
**Usage**: `/imagine [description]`  
**Example**: `/imagine a futuristic ice castle`

---

## 🎵 Music Player Commands

### `/play`
**Description**: Play a song or add it to the queue  
**Usage**: `/play [song name or URL]`

### `/pause`
**Description**: Pause the current track  
**Usage**: `/pause`

### `/resume`
**Description**: Resume playback  
**Usage**: `/resume`

### `/skip`
**Description**: Skip the current track  
**Usage**: `/skip`

### `/stop`
**Description**: Stop playback and disconnect  
**Usage**: `/stop`

### `/nowplaying`
**Description**: Show currently playing track  
**Usage**: `/nowplaying`

### `/queue`
**Description**: Show the music queue  
**Usage**: `/queue`

### `/volume`
**Description**: Set playback volume (0-100)  
**Usage**: `/volume [0-100]`

### `/shuffle`
**Description**: Shuffle the queue  
**Usage**: `/shuffle`

### `/loop`
**Description**: Set loop mode (off/track/queue)  
**Usage**: `/loop [mode]`

### `/clear`
**Description**: Clear the entire queue  
**Usage**: `/clear`

### `/remove`
**Description**: Remove a specific track from queue  
**Usage**: `/remove [position]`

### `/seek`
**Description**: Seek to a position in the current track  
**Usage**: `/seek [time]`

### `/previous`
**Description**: Play the previous track from history  
**Usage**: `/previous`

### `/playlist`
**Description**: Manage your saved playlists  
**Usage**: `/playlist`

---

## ⏰ Reminders & Events

### `/reminder`
**Description**: Set a reminder with time and message  
**Usage**: `/reminder`  
**Features**: Supports recurring reminders, custom images, mentions

### `/reminderdashboard`
**Description**: Interactive reminder management dashboard  
**Usage**: `/reminderdashboard`  
**Features**: List, delete, and manage all your reminders

### `/birthday`
**Description**: Set your birthday for automatic wishes  
**Usage**: `/birthday`

### `/event`
**Description**: Get information about Whiteout Survival events  
**Usage**: `/event`

---

## 🏰 Alliance & Game Management

### `/alliancemonitor`
**Description**: Alliance monitoring dashboard with quick access to all features  
**Usage**: `/alliancemonitor`  
**Features**: Track name changes, furnace levels, avatar changes

### `/allianceactivity`
**Description**: Show player growth based on furnace changes (Last 7 Days)  
**Usage**: `/allianceactivity`

### `/settings`
**Description**: Open alliance settings menu  
**Usage**: `/settings`

### `/refresh`
**Description**: Clear cached alliance data and reload from Google Sheets  
**Usage**: `/refresh`

### `/server_age`
**Description**: Check your server age and upcoming milestones  
**Usage**: `/server_age`

---

## 🎁 Gift Code System

### `/giftcode`
**Description**: Show all active gift codes  
**Usage**: `/giftcode`  
**Features**: Displays codes from WOS API and website

### `/giftcodesettings`
**Description**: Interactive gift code settings dashboard  
**Usage**: `/giftcodesettings`  
**Features**: Configure auto-redeem, manage members, set channels

---

## 🌐 Auto Translation

### `/autotranslatecreate`
**Description**: Create automatic translation between channels  
**Usage**: `/autotranslatecreate`

### `/autotranslatelist`
**Description**: View all auto-translate configurations  
**Usage**: `/autotranslatelist`

### `/autotranslateedit`
**Description**: Edit an existing auto-translate configuration  
**Usage**: `/autotranslateedit`

### `/autotranslatetoggle`
**Description**: Enable or disable an auto-translate configuration  
**Usage**: `/autotranslatetoggle`

### `/autotranslatedelete`
**Description**: Delete an auto-translate configuration  
**Usage**: `/autotranslatedelete`

---

## 👋 Server Management

### `/start`
**Description**: Show the main interactive menu  
**Usage**: `/start`  
**Features**: Access to all major bot features

### `/manage`
**Description**: Quick access to management operations (Admin only)  
**Usage**: `/manage`

### `/welcome`
**Description**: Configure welcome message settings  
**Usage**: `/welcome`  
**Features**: Custom messages, images, and channel selection

### `/removewelcomechannel`
**Description**: Remove the welcome channel configuration  
**Usage**: `/removewelcomechannel`

---

## 📊 Statistics & Analytics

### `/serverstats`
**Description**: Show detailed server statistics  
**Usage**: `/serverstats`  
**Features**: Member count, channels, roles, activity metrics

### `/mostactive`
**Description**: Show top 3 most active users with activity graph  
**Usage**: `/mostactive`  
**Features**: Based on messages in the current month

### `/storage_status`
**Description**: Show which reminder storage is active  
**Usage**: `/storage_status`

---

## 🔍 Utilities

### `/websearch`
**Description**: Search the web with powerful, organized results  
**Usage**: `/websearch [query]`

### `/dice`
**Description**: Roll a six-sided dice  
**Usage**: `/dice`

### `/dicebattle`
**Description**: Challenge someone to a dice battle  
**Usage**: `/dicebattle [@user]`

### `/help`
**Description**: Show information about available commands  
**Usage**: `/help`  
**Features**: Interactive menu with categorized commands

---

## 🔐 Admin Commands

### `/initcredentials`
**Description**: Initialize system credentials (Owner Only)  
**Usage**: `/initcredentials`  
**Access**: Bot owner only

### `/syncdata`
**Description**: Synchronize data cache from remote source (Global Admin)  
**Usage**: `/syncdata [server_id] [channel_id]`  
**Access**: Global administrators only

### `/checkauth`
**Description**: Verify authentication scope and permissions (Global Admin)  
**Usage**: `/checkauth`  
**Access**: Global administrators only

### `/verifyscope`
**Description**: Verify available data streams in scope (Global Admin)  
**Usage**: `/verifyscope [server_id]`  
**Access**: Global administrators only

---

## 🎯 Quick Start Guide

### For New Users:
1. Start with `/start` to see the main menu
2. Use `/help` to explore all commands
3. Try `/ask` to chat with the AI
4. Set up `/reminder` for important events

### For Alliance Leaders:
1. Configure `/alliancemonitor` to track members
2. Use `/giftcodesettings` for auto-redeem
3. Set up `/welcome` for new members
4. Check `/allianceactivity` regularly

### For Music Lovers:
1. Use `/play` to start music
2. Manage with `/queue`, `/skip`, `/pause`
3. Save favorites with `/playlist`
4. Adjust `/volume` as needed

---

## 📝 Notes

- All commands use Discord's slash command system (/)
- Most commands have interactive menus for easy use
- Admin commands require proper permissions
- Music commands require voice channel access
- Some features require MongoDB configuration

---

**Bot Version**: Latest  
**Last Updated**: December 17, 2025  
**Total Commands**: 50+
