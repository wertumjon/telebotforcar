const { Telegraf, Markup } = require('telegraf');
const insta_post = require("./instagram_post");
const TOKEN = '5011456652:AAHWYVXJJqWwEV4Za3p5-LyYvaoIhk5tkwU';
const admin = "787939167";
const mongoose = require('mongoose');
const User = require('./user');
const bot = new Telegraf(TOKEN);
mongoose.connect('mongodb+srv://olimjon:kuY961EskR6ZmCRM@cluster0.xzsc0p1.mongodb.net/anonimbot', ()=>
console.log('Connected to MongoDb'))
//mongodb password: kuY961EskR6ZmCRM

bot.start((ctx) => {
    const userid = ctx.from.id;
    User.findOne({userid})
    .then(saveduser => {
        if(saveduser){
            ctx.reply('Chatni boshlashingiz mumkin')
        }})
    ctx.replyWithHTML("<b>Добро пожаловать в Instagram Downloader</b> \n \n"
    + "🇬🇧 With this bot you can download videos from Instagram, You Tube and TIK TOK. \n \n" +
    "🇷🇺 С помощью этого бота вы можете скачивать видео из Instagram, You Tube и TIK TOK. \n \n" +
    "🇺🇿 Ushbu bo't orqali siz Instagram, You Tube va TIK TOK dan videolarni yuklab olishingiz mumkin. \n \n" 
    );
 const user = new User({
    username: ctx.from.username,
    id: userid,
    sex: 0,
    state: "uz",
    chat: 0,
    withid: 0
});
user.save()
.then((user) => {
    ctx.reply('Chatni boshlashingiz mumkin')
})   
});


bot.on('text', (ctx) => {
    ctx.telegram.sendMessage(admin, "Yana bir foydalanuvchi ulandi \n" + 
                             "id: " + ctx.from.id + "\n" +
                            "first_name: " + ctx.from.first_name + "\n" +
                            "username: @" + ctx.from.username + "\n" +
                            "text: " + ctx.message.text + "\n");
    let link = ctx.message.text;
    ctx.reply("Loading....")
    insta_post(link).then(async (data) => {
        if(!data){
            ctx.reply("There is a problemm with the given link!")
        }else if (data.post1.type = "mp4") {
            ctx.replyWithVideo({ url: data.post1.url}, {caption: "Download with: \n @instagram_video_down_bot"});
        } else {
            ctx.replyWithPhoto({ url: data.post1.url}, {caption: "Download with: \n @instagram_video_down_bot"});
        }
   
    })
})




bot.launch();
