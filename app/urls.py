from django.urls import path
from . import api

urlpatterns = [
    path('index.html', api.index),
    path('main.html', api.main),
    path('info.html', api.info)
]
