from .base import BaseWeather

class OpenWeather(BaseWeather):
    """An Openweathermap weather provider"""
    name = 'openweathermap'  # provider name
    URL = 'http://api.openweathermap.org/data/2.5/forecast/city'
    SETTING_KEY= 'OPEN_WEATHER_KEY'
    EXTRA_PARAMS = {'units': 'metric'}
