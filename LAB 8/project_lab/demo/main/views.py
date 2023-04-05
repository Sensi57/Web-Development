from django.http.response import HttpResponse, JsonResponse

from datetime import datetime, timedelta


def home(request):
    """Home page view"""
    return HttpResponse("<h1 style='color: red;'>home page</h1>")


def about(request):
    """About page view"""
    return HttpResponse("<h1 style='color: red;'>about page</h1>")


def hours_ahead(request, hour):
    time_str = datetime.now() + timedelta(hours=int(hour))
    return HttpResponse(f"<h1 style='color: red;'>Date time: {time_str}</h1>")


products = [
    {
        'id': _id,
        'name': f'Product {_id}',
        'price': _id * 1000,
        'category': _id % 2 + 1
    }
    for _id in range(1, 10)
]


def product_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product not found'})


categories = [
    {
        'id': _id,
        'name': f'Categories {_id}'
    }
    for _id in range(1, 10)
]

def categories_list(request):
    return JsonResponse(categories, safe=False)

def categories_detail(request, categories_id):
    for category in categories:
        if category['id'] == categories_id:
            return JsonResponse(category)
    return JsonResponse({'error': 'Category not found'})

def categories_products(request, categories_id):

    list = []
    for i in products:
        if i['category'] == categories_id:
            list.append(i)

    return JsonResponse(list, safe = False)