const TelegramBot = require("node-telegram-bot-api");

var token = "6872629269:AAGL2IOFXEAPDEmnypxFGn1wXu-lT4y03rI";
const bot = new TelegramBot(token, { polling: true });
const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"] });

// Adds the utterances and intents for the NLP
manager.addDocument("en", "goodbye for now", "greetings.bye");
manager.addDocument("en", "bye bye take care", "greetings.bye");
manager.addDocument("en", "okay see you later", "greetings.bye");
manager.addDocument("en", "bye for now", "greetings.bye");
manager.addDocument("en", "i must go", "greetings.bye");
manager.addDocument("en", "hello", "greetings.hello");
manager.addDocument("en", "hi", "greetings.hello");
manager.addDocument("en", "how was day", "express.quiery");
manager.addDocument("en","how are you","express.quiery");
manager.addDocument("en", "what is the cricket score", "sports.cricket");
manager.addDocument("en", "cricket score", "sports.cricket");
manager.addDocument("en", "indian cricket score", "sports.cricket");
manager.addDocument("en", "worldcup", "sports.cricket");
manager.addDocument("en", "cricket", "sports.cricket");
manager.addDocument("en", "kohli", "sports.cricket");
manager.addDocument("en", "what events happning in mits", "mits.events");
manager.addDocument("en", "events", "mits.events");
manager.addDocument("en", "happening tomorrow", "mits.events");
manager.addDocument("en","i love u","express.feelings");
manager.addDocument("en","i hate u","express.feelings");
manager.addDocument("en","calm","music.calm");
manager.addDocument("en","romantic","music.romantic");
manager.addDocument("en","angry","music.anger");
manager.addDocument("en","sad","music.sad");
manager.addDocument("en","bore","music.bore");
manager.addDocument("en","depress","music.depressed");
manager.addDocument("en","fear","music.fear");
manager.addDocument("en","happy","music.happy");
manager.addDocument("en","suggest me songs","music.suggest");

manager.train();
bot.on("message", function (msg) {
  manager.process("en", msg.text).then((response) => {
    // Get the best intent
    const intent = response.intent;

if (intent == "greetings.bye") {
      bot.sendMessage(msg.chat.id, "hey byeeeeeee");
    }else if (intent == "greetings.hello") {
      bot.sendMessage(msg.chat.id, "hey ");
    }else if (intent == "music.suggest") {
      bot.sendMessage(msg.chat.id, "What's your mood?");
    }else if (intent == "express.feelings") {
      bot.sendMessage(msg.chat.id, "love u too!");
    }else if (intent == "express.quiery") {
      bot.sendMessage(msg.chat.id, "GOOD");
    }else if (intent == "sports.cricket") {
      bot.sendMessage(msg.chat.id, "Cricket Score");
    }else if (intent == "music.depressed") {
      bot.sendMessage(msg.chat.id, "https://youtu.be/v7K4vGYL9zI?si=VMcPTm8FsLt_lPa6" );
    }else if (intent == "music.fear") {
      bot.sendMessage(msg.chat.id, "https://youtu.be/mxva6l4bCSI?si=jMAoP8_cjzqDc6OS" );
    }else if (intent == "music.happy") {
      bot.sendMessage(msg.chat.id, "https://youtu.be/bw7bVpI5VcM?si=38bw0PTMsuiIVpN_" );
    }else if (intent == "music.bore") {
      bot.sendMessage(msg.chat.id, "https://youtu.be/YxWlaYCA8MU?si=eHxXifvdHiyg7TZk" );
    }else if (intent == "music.romantic") {
      bot.sendMessage(msg.chat.id, "https://youtu.be/nzh19qH1r3Q?si=NeYoIhW8uDHXrw6n" );
    }else if (intent == "music.sad") {
      bot.sendMessage(msg.chat.id, "https://youtu.be/VOLKJJvfAbg?si=Qi0vmmbr9kBvaAtR" );
    }else if (intent == "music.anger") {
      bot.sendMessage(msg.chat.id, "https://youtu.be/VAJK04HOLd0?si=WmZq7ZHq7z6DJuc9" );
    }else if (intent == "music.calm") {
      bot.sendMessage(msg.chat.id, "https://youtu.be/RLzC55ai0eo?si=CC4zvH8mgoE5o7N9" );
    }else {
      bot.sendMessage(msg.chat.id, "Not Understood Please Train Me Well!");
    }
  });
});
