from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from project3.authentication.serializers import UserSerializer, CreateUserSerializer
from .models import *
from .serializers import *


class RestaurantAPI(APIView):

    def get(self, request):
        restuatents = Restaurant.objects.all()
        serializer = RestaurantSerializer(restuatents, many=True)
        return Response(serializer.data)


class ItemsAPI(APIView):

    def get(self, request):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)


class ItemsByRestuarentAPI(APIView):

    def get(self, request, restaurant_id):
        items = Item.objects.filter(restaurant__id=restaurant_id)
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)


class OrderAPI(APIView):

    def get(self, request,):
        orders = Order.objects.filter(user__id=request.user.id)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)


class CreateOrderAPI(APIView):

    def post(self, request):
        try:
            items = request.data['items']
        except KeyError as e:
            response = {
                "message": "Missing value for " + str(e),
                "status": "FAILED"
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


        for item in items:
            order = Order(user=User.objects.get(id=request.user.id),
                          item=Item.objects.get(id=item['id']))
            order.save()

        return Response({"status":"Order Placed"})


class UserRegistrationAPI(APIView):
    def post(self, request):
        serialized = CreateUserSerializer(data=request.data)
        if serialized.is_valid():
            serialized.save()
            # User.objects.create_user(serialized.data)
            return Response(serialized.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)
