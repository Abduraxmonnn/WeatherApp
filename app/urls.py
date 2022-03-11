from django.urls import path
from . import api

urlpatterns = [
    path('index.html', api.index),
]
