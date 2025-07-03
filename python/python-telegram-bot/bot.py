import asyncio
from telegram import Bot
from fetcher import fetch_news
from filter import is_relevant
from config import BOT_TOKEN, CHANNEL_ID

bot = Bot(token=BOT_TOKEN)

async def main():
    articles = fetch_news()
    for article in articles:
        if is_relevant(article):
            message = f"📰 <b>{article['title']}</b>\n{article['link']}"
            await bot.send_message(chat_id=CHANNEL_ID, text=message, parse_mode='HTML')

if __name__ == "__main__":
    asyncio.run(main())


# Reply buttom

from telegram import ReplyKeyboardMarkup

keyboard = [
    ["Кнопка 1", "Кнопка 2"],
    ["Кнопка 3"]
]

reply_markup = ReplyKeyboardMarkup(keyboard, resize_keyboard=True)

await update.message.reply_text("Выберите кнопку:", reply_markup=reply_markup)

# Inline buttom

from telegram import InlineKeyboardMarkup, InlineKeyboardButton

keyboard = [
    [
        InlineKeyboardButton("Нажми меня", callback_data="my_callback"),
        InlineKeyboardButton("Сайт", url="https://example.com")
    ]
]

reply_markup = InlineKeyboardMarkup(keyboard)

await update.message.reply_text("Нажмите кнопку:", reply_markup=reply_markup)

from telegram.ext import CallbackQueryHandler

async def handle_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    await query.edit_message_text(f"Вы нажали: {query.data}")

# в main.py
app.add_handler(CallbackQueryHandler(handle_callback))

# Delete keyboard

from telegram import ReplyKeyboardRemove

await update.message.reply_text("Клавиатура скрыта", reply_markup=ReplyKeyboardRemove())
