const fs = require("fs");
module.exports.config = {
  name: "ranu",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "nam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@pimdi")==0 || event.body.indexOf("@Sharif")==0 || event.body.indexOf("@pindi")==0 || event.body.indexOf("@Sharif Ladka")==0) {
    var msg = {
        body: "ye rha pimdi🥹👇🏻",
        attachment: fs.createReadStream(__dirname + `/cache/ranu.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
