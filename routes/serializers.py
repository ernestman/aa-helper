from rest_framework import serializers
from .models import Route

class RouteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    start_lat = serializers.FloatField()
    start_lon = serializers.FloatField()
    end_lat = serializers.FloatField()
    end_lon = serializers.FloatField()