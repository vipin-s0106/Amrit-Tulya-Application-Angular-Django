from rest_framework.test import APITestCase

from django.urls import reverse
from rest_framework import status

from .serializers import InventorySerializer
from .models import Inventory


class AddItemToInventory(APITestCase):

	def test_add_item(self):
		data = {
			"name":"Item1",
			"description":"Desc1",
			"price":10.0
		}
		response = self.client.post('/api/inventory/add/', data)
		self.assertEqual(response.status_code,status.HTTP_201_CREATED)

	def test_add_item_with_invalidData(self):
		data = {
			"name":"Item1",
			"description":"Desc1",
		}
		response = self.client.post("/api/inventory/add/", data)
		self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)

	def test_getItemList(self):
		response = self.client.get("/api/inventory/list/")
		self.assertEqual(response.status_code,status.HTTP_200_OK)

	def test_getItemByPageNo(self):
		response = self.client.get("/api/inventory/list/?page=1")
		self.assertEqual(response.status_code,status.HTTP_200_OK)


	def test_getItemListByInvalidPageNo(self):
		response = self.client.get("/api/inventory/list/?page=100")
		self.assertEqual(response.status_code,status.HTTP_404_NOT_FOUND)


	def test_getItemDetail(self):
		data = {
			"name":"Item1",
			"description":"Desc1",
			"price":10.0
		}
		response = self.client.post('/api/inventory/add/', data)
		response = self.client.get("/api/inventory/item/"+str(response.data['id'])+"/")
		self.assertEqual(response.status_code,status.HTTP_200_OK)


	def test_deleteItem(self):
		data = {
			"name":"Item1",
			"description":"Desc1",
			"price":10.0
		}
		response = self.client.post('/api/inventory/add/', data)
		response = self.client.delete("/api/inventory/item/"+str(response.data['id'])+"/")
		self.assertEqual(response.status_code,status.HTTP_200_OK)







