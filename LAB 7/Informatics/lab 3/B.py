import math
a = int(input())
b = int(input())
c = int(input())
d = int(input())

def my_f(a,b,c,d):
    s = ''
    for i in range(a,b+1):
        if i % d == c :
            s = s + str(i) + " "
    return s
print(my_f(a, b, c, d))