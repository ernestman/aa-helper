# from django.shortcuts import render
# from .models import CustomUser
# from django.contrib.auth import authenticate, login, logout
# from django.http import HttpResponse, JsonResponse

# from django.forms.models import model_to_dict

# import json
# from django.views.decorators.csrf import csrf_exempt
# from django.contrib.auth.decorators import login_required

# @csrf_exempt
# def register(request):
#     data = json.loads(request.body)
#     email = data['email']
#     password = data['password']

#     new_user = CustomUser.objects.create_user(email, password)
#     if new_user:
#         user = authenticate(email=email, password=password)
#         login(request, user)
#         return JsonResponse(model_to_dict(user))

# @csrf_exempt
# def login_view(request):
#     data = json.loads(request.body)
#     email = data['email']
#     password = data['password']

#     user = authenticate(email=email, password=password)
#     if user:
#         login(request, user)
#         return JsonResponse(model_to_dict(user))
#     else:
#         return HttpResponse("Invalid credentials", content_type="json")

# def logout_view(request):
#     logout(request)
#     return HttpResponse("Logout successful", content_type="json")

# # @login_required # automatically redirectsto default from settings, need to set
# def show(request, id):
#     if not request.user.is_authenticated:
#         return HttpResponse("Must be logged in", content_type="json")
#     user = CustomUser.objects.get(id=id)
#     if user:
#         return JsonResponse(model_to_dict(user))

# @csrf_exempt
# def delete(request, id):
#     user = CustomUser.objects.get(id=id)
#     if user:
#         user.delete()
#         return JsonResponse(model_to_dict(user))

from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from knox.models import AuthToken
# from rest_framework import status
# from rest_framework_jwt.utils import jwt_payload_handler

# from .serializers import UserSerializer, UserSerializerToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from .models import User

class RegisterAPIView(APIView):
# class CreateUserAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # user = request.data
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save() # creates new instance of serializer or updates serializer (ONLY create/update)
        # return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({
            "user": serializer.data,
            "token": AuthToken.objects.create(user)[1]
        })

class LoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data # if serializer data is _valid ^^^ we can access it
        return Response({
            "user": serializer.data,
            "token": AuthToken.objects.create(user)[1]
        })

class GetUserAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        user = User.objects.get(id=id)
        serializer = UserSerializer(user)
        return Response(serializer.data)
        # return Response(serializer.data, status=status.HTTP_200_OK)

# @api_view(['POST'])
# @permission_classes([AllowAny])
