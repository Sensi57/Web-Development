import math
a = input()
sum = 0

for i in range(0,len(a)):
    b = int(a[i])
    sum = b * (2 ** (len(a) - 1 - i)) + sum 

print(sum)

