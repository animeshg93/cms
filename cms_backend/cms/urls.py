from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('addAdmin/', views.addAdmin, name='admin'),
    path('getNames/',views.getNames, name='getNames'),
]