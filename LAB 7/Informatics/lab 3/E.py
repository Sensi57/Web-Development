import math
a = int(input())

sum = 0
for i in range(a):
    if a > 0:
        sum = sum + a % 10
    a = a // 10
    
print(sum)