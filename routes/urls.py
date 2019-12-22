from django.urls import path, include
from .views import CreateRouteAPIView, IndexRouteAPIView

urlpatterns = [
    path("create", CreateRouteAPIView.as_view()),
    path("index", IndexRouteAPIView.as_view())
]