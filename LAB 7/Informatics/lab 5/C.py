import math
a = int(input())
my_list = list(map(int, input().split()))

cnt = 0
for i in range(a):
    if my_list[i] > 0:
        cnt+=1

print(cnt)