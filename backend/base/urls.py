from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,

)

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
    path('users/', views.getUserProfile, name="users-profile"),
    path('users/register/',views.registerUser,name="register"),
    path('products/', views.getProducts, name="routes"),
    path('users/profile/', views.getUserProfile, name="users-profile"),
    path('products/<str:pk>/', views.getProduct, name="product"),

]
