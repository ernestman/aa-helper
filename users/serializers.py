from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User

class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    email = serializers.EmailField(read_only=True)
    date_joined = serializers.DateTimeField(read_only=True)

class RegisterSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    email = serializers.EmailField()
    date_joined = serializers.DateTimeField(read_only=True)
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        new_user = User.objects.create_user(**validated_data)
        return new_user

class LoginSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    email = serializers.CharField()
    date_joined = serializers.DateTimeField(read_only=True)
    password = serializers.CharField(write_only=True)

    def validate(self, validated_data):
        user = authenticate(
            email=validated_data["email"],
            password=validated_data["password"]
        )
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
