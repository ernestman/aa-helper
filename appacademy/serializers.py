from rest_framework import serializers

class BusinessSerializer(serializers.Serializer):
    name = serializers.CharField(read_only=True)
    image_url = serializers.CharField(read_only=True)
    is_closed = serializers.BooleanField(read_only=True)
    url = serializers.CharField(read_only=True)
    review_count = serializers.IntegerField(read_only=True)
    categories = serializers.CharField(read_only=True)
    rating = serializers.FloatField(read_only=True)
    # price = serializers.CharField(read_only=True)
    display_address = serializers.CharField(read_only=True)
    display_phone = serializers.CharField(read_only=True)
    distance = serializers.FloatField(read_only=True)
    