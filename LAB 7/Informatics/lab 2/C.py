import math
a = int(input())
b = int(input())

def my_f(a,b):
    if a != 1 and b != 1:
        return "YES"
    elif a == 1 and b == 1:
        return "YES"
    else:
        return "NO"

print(my_f(a, b))
 