from django.urls import path, include
from .views import CreateRouteAPIView, IndexRouteAPIView, DeleteRouteAPIView

urlpatterns = [
    path("create", CreateRouteAPIView.as_view()),
    path("index", IndexRouteAPIView.as_view()),
    path("delete/<int:id>", DeleteRouteAPIView.as_view())
]