import math
a = int(input())
b = int(input())

def my_f(a , b):
    s = ""
    for i in range (a, b+1):
        if math.sqrt(i) % 1 == 0:
            s = s + str(i) + " "
    return s

if a > b:
    print(0)
else :
    print(my_f(a, b))