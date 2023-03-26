import math
a = int(input())
my_list = list(map(int, input().split()))

for i in range(a):
    if i % 2 == 0:
        print(my_list[i], end=" ") 