from django.contrib import admin
from .models import User
from routes.models import Route

admin.site.register(User)
admin.site.register(Route)