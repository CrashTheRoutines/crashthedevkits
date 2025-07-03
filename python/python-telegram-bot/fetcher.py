import feedparser
from config import RSS_URL

def fetch_news():
    feed = feedparser.parse(RSS_URL)
    articles = []
    for entry in feed.entries:
        articles.append({
            'title': entry.title,
            'link': entry.link,
            'summary': entry.summary if 'summary' in entry else ''
        })
    return articles
