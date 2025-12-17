# Quick Deployment Guide

## 🚀 Deploy to Render

### Step 1: Push Changes to GitHub
```bash
cd "f:\STARK-whiteout survival bot\Bot-presence"
git add .
git commit -m "Enhanced bot presence with error handling and reconnection logic"
git push origin main
```

### Step 2: Render Auto-Deploy
Render will automatically detect the changes and redeploy. You'll see in the logs:
- `==> Running build command 'npm install'...`
- `==> Build successful 🎉`
- `==> Your service is live 🎉`

### Step 3: Verify Deployment
1. **Check Status Page**: https://wos-bot-rich-presence-vosg.onrender.com/
2. **Check Health**: https://wos-bot-rich-presence-vosg.onrender.com/health
3. **Monitor Logs** in Render dashboard

## 📊 What You'll See in Logs

### Startup:
```
✅ Logged in as YourBot#1234
📊 Connected to 5 guilds
✅ Status rotation started! Cycling through 53 statuses every 15 seconds.
🌐 Keep-alive server started on port 10000
```

### During Operation:
```
🔄 Status updated [1/53]: 🤖 Chat with AI — /ask anything!
🔄 Status updated [2/53]: 🎨 Personalize chat — /personalisechat
🔄 Status updated [3/53]: ✨ Generate AI art — /imagine
...
```

### If Disconnection Occurs:
```
⚠️ Discord Client Disconnected! Attempting to reconnect...
🔄 Discord Client Reconnecting...
✅ Discord Client Resumed! Replayed 0 events.
✅ Status rotation started! Cycling through 53 statuses every 15 seconds.
```

## 🔧 Key Improvements

1. **15-second interval** (was 10s) - Prevents rate limiting
2. **Auto-reconnection** - Bot recovers from disconnections
3. **Error logging** - See exactly what's happening
4. **Health endpoints** - Monitor bot status externally
5. **Interval cleanup** - Prevents memory leaks

## ✅ Success Indicators

- ✅ Status updates every 15 seconds
- ✅ No error messages in logs
- ✅ `/health` shows `"ready": true`
- ✅ Uptime increasing steadily
- ✅ Rich presence visible in Discord

## ⚠️ Troubleshooting

### If presence still stops:
1. Check `/health` endpoint - is `ready` false?
2. Review Render logs for errors
3. Verify Discord token is valid
4. Check Discord API status: https://discordstatus.com/
5. Ensure Render service isn't sleeping (free tier limitation)

### If you see frequent reconnections:
- This is normal for free tier services
- The bot will automatically recover
- Consider upgrading Render plan for better stability

## 📞 Monitoring Commands

```bash
# Check if bot is running
curl https://wos-bot-rich-presence-vosg.onrender.com/

# Check bot health
curl https://wos-bot-rich-presence-vosg.onrender.com/health

# View Render logs (in dashboard or CLI)
render logs -s wos-bot-rich-presence-vosg
```
