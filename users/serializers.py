from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User

from rest_framework.response import Response
from rest_framework import status

class RegisterSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    email = serializers.EmailField()
    sf_office = serializers.BooleanField()
    password = serializers.CharField(write_only=True)
    date_joined = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        new_user = User.objects.create_user(**validated_data)
        return new_user

class LoginSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    email = serializers.CharField()
    sf_office = serializers.BooleanField(read_only=True)
    password = serializers.CharField(write_only=True)
    date_joined = serializers.DateTimeField(read_only=True)

    def validate(self, validated_data):
        user = authenticate(
            email=validated_data["email"],
            password=validated_data["password"]
        )
        if user and user.is_active:
            return user
        else:
            raise serializers.ValidationError({"email": "Incorrect Credentials"})

