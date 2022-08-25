const { Telegraf, Markup } = require('telegraf');
const instagram = require("@phaticusthiccy/open-apis");
const TOKEN = '5011456652:AAHWYVXJJqWwEV4Za3p5-LyYvaoIhk5tkwU';


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
    let link = ctx.message.text;
    instagram.insta_post(link).then(async (data) => {
        if (data.post1.type = "mp4") {
            ctx.replyWithVideo(data.post1.url)
        } else {
            ctx.replyWithPhoto(data.post1.url)
        }
    })
})




bot.launch();
