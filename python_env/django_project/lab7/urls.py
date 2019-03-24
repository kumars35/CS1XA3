from django.urls import path
from . import views

urlpatterns = [
    path('', views.lab7, name="home")
]

