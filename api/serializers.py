from rest_framework import serializers

class WeatherInfoSerializer(serializers.Serializer):
    city = serializers.CharField(max_length=200)
    min_temp = serializers.FloatField()
    max_temp = serializers.FloatField()
    average_temp = serializers.FloatField()
    humidity = serializers.IntegerField(min_value=0, max_value=100)