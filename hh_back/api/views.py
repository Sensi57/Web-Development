from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *

def index(request):
    return HttpResponse("Site view Api")

def list_of_comp(request):
    company = Company.objects.all()
    comp_json = [comp.to_json() for comp in company]
    return JsonResponse(comp_json, safe = False)

def get_comp(request, id):
    get_comp = Company.objects.get(id = id)
    comp_json = get_comp.to_json()
    return JsonResponse(comp_json , safe = False)

def vac_comp(request, id):
    get_comp = Company.objects.get(id = id)
    filter_vac = Vacancy.objects.filter(company = get_comp)
    vac_json = [vac.to_json() for vac in filter_vac]
    return JsonResponse(vac_json, safe = False)

def list_of_vac(request):
    vacancy = Vacancy.objects.all()
    vac_json = [vac.to_json() for vac in vacancy]
    return JsonResponse(vac_json, safe = False)

def get_vac(request, id):
    get_vac = Vacancy.objects.get(id = id)
    vac_json = get_vac.to_json()
    return JsonResponse(vac_json , safe = False)

def top_ten(requst):
    get_vac = Vacancy.objects.all().order_by('-salary')
    if len(get_vac) <= 10:
        vac_json = [vac.to_json() for vac in get_vac]
    else:
        vac_json = [get_vac[i].to_json() for i in range(10)]
    return JsonResponse(vac_json , safe = False)
    

# Create your views here.
