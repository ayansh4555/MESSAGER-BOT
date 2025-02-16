const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳ 𝐒𝐨 𝐉𝐚𝐨 𝐁𝐚𝐛𝐲 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭💝 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '1:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳ 𝐌𝐚𝐢 𝐛𝐡𝐢 𝐉𝐚𝐠 𝐫𝐚𝐡𝐚 𝐡𝐮 𝐚𝐛𝐡𝐢 𝐭𝐚𝐤😉 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '2:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳ 𝗧𝘂𝗺 𝗔𝗯𝗵𝗶 𝗧𝗮𝗸 𝗦𝗼𝘆𝗲 𝗡𝗵𝗶 😳 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '3:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳ 𝐀𝐜𝐜𝐡𝐚 𝐡𝐨𝐠𝐚 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞🌃 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '4:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳ 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞 🌃 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '5:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳ 𝐀𝐚𝐥𝐬𝐢😹 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '6:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳ 𝐑𝐚𝐝𝐡𝐞 𝐑𝐚𝐝𝐡𝐞 𝐬𝐚𝐛𝐤𝐨 🙏🏻💝 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '7:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳ 𝐆𝐨𝐨𝐝 𝐦𝐨𝐫𝐧𝐢𝐧𝐠 𝐬𝐚𝐛𝐤𝐨 😌💝 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '8:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳ 𝐔𝐭𝐡 𝐆𝐲𝐞 𝐏𝐫𝐞𝐬𝐢𝐝𝐞𝐧𝐭 𝐣𝐈 𝐀𝐚𝐩?😵 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '9:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳ 𝐁𝐫𝐞𝐚𝐤𝐟𝐚𝐬𝐭 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛 𝐁𝐚𝐛𝐲🙈 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '10:00 AM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳ 𝐀𝐚𝐥𝐬𝐢 𝐀𝐚𝐣 𝐂𝐨𝐥𝐥𝐞𝐠𝐞 𝐍𝐚𝐡𝐢 𝐆𝐚𝐲𝐞?🙀 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '11:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳ 𝐌𝐮𝐣𝐡𝐞 𝐁𝐡𝐢 𝐘𝐚𝐚𝐝 𝐊𝐚𝐫 𝐋𝐢𝐲𝐚 𝐊𝐚𝐫𝐨😻 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '12:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳ 𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐍𝐨𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞🌞 𝐊𝐢𝐭𝐧𝐢 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐁𝐚𝐡𝐚𝐫🥵 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '1:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳ 𝐋𝐮𝐧𝐜𝐡 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛😇 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '2:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳ 𝐉𝐚𝐢 𝐒𝐡𝐫𝐞𝐞 𝐑𝐚𝐦 💖😇 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '3:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳ 𝐓𝐡𝐨𝐝𝐚 𝐀𝐚𝐫𝐚𝐦 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛 𝐁𝐚𝐛𝐲😘 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '4:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳ 𝐁𝐚𝐡𝐮𝐭 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐀𝐚𝐣🥵 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '5:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳ 𝐭𝐮𝐦 𝐥𝐨𝐠 𝐭𝐡𝐚𝐫𝐤𝐢 𝐇𝐨 🤦🏻 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '6:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳ 𝐁𝐨𝐥𝐨 𝐒𝐚𝐭𝐲 𝐌𝐞 𝐉𝐚𝐢𝐭𝐞 𝐇 𝐒𝐚𝐧𝐚𝐭𝐚𝐧 𝐃𝐡𝐚𝐫𝐦 💖 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '7:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳ 𝐘𝐚𝐫 𝐭𝐮𝐦 𝐥𝐨𝐠 𝐤𝐮𝐜𝐡 𝐤𝐚𝐦 𝐝𝐡𝐚𝐦 𝐤𝐚𝐫 𝐥𝐨 😶 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '8:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳ 𝐃𝐢𝐧𝐧𝐞𝐫 𝐊𝐚𝐫𝐥𝐨 𝐒𝐚𝐫𝐞 😋 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '9:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳ 𝐌𝐞𝐫𝐞 𝐂𝐮𝐭𝐞 𝐁𝐚𝐛𝐲 💞 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '10:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 𝐏𝐌 ⏳ 𝐌𝐮𝐬𝐤𝐮𝐫𝐚𝐨 𝐇𝐚𝐬𝐨 𝐇𝐚𝐦𝐞𝐬𝐡𝐚 ☺️ 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' },
    { time: '11:00 PM', message: ' 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 𝐏𝐌 ⏳ 𝐀𝐲𝐚𝐧𝐬𝐱 𝐛𝐚𝐛𝐲 𝐤𝐡𝐚𝐧𝐚 𝐤𝐡𝐚𝐲𝐚 𝐚𝐚𝐩𝐧𝐞? 𝐎𝐰𝐧𝐞𝐫 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟ ✭⃝🩷' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/Kolkata').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};