const fs = require("fs");
module.exports.config = {
  name: "nam photo",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "gdhy",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Yumiko")==0 || event.body.indexOf("Nisha Gope")==0 || event.body.indexOf("@ꜛ- Aʌƴʋsʜɩ 'ฝ ː 爾")==0 || event.body.indexOf("@Yumiko Thakur")==0) {
    var msg = {
        body: "👇🏻yaha hai niche dekho👇🏻",
        attachment: fs.createReadStream(__dirname + `/cache/biharigwl.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
