from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated

from knox.models import AuthToken
from .util import routes_google_api, getYelpBusinesses

from .serializers import RegisterSerializer, LoginSerializer
from routes.serializers import RouteSerializer
from .models import User

class RegisterAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):

        email = request.data["email"]
        try:
            user = User.objects.get(email=email)
            return Response({
                "email": ["Email has already been taken"]
            }, status=status.HTTP_400_BAD_REQUEST)

        except:
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
        user_serializer = LoginSerializer(data=request.data)
        user_serializer.is_valid(raise_exception=True)
        user = user_serializer.validated_data # if serializer data is _valid ^^^ we can access it

        routes = User.objects.get(id=user.id).routes.all()
        routes_api_request = routes_google_api(routes)

        routes_serializer = RouteSerializer(routes_api_request, many=True)
        return Response({
            "user": user_serializer.data,
            "routes": routes_serializer.data,
            "token": AuthToken.objects.create(user)[1]
        })

    # permission_classes = [AllowAny]
    # def post(self, request):
    #     user_serializer = LoginSerializer(data=request.data)
    #     user_serializer.is_valid(raise_exception=True)
    #     # if serializer data is _valid ^^^ we can access it
    #     user = user_serializer.validated_data

    #     routes = User.objects.get(id=user.id).routes.all()
    #     routes_serializer = RouteSerializer(routes, many=True)
    #     return Response({
    #         "user": user_serializer.data,
    #         "routes": routes_serializer.data,
    #         "token": AuthToken.objects.create(user)[1]
    #     })
