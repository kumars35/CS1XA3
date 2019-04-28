from django.contrib import admin
from .models import *

# Register your models here.

class RestuarentAdmin(admin.ModelAdmin):
    fields = ('name','address','description','contact')


class ItemAdmin(admin.ModelAdmin):
    fields = ('name','quantity','price','restaurant')


class OrderAdmin(admin.ModelAdmin):
    user = ('user','item')


admin.site.register(Restaurant, RestuarentAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Item, ItemAdmin)
