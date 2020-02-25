from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .serializers import BusinessSerializer
from users.util import getYelpBusinesses

class GetYelpAPIView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        places = getYelpBusinesses(37.7989708, -122.4035458)
        business_serializer = BusinessSerializer(places, many=True)
        return Response({
            "businesses": business_serializer.data
        })

# change getYelpBusinesses util call