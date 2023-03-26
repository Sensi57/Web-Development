import math

num_str = input().split(" ")
a = float(num_str[0])
b = int(num_str[1])

def my_fun(a, b):
    return a**b

print(my_fun(a, b))