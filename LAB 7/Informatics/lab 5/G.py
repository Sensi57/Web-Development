import math
a = int(input())
my_list = list(map(int, input().split()))

cnt = 0
for i in reversed(range(a)):
    print(my_list[i], end=" ")