module.exports.config = {
	name: "uptime3",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "uptime",
	commandCategory: "uptime",
	cooldowns: 2,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("➤D/MM/YYYY HH:mm:ss");
	const timeStart = Date.now();
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = ["https://i.ibb.co/d57n469/image.jpg"];
var callback = () => api.sendMessage({body:`➳Bot and Admin Information

➜༻𝐎𝐖𝐍𝐄𝐑:- ☞𝐏𝐑𝐈𝐌𝐂𝐄 𝐌𝐄𝐆𝐇𝐖𝐀𝐍𝐒𝐈𝗜☜ ༺
༒𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 〠𝙿𝚁𝙸𝙽𝙲𝙴 𝙼𝙴𝙶𝙷𝚆𝙰𝙽𝚂𝙸𝗜〠.༒

༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- ☞ https://www.facebook.com/profile.php?id=100080287361043 ☜ 

༻𝘠𝘰𝘶𝘵𝘶𝘣𝘦 𝘭𝘪𝘯𝘬༺:- 
☞ https://youtube.com/@princeking07?si=4hKS88ZfB1Fsqb9d ☜

֎𝘍𝘰𝘳 𝘈𝘯𝘺 𝘒𝘪𝘯𝘥 𝘖𝘧 𝘏𝘦𝘭𝘱 𝘫𝘰𝘪𝘯 𝘞𝘱 𝘎𝘳𝘰𝘶𝘱֍:-

☞ NO TQ ☜

 ֎𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘔𝘦 𝘖𝘯 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱֍ :-  ☞6378xxxx89 ☜

»Bot Name : 【${global.config.BOTNAME}】

⫸Bot Prefix : 》${global.config.PREFIX}《

➼Bot work : ➺${hours} : ${minutes} : ${seconds}

➺Today Is : ${juswa}

►Thanks for using ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/juswa.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.gif")).on("close",() => callback());
   };
