from django.shortcuts import render
import requests
from .models import City
from .forms import CityForm


def main(request):
    return render(request, 'weather/main.html')


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
