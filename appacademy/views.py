from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .serializers import BusinessSerializer
from users.util import getYelpBusinesses

class GetYelpAPIView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):

        print(request.query_params)

        lat = 37.7989708
        lng = -122.4035458
        if len(request.query_params.keys()) > 0:
            if request.query_params["office"] == 'false':
                lat = 40.7512857
                lng = -73.9861788


        places = getYelpBusinesses(lat, lng)
        business_serializer = BusinessSerializer(places, many=True)
        return Response({
            "businesses": business_serializer.data
        })

# change getYelpBusinesses util call
