from django.contrib.auth.models import User
from django.db import models


class Restaurant(models.Model):

    name = models.CharField(max_length=32)
    address = models.CharField(max_length=64)
    description = models.CharField(max_length=64)
    contact = models.IntegerField()

    def __str__(self):
        return self.name

class Item(models.Model):

    name = models.CharField(max_length=32)
    quantity = models.CharField(max_length=32)
    price = models.IntegerField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Order(models.Model):

    user = models.ForeignKey(User, on_delete=models.PROTECT)
    item = models.ForeignKey(Item, on_delete=models.PROTECT)




