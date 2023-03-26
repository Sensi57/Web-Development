import math
a = int(input())
my_list = list(map(int, input().split()))

cnt = 0
for i in range(1, a):
    if my_list[i-1] < my_list[i]:
        cnt+=1

print(cnt)