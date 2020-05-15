from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.user_login, name='user_login'),
    path('logout/', views.user_logout, name='user_logout'),
    path('addAdmin/', views.addAdmin, name='admin'),
    path('getNames/',views.getNames, name='getNames'),
    path('getPlayers/',views.getPlayers, name='getPlayers'),
    path('addPlayer/',views.addPlayer, name='addPlayer'),
]