from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'inventory'

urlpatterns = [
	url('^api/inventory/list/$',views.InventoryListView.as_view(),name="inventory_list"),
	url('^api/inventory/add/$',views.InventoryCreateView.as_view(),name="item_add"),
	url('^api/inventory/item/(?P<item_id>[0-9]+)/$',views.InventoryGetDeleteUpdateView.as_view(),name="item_get_update_delete"),
]