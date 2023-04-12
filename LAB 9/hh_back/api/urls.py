from .views import *
from django.urls import path, include

urlpatterns = [
    path('', index),
    path('companies/', list_of_comp),
    path('companies/<int:id>/', get_comp),
    path('companies/<int:id>/vacancies', vac_comp),  
    path('vacancies/', list_of_vac),
    path('vacancies/<int:id>/', get_vac),
    path('vacancies/top_ten/', top_ten),
]