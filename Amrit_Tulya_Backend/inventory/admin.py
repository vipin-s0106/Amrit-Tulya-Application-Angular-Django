from django.contrib import admin
from .models import Inventory
from django.contrib.auth.models import User

# Register your models here.
admin.site.register(Inventory)