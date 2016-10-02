
from rest_framework import status
from rest_framework.exceptions import APIException
from rest_framework.decorators import api_view
from rest_framework.response import Response
from weatherman import utils
from weatherman.exceptions import ApiCallFailed
from .serializers import WeatherInfoSerializer
from .objects import WeatherInfo

@api_view(['GET'])
def weather(request, city):
    """
    Returns weather information from a particular city
    """
    if city is None:
        return APIException("Missing city parameter")

    try:
        weather_provider_class = utils.get_setting('WEATHER_PROVIDER')
        weather_provider = utils.module_member(weather_provider_class)
        provider_instance = weather_provider()

        res = provider_instance.get_weather_data(city)
    except ApiCallFailed:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return Response(res)