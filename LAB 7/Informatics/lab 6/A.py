import math

num_str = input().split(" ")
a = num_str[0]
b = num_str[1]
c = num_str[2]
d = num_str[3]

def min(a,b,c,d):
    min = a
    if min > b:
        min = b
    if min > c:
        min = c
    if min > d:
        min = d
    return min

print(min(a, b, c, d))