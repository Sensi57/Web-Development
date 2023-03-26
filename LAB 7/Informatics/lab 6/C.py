import math

num_str = input().split(" ")
x = int(num_str[0])
y = int(num_str[1])

def xor(x, y):
    if x == 0 and y == 1:
        return y
    elif x == 1 and y == 0:
        return x
    elif x == 1 and y == 1:
        return 0
    else:
        return 0
    
print(xor(x, y))