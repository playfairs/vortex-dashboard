/*
 * Fuck making an API, I'll manually import the commands if I want.
 * I have every right to.
 */

// ion even know what this shi does 😭✌️
type ImportedCommand = {
    name: string
    description: string
    aliases: string[]
    usage: string
    enabled: boolean
    cog: string
    permissions: string
    hidden?: boolean
}

type CommandsResponse = {
    status: string
    commands: ImportedCommand[]
    count: number
}

const commands: CommandsResponse[] = [
    {
        status: "success",
        commands: [
            {
                name: ",;",
                description: `No description`,
                aliases: [".;", "-;"],
                usage: ";,; ,;",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "3",
                description: `;3`,
                aliases: [],
                usage: ";3 ;3",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "addxp",
                description: `Add XP to a user in the server.`,
                aliases: ["givexp"],
                usage: ";addxp <user> <xp>",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "afk",
                description: `Set the AFK status with an optional reason.`,
                aliases: [
                    "kms",
                    "despawn",
                    "idle",
                    "akf",
                    "dies",
                    "oof",
                    "bye",
                    "a",
                    "aficionado",
                    "apt",
                    "sleeping",
                    "sleep",
                    "tired"
                ],
                usage: ";afk [reason=AFK]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "ai",
                description: `Toggle AI functionality for the server or a specific channel.`,
                aliases: [],
                usage: ";ai <enabled> [channel]",
                enabled: true,
                cog: "AICommands",
                permissions: "None",
                hidden: false
            },
            {
                name: "ascii",
                description: `Converts a given message into ASCII art.`,
                aliases: ["as"],
                usage: ";ascii <message>",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "asslore",
                description: `Adds a new lore entry.`,
                aliases: [],
                usage: ";asslore",
                enabled: true,
                cog: "Invocations",
                permissions: "None",
                hidden: false
            },
            {
                name: "attachment",
                description: `No description`,
                aliases: [],
                usage: ";attachment <file (upload a file)>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "automod",
                description: `No description`,
                aliases: ["am"],
                usage: ";automod",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "automod filter",
                description: `No description`,
                aliases: [],
                usage: ";automod filter <keyword> [option=block] [time]",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "automod list",
                description: `No description`,
                aliases: [],
                usage: ";automod list",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "automod enable",
                description: `No description`,
                aliases: [],
                usage: ";automod enable",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "automod disable",
                description: `No description`,
                aliases: [],
                usage: ";automod disable",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "automod exempt",
                description: `No description`,
                aliases: [],
                usage: ";automod exempt <role>",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "automod edit",
                description: `No description`,
                aliases: [],
                usage: ";automod edit <option> [time] [rule_id]",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "automod remove",
                description: `No description`,
                aliases: [],
                usage: ";automod remove <keyword>",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "automod alert",
                description: `No description`,
                aliases: [],
                usage: ";automod alert [enabled] [channel]",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "automod config",
                description: `No description`,
                aliases: [],
                usage: ";automod config",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoreactions",
                description: `Setup autoreactions for your server.`,
                aliases: [],
                usage: ";autoreactions",
                enabled: true,
                cog: "AutoResponders",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoreactions create",
                description: `Create an autoreaction.`,
                aliases: [],
                usage: ";autoreactions create <trigger> <emoji>",
                enabled: true,
                cog: "AutoResponders",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoreactions delete",
                description: `Delete an autoreaction.`,
                aliases: [],
                usage: ";autoreactions delete <trigger>",
                enabled: true,
                cog: "AutoResponders",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoreactions list",
                description: `List all autoreactions.`,
                aliases: [],
                usage: ";autoreactions list",
                enabled: true,
                cog: "AutoResponders",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoreactions edit",
                description: `Edit an autoreaction.`,
                aliases: [],
                usage: ";autoreactions edit <trigger> <emoji>",
                enabled: true,
                cog: "AutoResponders",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoreactions toggle",
                description: `Toggle a specific autoreaction. Whether to enable or disable the autoreaction`,
                aliases: [],
                usage: ";autoreactions toggle <trigger> <action>",
                enabled: true,
                cog: "AutoResponders",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoresponder",
                description: `Setup autoresponders for your server.`,
                aliases: [],
                usage: ";autoresponder",
                enabled: true,
                cog: "AutoResponders",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoresponder list",
                description: `List all autoresponders.`,
                aliases: [],
                usage: ";autoresponder list",
                enabled: true,
                cog: "No Category",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoresponder delete",
                description: `Delete an autoresponder.`,
                aliases: [],
                usage: ";autoresponder delete <trigger>",
                enabled: true,
                cog: "No Category",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoresponder create",
                description: `Create an autoresponder.`,
                aliases: [],
                usage: ";autoresponder create <trigger> <response> [string=exact]",
                enabled: true,
                cog: "No Category",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoresponder edit",
                description: `Edit an autoresponder.`,
                aliases: [],
                usage: ";autoresponder edit <trigger> <response> [string=exact]",
                enabled: true,
                cog: "No Category",
                permissions: "None",
                hidden: false
            },
            {
                name: "autoresponder toggle",
                description: `Toggle autoresponders for this server.`,
                aliases: [],
                usage: ";autoresponder toggle <action>",
                enabled: true,
                cog: "No Category",
                permissions: "None",
                hidden: false
            },
            {
                name: "autorole",
                description: `No description`,
                aliases: [],
                usage: ";autorole <role>",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "autorolebots",
                description: `Automatically assigns a role to new bot members for this server.`,
                aliases: [],
                usage: ";autorolebots <role>",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "avatar",
                description: `Displays the avatar of the specified user or yourself if no one is mentioned.`,
                aliases: ["pfp", "av"],
                usage: ";avatar [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "avoco",
                description: `No description`,
                aliases: [],
                usage: ";avoco [name]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "ban",
                description: `No description`,
                aliases: [
                    "banish",
                    "yeet",
                    "bonk",
                    "perish",
                    "smite",
                    "hammer",
                    "devinejustice",
                    "corpses",
                    "murk",
                    "lavender",
                    "floral",
                    "bannerbutbad",
                    "ban-ner",
                    "repel",
                    "disintegrate",
                    "deport",
                    "kys"
                ],
                usage: ";ban [target] [reason]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "banlist",
                description: `Display the server's ban list in a paginated embed.`,
                aliases: ["bans"],
                usage: ";banlist",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "banner",
                description: `Displays the banner of the specified user or yourself if no one is mentioned.`,
                aliases: [],
                usage: ";banner [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "bathe",
                description: `No description`,
                aliases: [],
                usage: ";bathe <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "bc",
                description: `Invocation for purge bot.`,
                aliases: [],
                usage: ";bc [amount]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "bi",
                description: `Shows detailed information about the bot.`,
                aliases: ["botinfo", "abt", "bitch"],
                usage: ";bi",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacklist",
                description: `View commands in Blacklist.`,
                aliases: ["bl"],
                usage: ";blacklist",
                enabled: true,
                cog: "Blacklist",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacklist user",
                description: `Blacklist a user.`,
                aliases: [],
                usage: ";blacklist user <user> [reason]",
                enabled: true,
                cog: "Blacklist",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacklist guild",
                description: `Blacklist a guild.`,
                aliases: [],
                usage: ";blacklist guild <guild> [reason] [leave=False]",
                enabled: true,
                cog: "Blacklist",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacklist extend",
                description: `Blacklist more than one guild or user, or both, at once.`,
                aliases: [],
                usage: ";blacklist extend [users] [guilds] [reason]",
                enabled: true,
                cog: "Blacklist",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacklist remove",
                description: `Remove a user or guild from the blacklist.`,
                aliases: [],
                usage: ";blacklist remove [user] [guild]",
                enabled: true,
                cog: "Blacklist",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacklist list",
                description: `Generate a Python file with all blacklisted users and guilds in the specified format.`,
                aliases: [],
                usage: ";blacklist list",
                enabled: true,
                cog: "Blacklist",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacklist view",
                description: `Get information about a user or guild in the blacklist.`,
                aliases: [],
                usage: ";blacklist view [user] [guild]",
                enabled: true,
                cog: "Blacklist",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacktea",
                description: `No description`,
                aliases: [],
                usage: ";blacktea",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "boop",
                description: `Boop someone with cuteness!`,
                aliases: [],
                usage: ";boop <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "bots",
                description: `Displays the number of bots in the server.`,
                aliases: ["botcount"],
                usage: ";bots",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "bp",
                description: `Base command for purging only the bots messages.`,
                aliases: [],
                usage: ";bp",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "bp after",
                description: `Purges only messages sent after the specified message.`,
                aliases: [],
                usage: ";bp after <message_id>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "bp before",
                description: `Purges only messages sent before the specified message.`,
                aliases: [],
                usage: ";bp before <message_id>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "bp amnt",
                description: `Purges a specified amount of messages from the channel.`,
                aliases: ["amount", "number"],
                usage: ";bp amnt <amount>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "bp specific",
                description: `Purges only the specified message.`,
                aliases: [],
                usage: ";bp specific <message_id>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "brew",
                description: `Runs a brew command. Supports the same syntax as the terminal, including --cask and --formulae.`,
                aliases: [],
                usage: ";brew <command>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "button",
                description: `No description`,
                aliases: [],
                usage: ";button",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "changeavatar",
                description: `Change the bot's avatar to the provided URL or attachment.`,
                aliases: ["setavatar", "setav"],
                usage: ";changeavatar [url] <attachment (upload a file)>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "changebanner",
                description: `Change the bot's banner to the provided URL or attachment.`,
                aliases: ["setbanner"],
                usage: ";changebanner [url] <attachment (upload a file)>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "channel",
                description: `No description`,
                aliases: [],
                usage: ";channel",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "channel create",
                description: `No description`,
                aliases: [],
                usage: ";channel create <name> [category]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "channel delete",
                description: `No description`,
                aliases: [],
                usage: ";channel delete [channel]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "channel rename",
                description: `No description`,
                aliases: [],
                usage: ";channel rename <new_name>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "channel private",
                description: `No description`,
                aliases: [],
                usage: ";channel private [name]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "channel topic",
                description: `No description`,
                aliases: [],
                usage: ";channel topic <new_topic>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "channel sync",
                description: `No description`,
                aliases: [],
                usage: ";channel sync [category]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "clearnicknamehistory",
                description: `Clears the nickname history of a user.`,
                aliases: ["clearnickhistory", "cnh", "cngh"],
                usage: ";clearnicknamehistory [user]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "clearsnipe",
                description: `Clear the snipe history.`,
                aliases: [
                    "cs",
                    "cs:go",
                    "csharp",
                    "counterstrike",
                    "csgo",
                    "computerscience",
                    "cs:go:go",
                    "csharp:sharp",
                    "counterstrike:strike",
                    "csgo:go",
                    "clearsnipe:snipe",
                    "computerscience:science"
                ],
                usage: ";clearsnipe",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "clipboard",
                description: `Show the current contents of the clipboard.`,
                aliases: ["cb"],
                usage: ";clipboard",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "color",
                description: `Shows a color swatch and RGB, HEX, HSL info.`,
                aliases: ["hex", "colour"],
                usage: ";color [hexcode]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "command",
                description: `No description`,
                aliases: [],
                usage: ";command",
                enabled: true,
                cog: "CommandManager",
                permissions: "None",
                hidden: false
            },
            {
                name: "command disable",
                description: `No description`,
                aliases: [],
                usage: ";command disable <command_name>",
                enabled: true,
                cog: "CommandManager",
                permissions: "None",
                hidden: false
            },
            {
                name: "command enable",
                description: `No description`,
                aliases: [],
                usage: ";command enable <command_name>",
                enabled: true,
                cog: "CommandManager",
                permissions: "None",
                hidden: false
            },
            {
                name: "commands",
                description: `No description`,
                aliases: [],
                usage: ";commands",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "commands.json",
                description: `No description`,
                aliases: [],
                usage: ";commands.json",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "cover",
                description: `No description`,
                aliases: ["coverart", "c"],
                usage: ";cover [user]",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "createinvite",
                description: `Creates a unique invite for the server. (non-vanity).`,
                aliases: ["createinv", "instantinvite"],
                usage: ";createinvite [channel] [age] [uses]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "define",
                description: `No description`,
                aliases: [],
                usage: ";define <word>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "disable",
                description: `Disable XP gain in the server.`,
                aliases: ["disablexp"],
                usage: ";disable",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "disconnect",
                description: `Server disconnects the mentioned member, or self if none mentioned.`,
                aliases: ["dc"],
                usage: ";disconnect [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "dm",
                description: `Sends a direct message to a specified user.`,
                aliases: [],
                usage: ";dm <user> <message>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "docs",
                description: `No description`,
                aliases: ["documentation"],
                usage: ";docs",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "editsnipe",
                description: `Snipe the last edited message.`,
                aliases: ["es"],
                usage: ";editsnipe",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "embed",
                description: `Sends an embed to a specified channel or the current one if none mentioned.`,
                aliases: [],
                usage: ";embed [channel] [title] [description] <color> [thumbnail] [footer]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "emoji",
                description: `Base command for emoji commands.`,
                aliases: [],
                usage: ";emoji",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "emoji escape",
                description: `Convert emojis to their string representation in a code block.`,
                aliases: ["esc"],
                usage: ";emoji escape <emojis>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "errors",
                description: `Search errors by ID. Requires bot owner permissions.`,
                aliases: ["errorsearch", "tb", "traceback"],
                usage: ";errors [id]",
                enabled: true,
                cog: "ErrorHandler",
                permissions: "None",
                hidden: false
            },
            {
                name: "fetch",
                description: `Fetches the sticker from a reply and sends it as a downloadable file.`,
                aliases: [],
                usage: ";fetch",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "flameshot",
                description: `No description`,
                aliases: ["fs"],
                usage: ";flameshot",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "fm",
                description: `Shows currently playing track via the LastFM API.`,
                aliases: [],
                usage: ";fm [user]",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "fn",
                description: `No description`,
                aliases: ["nickforce", "forcednick"],
                usage: ";fn [member] [forced_nick]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "force_remove_afk",
                description: `Forcefully removes AFK status from a mentioned user if they are AFK.`,
                aliases: ["uafk", "unafk"],
                usage: ";force_remove_afk <member>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "gate",
                description: `No description`,
                aliases: [],
                usage: ";gate",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "gate set",
                description: `Sets the join log channel for the current server.`,
                aliases: ["logs"],
                usage: ";gate set [channel]",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "gate join",
                description: `Sets a custom welcome message for the server and displays it in an embed.`,
                aliases: [
                    "joinmsg",
                    "welcmsg",
                    "joinmessage",
                    "welcomemessage",
                    "welcmessage",
                    "welc"
                ],
                usage: ";gate join <message>",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "gate leave",
                description: `Sets a custom leave message for the server and displays it in an embed.`,
                aliases: ["leavemsg"],
                usage: ";gate leave <message>",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "gate reset",
                description: `Resets the join logs for the current server.`,
                aliases: ["resetlogs"],
                usage: ";gate reset",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "gate view",
                description: `Views the current join logs for the current server.`,
                aliases: ["viewlogs"],
                usage: ";gate view",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "git",
                description: `No description`,
                aliases: [],
                usage: ";git",
                enabled: true,
                cog: "Git",
                permissions: "None",
                hidden: false
            },
            {
                name: "git status",
                description: `Show the working tree status.`,
                aliases: [],
                usage: ";git status",
                enabled: true,
                cog: "Git",
                permissions: "None",
                hidden: false
            },
            {
                name: "git push",
                description: `Push changes to the remote repository.`,
                aliases: [],
                usage: ";git push",
                enabled: true,
                cog: "Git",
                permissions: "None",
                hidden: false
            },
            {
                name: "git pull",
                description: `Pull changes from the remote repository.`,
                aliases: [],
                usage: ";git pull",
                enabled: true,
                cog: "Git",
                permissions: "None",
                hidden: false
            },
            {
                name: "git log",
                description: `Show commit logs.  Parameters: limit: Number of commits to show (default: 10)`,
                aliases: [],
                usage: ";git log [limit=10]",
                enabled: true,
                cog: "Git",
                permissions: "None",
                hidden: false
            },
            {
                name: "hangman",
                description: `Start a solo Hangman game`,
                aliases: ["hm"],
                usage: ";hangman",
                enabled: true,
                cog: "Games",
                permissions: "None",
                hidden: false
            },
            {
                name: "hardban",
                description: `No description`,
                aliases: ["hb", "hban"],
                usage: ";hardban <user_id> [reason]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "hello",
                description: `No description`,
                aliases: [],
                usage: ";hello <name>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "help",
                description: `Shows help about the bot, a command, or a category of commands.`,
                aliases: ["h", "man", "manual"],
                usage: ";help [command]",
                enabled: true,
                cog: "No Category",
                permissions: "None",
                hidden: false
            },
            {
                name: "hotfix",
                description: `Sends the hotfix update from the hotfix.txt file with role mention.`,
                aliases: [],
                usage: ";hotfix",
                enabled: true,
                cog: "Developer",
                permissions: "None",
                hidden: false
            },
            {
                name: "hug",
                description: `Give someone a warm hug!`,
                aliases: [],
                usage: ";hug <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "imports",
                description: `No description`,
                aliases: [],
                usage: ";imports",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "inrole",
                description: `Displays all members in a specific role with interactive buttons.`,
                aliases: ["ir"],
                usage: ";inrole <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "install",
                description: `Generates an OAuth2 User Install link for the bot.`,
                aliases: [],
                usage: ";install",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "invite",
                description: `Generates an invite link for the bot.`,
                aliases: ["gbi"],
                usage: ";invite [user]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "invocations",
                description: `Shows detailed information about all existing invocations.`,
                aliases: [],
                usage: ";invocations",
                enabled: true,
                cog: "Invocations",
                permissions: "None",
                hidden: false
            },
            {
                name: "jail",
                description: `Jails a user, applying the jailed role and logging the event.`,
                aliases: [],
                usage: ";jail <member> [reason=No reason provided]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "jail setup",
                description: `Sets up the jail system with required roles and channels.`,
                aliases: [],
                usage: ";jail setup",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "jail channel",
                description: `Sets the jail channel for the jail system.`,
                aliases: [],
                usage: ";jail channel <channel>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "jail role",
                description: `Sets the jailed role for the jail system.`,
                aliases: [],
                usage: ";jail role <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku",
                description: `The Jishaku debug and diagnostic commands.  This command on its own gives a status brief. All other functionality is within its subcommands.`,
                aliases: ["jsk", "磁石"],
                usage: ";jishaku",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: true
            },
            {
                name: "jishaku hide",
                description: `Hides Jishaku from the help command.`,
                aliases: [],
                usage: ";jishaku hide",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku show",
                description: `Shows Jishaku in the help command.`,
                aliases: [],
                usage: ";jishaku show",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku tasks",
                description: `Shows the currently running jishaku tasks.`,
                aliases: [],
                usage: ";jishaku tasks",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku cancel",
                description: `Cancels a task with the given index.  If the index passed is -1, will cancel the last task instead.`,
                aliases: [],
                usage: ";jishaku cancel <index>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku load",
                description: `Loads or reloads the given extension names.  Reports any extensions that failed to load.`,
                aliases: ["reload"],
                usage: ";jishaku load [extensions...]",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku unload",
                description: `Unloads the given extension names.  Reports any extensions that failed to unload.`,
                aliases: [],
                usage: ";jishaku unload [extensions...]",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku shutdown",
                description: `Logs this bot out.`,
                aliases: ["logout", "die"],
                usage: ";jishaku shutdown",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku invite",
                description: `Retrieve the invite URL for this bot.  If the names of permissions are provided, they are requested as part of the invite.`,
                aliases: [],
                usage: ";jishaku invite [perms...]",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku rtt",
                description: `Calculates Round-Trip Time to the API.`,
                aliases: ["ping"],
                usage: ";jishaku rtt",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku sync",
                description: `Sync global or guild application commands to Discord.`,
                aliases: [],
                usage: ";jishaku sync [targets...]",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku retain",
                description: `Turn variable retention for REPL on or off.  Provide no argument for current status.`,
                aliases: [],
                usage: ";jishaku retain [toggle]",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku py",
                description: `Direct evaluation of Python code.`,
                aliases: ["python"],
                usage: ";jishaku py <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku py_inspect",
                description: `Evaluation of Python code with inspect information.`,
                aliases: ["pyi", "python_inspect", "pythoninspect"],
                usage: ";jishaku py_inspect <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku dis",
                description: `Disassemble Python code into bytecode.`,
                aliases: ["disassemble"],
                usage: ";jishaku dis <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku ast",
                description: `Disassemble Python code into AST.`,
                aliases: [],
                usage: ";jishaku ast <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku specialist",
                description: `Direct evaluation of Python code.`,
                aliases: [],
                usage: ";jishaku specialist <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku sql",
                description: `Parent for SQL adapter related commands`,
                aliases: [],
                usage: ";jishaku sql",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku sql fetchrow",
                description: `Fetch a single row from the SQL database.`,
                aliases: ["fetchone"],
                usage: ";jishaku sql fetchrow <query>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku sql fetch",
                description: `Fetch multiple rows from the SQL database.`,
                aliases: [],
                usage: ";jishaku sql fetch <query>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku sql select",
                description: `Shortcut for 'jsk sql fetch select'.`,
                aliases: [],
                usage: ";jishaku sql select <query>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku sql execute",
                description: `Executes a statement against the SQL database.`,
                aliases: [],
                usage: ";jishaku sql execute <query>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku sql schema",
                description: `Queries for the current schema and shows located table structures.`,
                aliases: [],
                usage: ";jishaku sql schema [query]",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku shell",
                description: `Executes statements in the system shell.  This uses the system shell as defined in $SHELL, or \`/bin/bash\` otherwise. Execution can be cancelled by closing the paginator.`,
                aliases: ["bash", "sh", "powershell", "ps1", "ps", "cmd", "terminal"],
                usage: ";jishaku shell <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku git",
                description: `Shortcut for 'jsk sh git'. Invokes the system shell.`,
                aliases: [],
                usage: ";jishaku git <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku pip",
                description: `Shortcut for 'jsk sh pip'. Invokes the system shell.`,
                aliases: [],
                usage: ";jishaku pip <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku node",
                description: `Shortcut for scaffolding and executing 'npm run'. Only exists if the executables are detected.`,
                aliases: [],
                usage: ";jishaku node <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku rustc",
                description: `Shortcut for scaffolding and executing 'cargo run'. Only exists if the executables are detected.`,
                aliases: [],
                usage: ";jishaku rustc <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku override",
                description: `Run a command with a different user, channel, or thread, optionally bypassing checks and cooldowns.  Users will try to resolve to a Member, but will use a User if it can't find one.`,
                aliases: ["execute", "exec", "override!", "execute!", "exec!"],
                usage: ";jishaku override [overrides]... <command_string>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku repeat",
                description: `Runs a command multiple times in a row.  This acts like the command was invoked several times manually, so it obeys cooldowns. You can use this in conjunction with \`jsk sudo\` to bypass this.`,
                aliases: [],
                usage: ";jishaku repeat <times> <command_string>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku debug",
                description: `Run a command timing execution and catching exceptions.`,
                aliases: ["dbg"],
                usage: ";jishaku debug <command_string>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku source",
                description: `Displays the source code for a command.`,
                aliases: ["src"],
                usage: ";jishaku source <command_name>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku cat",
                description: `Read out a file, using syntax highlighting if detected.  Lines and linespans are supported by adding '#L12' or '#L12-14' etc to the end of the filename.`,
                aliases: [],
                usage: ";jishaku cat <argument>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku curl",
                description: `Download and display a text file from the internet.  This command is similar to jsk cat, but accepts a URL.`,
                aliases: [],
                usage: ";jishaku curl <url>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku permtrace",
                description: `Calculates the source of granted or rejected permissions.  This accepts a channel, and either a member or a list of roles. It calculates permissions the same way Discord does, while keeping track of the source.`,
                aliases: [],
                usage: ";jishaku permtrace <channel> [targets...]",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku voice",
                description: `Voice-related commands.  If invoked without subcommand, relays current voice state.`,
                aliases: ["vc"],
                usage: ";jishaku voice",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku voice join",
                description: `Joins a voice channel, or moves to it if already connected.  Passing a voice channel uses that voice channel. Passing a member will use that member's current voice channel. Passing nothing will use the author's voice channel.`,
                aliases: ["connect"],
                usage: ";jishaku voice join [destination]",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku voice disconnect",
                description: `Disconnects from the voice channel in this guild, if there is one.`,
                aliases: ["dc"],
                usage: ";jishaku voice disconnect",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku voice stop",
                description: `Stops running an audio source, if there is one.`,
                aliases: [],
                usage: ";jishaku voice stop",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku voice pause",
                description: `Pauses a running audio source, if there is one.`,
                aliases: [],
                usage: ";jishaku voice pause",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku voice resume",
                description: `Resumes a running audio source, if there is one.`,
                aliases: [],
                usage: ";jishaku voice resume",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku voice volume",
                description: `Adjusts the volume of an audio source if it is supported.`,
                aliases: [],
                usage: ";jishaku voice volume <percentage>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku voice play",
                description: `Plays audio direct from a URI.  Can be either a local file or an audio resource on the internet.`,
                aliases: ["play_local"],
                usage: ";jishaku voice play <uri>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku voice youtube_dl",
                description: `Plays audio from youtube_dl-compatible sources.`,
                aliases: ["youtubedl", "ytdl", "yt"],
                usage: ";jishaku voice youtube_dl <url>",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: false
            },
            {
                name: "kick",
                description: `Kicks a member from the server.`,
                aliases: ["sock"],
                usage: ";kick [member] [user_id] [reason]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "kill",
                description: `Eliminate someone from existence!`,
                aliases: [],
                usage: ";kill <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "kiss",
                description: `Send a sweet kiss to someone special!`,
                aliases: [],
                usage: ";kiss <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "l",
                description: `No description`,
                aliases: [],
                usage: ";l",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "language",
                description: `Sets the default language for the bot to use when translating.`,
                aliases: [],
                usage: ";language <language>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "lastfm",
                description: `No description`,
                aliases: ["lf", "lfm"],
                usage: ";lastfm",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "lastfm set",
                description: `Set your LastFM username manually.`,
                aliases: ["setusername"],
                usage: ";lastfm set <username>",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "leaderboard",
                description: `No description`,
                aliases: ["lb", "top"],
                usage: ";leaderboard [page=1]",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: false
            },
            {
                name: "len",
                description: `No description`,
                aliases: ["length"],
                usage: ";len [expr]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "lockdown",
                description: `No description`,
                aliases: [],
                usage: ";lockdown",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "lockdown channel",
                description: `Locks down a specific channel, or the current channel if none is specified.`,
                aliases: [],
                usage: ";lockdown channel [channel] [action=lock]",
                enabled: true,
                cog: "No Category",
                permissions: "None",
                hidden: false
            },
            {
                name: "lockdown staticrole",
                description: `Sets the static member role if a member role exists.`,
                aliases: [],
                usage: ";lockdown staticrole <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore",
                description: `Shows the lorebook for a user with pagination. If no user is mentioned, shows the invoking user's lorebook.`,
                aliases: [],
                usage: ";lore [user]",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore view",
                description: `Views a users lore, or your own if none mentioned.`,
                aliases: [],
                usage: ";lore view [user]",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore add",
                description: `Adds a message to the lorebook of the user who sent the referenced message. Must be used by replying to a message or providing a message ID.`,
                aliases: [],
                usage: ";lore add [message]",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore remove",
                description: `Removes a specific lore entry by its number.`,
                aliases: [],
                usage: ";lore remove <entry_number> [user]",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore reset",
                description: `Resets a user's entire lorebook.`,
                aliases: [],
                usage: ";lore reset [user]",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore show",
                description: `Shows a specific lore entry for a user. If no user is mentioned, uses the command invoker. If entry number is out of range, shows a random entry.`,
                aliases: [],
                usage: ";lore show <entry_number> [user]",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore leaderboard",
                description: `Shows the top 10 users with the most lore entries.`,
                aliases: ["lb", "top"],
                usage: ";lore leaderboard",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore search",
                description: `Search for lore entries containing a keyword`,
                aliases: [],
                usage: ";lore search [query] [user]",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore opt-out",
                description: `Opt-out of having your lorebook visible to others.`,
                aliases: ["optout"],
                usage: ";lore opt-out",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore opt-in",
                description: `Opt-in to having your lorebook visible to others.`,
                aliases: ["optin"],
                usage: ";lore opt-in [user]",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "loreadd",
                description: `Adds a new lore entry.`,
                aliases: ["addlore"],
                usage: ";loreadd",
                enabled: true,
                cog: "Invocations",
                permissions: "None",
                hidden: false
            },
            {
                name: "ltt",
                description: `Estimate the one-way latency (LTT) of the bot.`,
                aliases: ["oneway", "latencyoneway", "halfping"],
                usage: ";ltt",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "massban",
                description: `No description`,
                aliases: ["mban", "mb", "bulkban"],
                usage: ";massban [user_ids...] [reason]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "mc",
                description: `No description`,
                aliases: ["membercount", "members"],
                usage: ";mc",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "namehistory",
                description: `Shows the server nickname history of a user in an embed with pagination.`,
                aliases: ["nickhistory", "nh", "ngh"],
                usage: ";namehistory [user]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "nick",
                description: `No description`,
                aliases: [],
                usage: ";nick [member] [new_nick]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "nick set",
                description: `No description`,
                aliases: ["change"],
                usage: ";nick set [member] [new_nick]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "nick remove",
                description: `No description`,
                aliases: ["reset", "clear"],
                usage: ";nick remove [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "nick force",
                description: `No description`,
                aliases: [],
                usage: ";nick force [member] [forced_nick]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "nothing",
                description: `Literally does nothing.`,
                aliases: [],
                usage: ";nothing ;nothing",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "nuke",
                description: `Nukes the current channel with confirmation.`,
                aliases: [
                    "arab",
                    "twintowers",
                    "hiroshima",
                    "nagasaki",
                    "japan1945",
                    "ww2",
                    "boomboom",
                    "no_witnesses",
                    "allahuakbar",
                    "tsarbomba"
                ],
                usage: ";nuke",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "nword",
                description: `See how many times you have said the nword.`,
                aliases: [],
                usage: ";nword [user]",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "o",
                description: `Runs the specified command as the bot's owner.`,
                aliases: [],
                usage: ";o <command>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "o nvim",
                description: `Opens Neovim in a new terminal`,
                aliases: ["neovim", "nvm", "vim"],
                usage: ";o nvim",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "o terminal",
                description: `Opens Kitty Terminal`,
                aliases: ["term", "cmd", "kitty", "pussy"],
                usage: ";o terminal",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "o open",
                description: `Opens the specified application.`,
                aliases: ["openapp"],
                usage: ";o open <app>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "o screenshot",
                description: `Takes a screenshot of the specified URL and sends it.`,
                aliases: ["ss"],
                usage: ";o screenshot <args>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "pat",
                description: `Give someone a nice headpat!`,
                aliases: [],
                usage: ";pat <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "patch",
                description: `Sends the patch update from the patch.txt file with role mention.`,
                aliases: [],
                usage: ";patch",
                enabled: true,
                cog: "Developer",
                permissions: "None",
                hidden: false
            },
            {
                name: "pause",
                description: `Pause the current song.`,
                aliases: [],
                usage: ";pause",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "permissions",
                description: `Checks the permissions of a member or a role.`,
                aliases: ["perm", "perms"],
                usage: ";permissions [target]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "pickupline",
                description: `Get a random pickup line.`,
                aliases: ["pickup", "rizz"],
                usage: ";pickupline [user]",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "play",
                description: `Play a song from YouTube.  Parameters: - query: The search term or YouTube URL`,
                aliases: [],
                usage: ";play <query>",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "playfairs",
                description: `No description`,
                aliases: [],
                usage: ";playfairs",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "playunfair",
                description: `No description`,
                aliases: [],
                usage: ";playunfair",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "pp",
                description: `See someones pp size`,
                aliases: ["dih", "dihsize"],
                usage: ";pp [user=<you>]",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "prefix",
                description: `No description`,
                aliases: [],
                usage: ";prefix",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "privacy",
                description: `No description`,
                aliases: [],
                usage: ";privacy",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "punch",
                description: `Punch someone with your virtual fists!`,
                aliases: [],
                usage: ";punch <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge",
                description: `No description`,
                aliases: [],
                usage: ";purge [amount]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge from",
                description: `No description`,
                aliases: ["user"],
                usage: ";purge from <user>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge before",
                description: `No description`,
                aliases: [],
                usage: ";purge before <message_id>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge after",
                description: `No description`,
                aliases: [],
                usage: ";purge after <message_id>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge bot",
                description: `No description`,
                aliases: [],
                usage: ";purge bot",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge self",
                description: `No description`,
                aliases: [],
                usage: ";purge self",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge attachments",
                description: `No description`,
                aliases: [],
                usage: ";purge attachments",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge links",
                description: `No description`,
                aliases: ["url"],
                usage: ";purge links",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge contains",
                description: `No description`,
                aliases: [],
                usage: ";purge contains <text>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge endswith",
                description: `No description`,
                aliases: [],
                usage: ";purge endswith <text>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge startswith",
                description: `No description`,
                aliases: [],
                usage: ";purge startswith <text>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge invites",
                description: `No description`,
                aliases: [],
                usage: ";purge invites",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge mentions",
                description: `No description`,
                aliases: [],
                usage: ";purge mentions [user]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge reactions",
                description: `No description`,
                aliases: [],
                usage: ";purge reactions",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge stickers",
                description: `No description`,
                aliases: [],
                usage: ";purge stickers",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge all",
                description: `No description`,
                aliases: [],
                usage: ";purge all",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "queue",
                description: `Shows the current queue or adds a track to the queue.`,
                aliases: [],
                usage: ";queue [url]",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "rank",
                description: `No description`,
                aliases: ["level", "lvl"],
                usage: ";rank [user]",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: false
            },
            {
                name: "react",
                description: `Reacts to a message.`,
                aliases: [],
                usage: ";react <message_id> <emoji>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "reactionmute",
                description: `Revokes a users permissions to react in a channel.`,
                aliases: ["rmute"],
                usage: ";reactionmute <member>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "reactionsnipe",
                description: `Snipes the last removed reaction in the channel.`,
                aliases: ["rs"],
                usage: ";reactionsnipe",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "reactionunmute",
                description: `Grants a users permissions to react in a channel.`,
                aliases: ["rumute", "runmute"],
                usage: ";reactionunmute <member>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "reset",
                description: `Reset a user's XP in the server.`,
                aliases: ["resetxp"],
                usage: ";reset <user>",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "resetall",
                description: `Reset all users' XP in the server.`,
                aliases: ["resetallxp"],
                usage: ";resetall",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "resume",
                description: `Resume the current song.`,
                aliases: [],
                usage: ";resume",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "ri",
                description: `No description`,
                aliases: ["roleinfo"],
                usage: ";ri [role]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "role",
                description: `No description`,
                aliases: ["r"],
                usage: ";role [member] [role_input]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role human",
                description: `No description`,
                aliases: ["humans"],
                usage: ";role human <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role bot",
                description: `No description`,
                aliases: ["bots"],
                usage: ";role bot <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role has",
                description: `No description`,
                aliases: [],
                usage: ";role has <role> <action> <new_role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role create",
                description: `No description`,
                aliases: [],
                usage: ";role create <role_name>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role delete",
                description: `No description`,
                aliases: [],
                usage: ";role delete <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role give",
                description: `No description`,
                aliases: [],
                usage: ";role give <member> <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role remove",
                description: `No description`,
                aliases: [],
                usage: ";role remove <member> <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role rename",
                description: `No description`,
                aliases: ["name"],
                usage: ";role rename <role> <new_name>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role hoist",
                description: `No description`,
                aliases: [],
                usage: ";role hoist <role> [hoist]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role color",
                description: `No description`,
                aliases: [],
                usage: ";role color <role> <color_hex>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role mentionable",
                description: `No description`,
                aliases: [],
                usage: ";role mentionable <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role info",
                description: `No description`,
                aliases: [],
                usage: ";role info [role]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role list",
                description: `No description`,
                aliases: [],
                usage: ";role list [user]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "role restore",
                description: `No description`,
                aliases: [],
                usage: ";role restore <user>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "roleid",
                description: `Shows the role ID of the specified role or yourself if no one is mentioned.`,
                aliases: ["rid"],
                usage: ";roleid [role]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "roles",
                description: `No description`,
                aliases: [],
                usage: ";roles [user]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "rtt",
                description: `Check the round-trip time (RTT) of the bot.`,
                aliases: ["ping", "pong", "roundtrip", "latency"],
                usage: ";rtt",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "runas",
                description: `Run a command with a different user, channel, or thread, optionally bypassing checks and cooldowns.`,
                aliases: ["execute", "exec", "override!", "execute!", "exec!", "override"],
                usage: ";runas [overrides]... <command_string>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "sav",
                description: `Displays the server avatar of the specified user or yourself if no one is mentioned.`,
                aliases: [],
                usage: ";sav [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "sbanner",
                description: `Displays the server specific banner of the specified user or yourself if no one is mentioned.`,
                aliases: ["memberbanner"],
                usage: ";sbanner [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "sbd",
                description: `No description`,
                aliases: ["watchdog"],
                usage: ";sbd",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "scrobbles",
                description: `No description`,
                aliases: ["sc", "plays"],
                usage: ";scrobbles [user]",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "sdeafen",
                description: `Server deafens the mentioned member, or self if none mentioned.`,
                aliases: ["sd", "deafen"],
                usage: ";sdeafen [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "send",
                description: `Sends a message to a specified channel or the current one if none mentioned.`,
                aliases: [],
                usage: ";send [channel] [message] [message_id] [attachment (upload a file)]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "server",
                description: `No description`,
                aliases: ["config", "serverconfig", "configuration"],
                usage: ";server",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "server prefix",
                description: `Sets the prefix for the current server.`,
                aliases: ["serverprefix", "setprefix"],
                usage: ";server prefix <prefix>",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "serverbanner",
                description: `Shows the server banner in an embed.`,
                aliases: [],
                usage: ";serverbanner",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "serverid",
                description: `No description`,
                aliases: ["sid"],
                usage: ";serverid",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "servers",
                description: `Server management and Blacklist`,
                aliases: [],
                usage: ";servers",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "servers list",
                description: `No description`,
                aliases: [],
                usage: ";servers list",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "servers invite",
                description: `Get an invite link for the specified guild.`,
                aliases: [],
                usage: ";servers invite <guild_id>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "servers revoke",
                description: `Makes the bot leave a server. * If no guild ID is provided, it leaves the current server. * If a guild ID is provided, it leaves the specified server.`,
                aliases: [],
                usage: ";servers revoke [guild_id]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "servers blacklist",
                description: `Adds a server to the blacklist. Usage: ;blacklist <guild_id>`,
                aliases: [],
                usage: ";servers blacklist [guild_id]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "servers whitelist",
                description: `Removes a server from the blacklist and allows it to join. Usage: ,whitelist <guild_id>`,
                aliases: [],
                usage: ";servers whitelist [guild_id]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "setlevel",
                description: `Set a user's level in the server.`,
                aliases: ["setlvl"],
                usage: ";setlevel <user> <level>",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "shards",
                description: `Shows information about the shards the bot is using.`,
                aliases: [],
                usage: ";shards",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "si",
                description: `Show the server info.`,
                aliases: ["serverinfo"],
                usage: ";si",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "sicon",
                description: `Shows the server icon in an embed.`,
                aliases: [],
                usage: ";sicon",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "silence",
                description: `Deletes messages from a user everytime they talk.`,
                aliases: [],
                usage: ";silence <user>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "skibidi",
                description: `No description`,
                aliases: ["brainrot"],
                usage: ";skibidi",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "slap",
                description: `Slap some sense into someone!`,
                aliases: [],
                usage: ";slap <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "smute",
                description: `Server mutes the mentioned member, or self if none mentioned.`,
                aliases: ["sm", "mute"],
                usage: ";smute [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "sname",
                description: `Change the name of a server.`,
                aliases: ["servername"],
                usage: ";sname [new_name]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "snipe",
                description: `Snipes recently deleted messages`,
                aliases: ["s"],
                usage: ";snipe",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "snipe reaction",
                description: `Snipes recently removed reactions.`,
                aliases: [],
                usage: ";snipe reaction",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "snipe edit",
                description: `No description`,
                aliases: ["es"],
                usage: ";snipe edit",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "source",
                description: `Fetches source code.`,
                aliases: ["src"],
                usage: ";source",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "splash",
                description: `Shows the server splash (invite banner) in an embed.`,
                aliases: [],
                usage: ";splash",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "spotify",
                description: `No description`,
                aliases: ["spotifyctl"],
                usage: ";spotify",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "spotify play",
                description: `No description`,
                aliases: [],
                usage: ";spotify play [query]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "spotify stop",
                description: `No description`,
                aliases: ["pause"],
                usage: ";spotify stop",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "spotify skip",
                description: `No description`,
                aliases: [],
                usage: ";spotify skip [num=1]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "spotify previous",
                description: `No description`,
                aliases: [],
                usage: ";spotify previous",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "spotify like",
                description: `No description`,
                aliases: [],
                usage: ";spotify like",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "spotify dislike",
                description: `No description`,
                aliases: [],
                usage: ";spotify dislike",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "spotify search",
                description: `No description`,
                aliases: [],
                usage: ";spotify search <query>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "staffstrip",
                description: `No description`,
                aliases: ["strip", "stripstaff"],
                usage: ";staffstrip <member>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "status",
                description: `Change the bot's status.`,
                aliases: [],
                usage: ";status [status]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "status set",
                description: `Set the custom status.`,
                aliases: [],
                usage: ";status set <status>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "status rotate",
                description: `Rotate the custom status.  Usage: ,status rotate example, example 2, example 3 --seconds 5`,
                aliases: [],
                usage: ";status rotate <args>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "status clear",
                description: `Clear the custom status.`,
                aliases: [],
                usage: ";status clear",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "steal",
                description: `Steal first emoji, sticker from replied message, if not provided`,
                aliases: [],
                usage: ";steal [emoji]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "steal emojis",
                description: `Steal multiple emojis from attached message, or replied message`,
                aliases: [],
                usage: ";steal emojis [emojis]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "steal sticker",
                description: `Steal sticker from attached message, or replied message`,
                aliases: [],
                usage: ";steal sticker",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "stop",
                description: `Stop the current song and disconnect from voice.`,
                aliases: [],
                usage: ";stop",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "sundeafen",
                description: `Server undeafens the mentioned member, or self if none mentioned.`,
                aliases: ["sund", "sunday", "undeafen"],
                usage: ";sundeafen [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "sunmute",
                description: `Server unmutes the mentioned member, or self if none mentioned.`,
                aliases: ["sum", "unmute"],
                usage: ";sunmute [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "tableflip",
                description: `No description`,
                aliases: [],
                usage: ";tableflip",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "tech",
                description: `No description`,
                aliases: [],
                usage: ";tech [name]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "terms",
                description: `No description`,
                aliases: [],
                usage: ";terms",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "tiktok",
                description: `No description`,
                aliases: ["tt"],
                usage: ";tiktok",
                enabled: true,
                cog: "Reposters",
                permissions: "None",
                hidden: false
            },
            {
                name: "tiktok repost",
                description: `Repost a TikTok video.`,
                aliases: [],
                usage: ";tiktok repost [url]",
                enabled: true,
                cog: "Reposters",
                permissions: "None",
                hidden: false
            },
            {
                name: "tiktok enable",
                description: `No description`,
                aliases: [],
                usage: ";tiktok enable",
                enabled: true,
                cog: "Reposters",
                permissions: "None",
                hidden: false
            },
            {
                name: "tiktok disable",
                description: `No description`,
                aliases: [],
                usage: ";tiktok disable",
                enabled: true,
                cog: "Reposters",
                permissions: "None",
                hidden: false
            },
            {
                name: "time",
                description: `Get the current time for yourself or another user based on their set timezone.`,
                aliases: ["timezone", "tz"],
                usage: ";time [member]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "time set",
                description: `Set your timezone for time commands.`,
                aliases: [],
                usage: ";time set <timezone_abbr>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "timeout",
                description: `No description`,
                aliases: ["to", "bdsm", "ballgag", "stfu", "sybau", "smd"],
                usage: ";timeout [member] [duration=5m]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "trackplays",
                description: `No description`,
                aliases: ["tp"],
                usage: ";trackplays [user] [artist] [track]",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "translate",
                description: `Translate text from one language to another.`,
                aliases: ["trans", "wtf"],
                usage: ";translate [text] [from_] [to]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "ttt",
                description: `Challenge someone to Tic-Tac-Toe! Usage: \`!ttt @user\``,
                aliases: ["tictactoe"],
                usage: ";ttt [opponent]",
                enabled: true,
                cog: "Games",
                permissions: "None",
                hidden: false
            },
            {
                name: "unban",
                description: `Unbans a user by their User ID.`,
                aliases: ["befree"],
                usage: ";unban <user_id>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "unflip",
                description: `No description`,
                aliases: [],
                usage: ";unflip",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "unjail",
                description: `Removes the jailed role from a user and logs the event.`,
                aliases: [],
                usage: ";unjail <member> [reason=No reason provided]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "unsilence",
                description: `Unsilences a user.`,
                aliases: [],
                usage: ";unsilence <user>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "untimeout",
                description: `No description`,
                aliases: ["uto", "futo"],
                usage: ";untimeout [member] [user_id]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "update",
                description: `Update and restart the bot.`,
                aliases: [],
                usage: ";update",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "urban",
                description: `No description`,
                aliases: [],
                usage: ";urban <word>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "userid",
                description: `Shows the user ID of the specified user or yourself if no one is mentioned.`,
                aliases: ["uid", "whoid", "id"],
                usage: ";userid [user_id]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "userinfo",
                description: `Displays detailed user information with badges, activity, and roles.`,
                aliases: ["who", "ui", "info", "whoami", "profile"],
                usage: ";userinfo [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "uwulock",
                description: `Uwulock commands.`,
                aliases: [],
                usage: ";uwulock <user> [flag=False]",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "uwulock reset",
                description: `No description`,
                aliases: [],
                usage: ";uwulock reset",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "voice",
                description: `No description`,
                aliases: [],
                usage: ";voice",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "voice join",
                description: `No description`,
                aliases: [],
                usage: ";voice join <channel>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "voice leave",
                description: `No description`,
                aliases: [],
                usage: ";voice leave <channel>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "voice move",
                description: `No description`,
                aliases: [],
                usage: ";voice move <channel>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "voicemaster",
                description: `View commands in VoiceMaster.`,
                aliases: ["vm"],
                usage: ";voicemaster",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster setup",
                description: `Setup VoiceMaster with a category and join channel.`,
                aliases: [],
                usage: ";voicemaster setup [category]",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster staticrole",
                description: `Set a staticrole for VoiceMaster (The role that all members get when they join the server).`,
                aliases: [],
                usage: ";voicemaster staticrole <role>",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster reset",
                description: `Reset VoiceMaster.`,
                aliases: [],
                usage: ";voicemaster reset",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster lock",
                description: `Lock your VoiceMaster channel to prevent others from joining.`,
                aliases: [],
                usage: ";voicemaster lock",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster unlock",
                description: `Unlock your VoiceMaster channel to allow others to join.`,
                aliases: [],
                usage: ";voicemaster unlock",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster hide",
                description: `Hide your VoiceMaster channel from the channel list.`,
                aliases: [],
                usage: ";voicemaster hide",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster unhide",
                description: `Unhide your VoiceMaster channel from the channel list.`,
                aliases: [],
                usage: ";voicemaster unhide",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster cleanup",
                description: `Cleanup empty VoiceMaster channels.`,
                aliases: [],
                usage: ";voicemaster cleanup",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster claim",
                description: `Claim a VoiceMaster channel if the owner is not present.`,
                aliases: [],
                usage: ";voicemaster claim",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster transfer",
                description: `Transfer ownership of a VoiceMaster channel to another user.`,
                aliases: [],
                usage: ";voicemaster transfer <user>",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster restrict",
                description: `Restrict a user's permissions in this VoiceMaster channel.`,
                aliases: [],
                usage: ";voicemaster restrict <user> <action>",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster permit",
                description: `Permit a user's permissions in this VoiceMaster channel.`,
                aliases: [],
                usage: ";voicemaster permit <user> <action>",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster rename",
                description: `Rename this VoiceMaster channel.`,
                aliases: [],
                usage: ";voicemaster rename <name>",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "void",
                description: `No description`,
                aliases: ["ask"],
                usage: ";void <question>",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "vortex",
                description: `No description`,
                aliases: [],
                usage: ";vortex",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "whois",
                description: `Displays basic user information: username, avatar, and ID.`,
                aliases: [],
                usage: ";whois [user_id]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "wolfram",
                description: `No description`,
                aliases: ["wolframalpha", "wr"],
                usage: ";wolfram <question>",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "yabai",
                description: `No description`,
                aliases: [],
                usage: ";yabai",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "перезагрузка",
                description: `No description`,
                aliases: [],
                usage: ";перезагрузка [command]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            }
        ],
        count: 355
    }
]
export default commands
