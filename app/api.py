import datetime

from django.shortcuts import render
import requests
from newsapi import NewsApiClient

from .models import City
from .forms import CityForm


def main(request):
    newsApi = NewsApiClient(api_key='f97c460fe88f4acd87d698277576f2bc')
    headLines = newsApi.get_top_headlines(sources='bbc, ign')
    articles = headLines['articles']
    desc = []
    news = []
    img = []
    link = []

    for i in range(len(articles)):
        article = articles[i]
        desc.append(article['description'])
        news.append(article['title'])
        img.append(article['urlToImage'])
        link.append(article['url'])
    mylist = zip(news, desc, img, link)

    return render(request, "weather/main.html", context={"first_mylist": mylist})


def info(request):
    return render(request, 'weather/info.html')


def index(request):
    appid = '846801b52dfcdf6d8d840177d4bc5397'
    url = 'https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid=' + appid

    if request.method == 'POST':
        form = CityForm(request.POST)
        form.save()

    form = CityForm()

    cities = City.objects.all()

    all_cities = []

    for city in cities:
        res = requests.get(url.format(city.name)).json()
        city_info = {
            'city': city.name,
            'temp': res["main"]["temp"],
            'icon': res["weather"][0]["icon"],
            'description': res['weather'][0]['description'],
            'speed': res['wind']['speed']
        }

        all_cities.append(city_info)

        context = {'all_info': all_cities, 'form': form}

        return render(request, 'weather/index.html', context)
