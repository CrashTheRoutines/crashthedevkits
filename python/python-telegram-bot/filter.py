from config import KEYWORDS

def is_relevant(article):
    text = (article['title'] + " " + article['summary']).lower()
    return any(keyword.lower() in text for keyword in KEYWORDS)
