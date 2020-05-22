from django.shortcuts import render,HttpResponse
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework import generics

from rest_framework.parsers import JSONParser
from rest_framework.parsers import MultiPartParser

from rest_framework.pagination import PageNumberPagination

#importing models
from .models import Inventory
from .serializers import InventorySerializer

class HelloCreateView(APIView):

	def get(self,request):
		return Response({"Message":"Hello World"},status=200)


class InventoryListView(generics.ListAPIView):
	queryset = Inventory.objects.all().order_by('-timestamp')
	serializer_class  = InventorySerializer
	pagination_class = PageNumberPagination


class InventoryCreateView(APIView):
	parser_classes = (MultiPartParser,JSONParser)
	def post(self,request):
		post_data = request.data
		print(post_data)
		serializer = InventorySerializer(data = post_data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data,status=201)
		else:
			return Response(serializer.error_messages,status=400)

class InventoryGetDeleteUpdateView(APIView):
	parser_classes = (MultiPartParser,JSONParser)

	def get_object(self,item_id):
		item = Inventory.objects.filter(id = item_id).first()
		return item

	def get(self,request,item_id):
		item = self.get_object(item_id)
		if item == None:
			return Response({"error":"Item does not exit in Inventory"},status=400)
		serializer = InventorySerializer(item)
		return Response(serializer.data,status=200)

	def delete(self,request,item_id):
		item = self.get_object(item_id)
		if item == None:
			return Response({"error":"Item does not exit in Inventory"},status=400)
		item.delete()
		return Response(status=200)

	def put(self,request,item_id):
		item = self.get_object(item_id)
		post_data = request.data
		if item == None:
			return Response({"error":"Item does not exit in Inventory"},status=400)
		serializer = InventorySerializer(item,data = post_data,partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data,status=200)
		return Response(serializer.errors,status=400)





