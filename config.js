'use strict'

module.exports = {
    appID: 730, // 730 - CS:GO
    contextID: 2, // ContextID
    bots: {
        bot_1: {
            siteName: 'Bot 1',  // Will be displayed under the "All bots" tab e.g. "Keys Only"
            accountName: 'corrupttrade',    // bot_1 username
            password: 'Huskyman1',       // bot_1  password
            twoFactorCode: 'ITsqAM9pmnfgMSm/7Q35ENqj1G8=',  // shared_secret value
            identitySecret: 'CRfhVGJfdeftSr3B2DwBe9McOG8=', // identity_secret value
            steamID64: '76561197960287930',  // SteamID64 of bot account can be found here: "https://steamid.io/"
            personaName: 'Corrupt Trades BOT #1',   // Nickname for bot account, will change on restart
        },
    },
    steamApiKey: '77AE9636BE55B0D354476A1700A9F0BE',    // Your Steam API key, get it here: https://steamcommunity.com/dev/apikey
    SteamApisKey: 'ugRqjlNHsjAs2PcnV25RSRwYvC8',   // Your SteamApis.com key, get it here: https://steamapis.com
    SteamApisCompactValue: 'safe_ts.last_30d', // Use safe price calculated from 30 days of data, more info: https://steamapis.com/developers (Market Items - Optional Query Parameters "compact_value")
    site: {
        header: 'Corrupt.rip', // Name/header/title of website. Prefix for  <title></title> (For more: /index.html line: 9)
        steamGroup: '#',
        copyrights: 'Copyright © corrupt.rip 2017',  // Copyright text
    },
    domain: 'theonlyhusky.github.io',    // Domain name only, follow the example (no http:// & no www & no /)
    website: 'http://theonlyhusky.github.io',    // Website URL, follow the example (do not add / at the end)
    websitePort: 80,    // Website PORT, don't change it unless you're using a reverse proxy
    tradeMessage: 'Trade offer from csg0.trade | If you did not request this offer or the offer looks invalid please decline.', // Quite obvious
    rates: {
        ignoreItemsBelow: 0.05, // Ignore items below this price (price * rate < ignoreItemsBelow) - shows (Too Low) for user
        trashPriceBelow: 0.2,   // Items below this price are considered trash, the trash rate modifier will be applied
        // Items
        user: {
            key: 1,
            knife: 0.95,
            rare_skin: 0.95,
            weapon: 0.9,
            misc: 0.85,
            trash: 0.7,
        },
        bot: {
            key: 1.05,
            knife: 1,
            rare_skin: 1,
            weapon: 0.95,
            misc: 0.9,
            trash: 0.8,
        },
    },
}
