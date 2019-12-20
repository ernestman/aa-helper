# from django.urls import path, include
# from django.contrib.auth import views as auth_views
# from . import views

# urlpatterns = [
#     path('register', views.register, name='register'),
#     path('login', views.login_view, name='login'),
#     path('logout', views.logout_view, name='logout'),
#     path('show/<int:id>', views.show, name='show'),
#     path('delete/<int:id>', views.delete, name='delete')
# ]

from django.urls import path, include
# from .views import CreateUserAPIView, GetUserAPIView
from .views import RegisterAPIView, LoginAPIView, GetUserAPIView
from knox.views import LogoutView
# from rest_framework_jwt.views import obtain_jwt_token
# from . import views

urlpatterns = [
    path("register", RegisterAPIView.as_view()),
    path("login", LoginAPIView.as_view()),
    path("show/<int:id>", GetUserAPIView.as_view()),
    path("logout", LogoutView.as_view(), name="knox=logout") # post 
    # path("login", login_user)
]