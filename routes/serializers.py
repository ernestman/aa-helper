from rest_framework import serializers
from .models import Route

class RouteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    start_lat = serializers.FloatField()
    start_lon = serializers.FloatField()
    end_lat = serializers.FloatField()
    end_lon = serializers.FloatField()
    travel_mode = serializers.CharField()
    # start_city = serializers.CharField(read_only=True)
    # end_city = serializers.CharField(read_only=True)
    # time = serializers.CharField(read_only=True)
    # distance = serializers.CharField(read_only=True)
    # directions = serializers.ListField(
    #     child=serializers.CharField(),
    #     allow_empty=True
    # )