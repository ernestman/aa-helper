from django.urls import path, include
from .views import GetUserAPIView
from knox.views import LogoutView

urlpatterns = [
    path("show/<int:id>", GetUserAPIView.as_view()),
]