class WeatherInfo(object):
    """
    Holds stats about the weather of a particular city
    """
    def __init__(self, city, min_temp, max_temp, average_temp, humidity):
        self.city = city
        self.min_temp = min_temp
        self.max_temp = max_temp
        self.average_temp = average_temp
        self.humidity = humidity