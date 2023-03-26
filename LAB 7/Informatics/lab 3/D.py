import math
a = int(input())
b = int(input())

def my_f(a ,b):
    x = int(0)
    for i in range(a):
        if a > 0:
            if a % 10 == b:
                x += 1
        a = a // 10
    print(x)

my_f(a, b)