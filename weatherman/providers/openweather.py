from requests import request, ConnectionError
from .base import BaseWeather
from django.conf import settings


class OpenWeather(BaseWeather):
    """An Openweathermap weather provider"""
    name = 'openweathermap'  # provider name
    URL = 'http://api.openweathermap.org/data/2.5/forecast/city'
    SETTING_KEY= 'OPEN_WEATHER_KEY'
