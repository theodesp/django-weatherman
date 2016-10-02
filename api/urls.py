from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    url(r'^weather/(?P<city>[\w\-]+)/$', views.weather)
]

urlpatterns = format_suffix_patterns(urlpatterns)