from rest_framework import serializers
# from rest_framework_jwt.settings import api_settings
from django.contrib.auth import authenticate
from .models import User

class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    email = serializers.EmailField(read_only=True)
    date_joined = serializers.DateTimeField(read_only=True)

    # def create(self, validated_data):
    #     new_user = User.objects.create_user(**validated_data)
    #     return new_user

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

# class UserSerializerToken(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     email = serializers.EmailField()
#     date_joined = serializers.DateTimeField(read_only=True)
#     password = serializers.CharField(write_only=True)
#     token = serializers.SerializerMethodField()

#     def get_token(self, object):
#         jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
#         jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

#         payload = jwt_payload_handler(object)
#         token = jwt_encode_handler(payload)
#         return token

#     def create(self, validated_data):
#         new_user = User.objects.create_user(**validated_data)
#         return new_user
