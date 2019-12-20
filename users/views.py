from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from knox.models import AuthToken

from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from .models import User

class RegisterAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save() # creates new instance of serializer or updates serializer (ONLY create/update)
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

