# from bs4 import BeautifulSoup as BS
# import requests
#
#
# def parser_daryo():
#     r = requests.get('https://daryo.uz/')
#     html = BS(r.content, 'html.parser')
#
#     for el in html.select(".Block1Col2 > .topPost2"):
#         title = el.select('.postText')
#         print(title[0].text)
#
#
# parser_daryo()

from newsapi import NewsApiClient

# Init
newsapi = NewsApiClient(api_key='f97c460fe88f4acd87d698277576f2bc')

# /v2/top-headlines
top_headlines = newsapi.get_top_headlines(q='bitcoin',
                                          sources='bbc-news,the-verge',
                                          category='business',
                                          language='en',
                                          country='us')

# /v2/everything
all_articles = newsapi.get_everything(q='bitcoin',
                                      sources='bbc-news,the-verge',
                                      domains='bbc.co.uk,techcrunch.com',
                                      from_param='2017-12-01',
                                      to='2017-12-12',
                                      language='en',
                                      sort_by='relevancy',
                                      page=2)

# /v2/top-headlines/sources
sources = newsapi.get_sources()