const fs = require("fs");
module.exports.config = {
  name: "comedian",
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
  if (event.body.indexOf("")==0 || event.body.indexOf("")==0 || event.body.indexOf("@Rakesh")==0 || event.body.indexOf("@Rakesh Nishad")==0) {
    var msg = {
        body: "Ye raha Rakesh 👇🏻",
        attachment: fs.createReadStream(__dirname + `/cache/comedian.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
