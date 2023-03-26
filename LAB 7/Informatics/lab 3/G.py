import math
a = int(input())

for i in range(2,30000):
    if a % i == 0:
        print(i)
        break 