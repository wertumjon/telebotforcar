const { Telegraf, Markup } = require('telegraf');
const insta_post = require("./instagram_post");
const TOKEN = '5011456652:AAHWYVXJJqWwEV4Za3p5-LyYvaoIhk5tkwU';
const admin = "787939167";

const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.replyWithHTML("<b>Добро пожаловать в Instagram Downloader</b> \n \n"
    + "<b>Этот бот может:</b> \n" +
    "⬇️ Скачать: посты, IG TV, аватарку и био из аккаунтов,  актуальные и временные истории 👁 Анонимно посмотреть истории \n" +
    "📝 Сделать правильные абзацы для Instagram \n" +
    "🔔 Уведомлять о появлении новых историй в открытых аккаунтах \n" +
    "🔒 Подключить свой аккаунт для взаимодействия с закрытыми аккаунтами \n \n" +
    "✉️ Пишите в поддержку — @instagram_video_down_bot, если нужна помощь \n \n" +
    "Сделано с ❤️"));


bot.on('text', (ctx) => {
    ctx.telegram.sendMessage(admin, "Yana bir foydalanuvchi ulandi id: " + ctx.from.id);
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
