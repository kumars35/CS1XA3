from django.conf.urls import url, include
from rest_framework.authtoken.views import obtain_auth_token

from .views import *


urlpatterns = [
    url(r'restaurant/$', RestaurantAPI.as_view()),
    url(r'items/$', ItemsAPI.as_view()),
    url(r'items/(?P<restaurant_id>\d+)/$', ItemsByRestuarentAPI.as_view()),
    url(r'createOrder/$',CreateOrderAPI.as_view()),
    url(r'orders/$', OrderAPI.as_view()),
    url(r'api-token-auth/$', obtain_auth_token, name='api_token_auth'),
    url(r'register/$', UserRegistrationAPI.as_view()),
]

