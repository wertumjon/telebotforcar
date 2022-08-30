const { Telegraf, Markup } = require('telegraf');
const insta_post = require("./instagram_post");
const TOKEN = '5011456652:AAHWYVXJJqWwEV4Za3p5-LyYvaoIhk5tkwU';
const admin = "787939167";

const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.replyWithHTML("<b>Добро пожаловать в Instagram Downloader</b> \n \n"
    + "🇬🇧 With this bot you can download videos from Instagram, You Tube and TIK TOK. \n \n" +
    "🇷🇺 С помощью этого бота вы можете скачивать видео из Instagram, You Tube и TIK TOK. \n \n" +
    "🇺🇿 Ushbu bo't orqali siz Instagram, You Tube va TIK TOK dan videolarni yuklab olishingiz mumkin. \n \n" 
    ));


bot.on('text', (ctx) => {
    ctx.telegram.sendMessage(admin, "Yana bir foydalanuvchi ulandi \n" + 
                             "id: " + ctx.from.id + "\n" +
                            "first_name: " + ctx.from.first_name + "\n" +
                            "username: " + {ctx.from.username === "undefined" ? "" : "@"} + ctx.from.username + "\n" +
                            "text: " + ctx.message.text + "\n");
    let link = ctx.message.text;
    ctx.reply("Loading....")
    insta_post(link).then(async (data) => {
        if(!data){
            ctx.reply("There is a problemm with the given link!")
        }else if (data.post1.type = "mp4") {
            ctx.replyWithVideo(data.post1.url)
        } else {
            ctx.replyWithPhoto(data.post1.url)
        }
   
    })
})




bot.launch();
