from django.urls import path, include
from .views import RegisterAPIView, LoginAPIView, GetUserAPIView
from knox.views import LogoutView

urlpatterns = [
    path("register", RegisterAPIView.as_view()),
    path("login", LoginAPIView.as_view()),
    path("show/<int:id>", GetUserAPIView.as_view()),
    path("logout", LogoutView.as_view(), name="knox=logout") # post 
]