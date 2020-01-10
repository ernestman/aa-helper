from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from users.util import routes_google_api
from .serializers import RouteSerializer
from .models import Route
from users.models import User

class CreateRouteAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        new_route = Route.objects.create(
            name=request.data["name"],
            start_lat=request.data["start_lat"],
            start_lon=request.data["start_lon"],
            end_lat=request.data["end_lat"],
            end_lon=request.data["end_lon"],
            travel_mode=request.data["travel_mode"],
            user = request.user  
        )
        routes_api_request = routes_google_api([new_route])[0]

        serializer = RouteSerializer(routes_api_request)
        return Response(serializer.data)

class IndexRouteAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        routes = User.objects.get(id=request.user.id).routes.all()
        serializer = RouteSerializer(routes, many=True)
        return Response(serializer.data)

class DeleteRouteAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def delete(self, request, id):
        route = Route.objects.get(id=id)
        route.delete()
        serializer = RouteSerializer(route)
        return Response(serializer.data)