import math
a = int(input())
b = int(input())

def my_f(a,b):
    if a > b :
        return 1
    elif b > a :
        return 2
    else :
        return 0

print(my_f(a, b))