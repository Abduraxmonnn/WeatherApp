from django.urls import path
from . import api

urlpatterns = [
    path('', api.main, name='main'),
    path('index.html/', api.index, name='index'),
    path('info.html/', api.info, name='info')
]
