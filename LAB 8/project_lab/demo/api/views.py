from django.http.response import JsonResponse
from api.models import Product
from api.models import Categories


def product_list(request):
    # select * from api_product;
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe = False)

def categories_list(request):
    categories = Categories.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe = False)