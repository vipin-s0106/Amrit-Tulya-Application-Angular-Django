from django.db import models
from django.utils import timezone

from django.utils.translation import gettext_lazy as _

# Create your models here.

def upload_inventory_item_image(instance, filename):
	return "Inventory/{0}".format(filename)



class Inventory(models.Model):
	name = models.CharField(_('name'),null=False,blank=False,max_length=150)
	description = models.CharField(_('description'),null=False,blank=False,max_length=1000)
	price = models.FloatField(_('price'),null=False,blank=False)
	file = models.FileField(_('img'), null=True, blank=True, upload_to=upload_inventory_item_image)
	timestamp = models.DateTimeField(_('timestamp'), default=timezone.now)

	def __str__(self):
		return "ItemID - "+str(self.id)+" Name - "+str(self.name)
