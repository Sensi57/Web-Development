from django.urls import path, re_path
from main import views

urlpatterns = [
    path('home/', views.home),
    path('about/', views.about),
    re_path(r'^time/plus/(\d{1,2})/$', views.hours_ahead),
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.categories_list),
    path('categories/<int:categories_id>', views.categories_detail),
    path('categories/<int:categories_id>/products', views.categories_products)
]