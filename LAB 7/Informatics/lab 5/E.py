import math
a = int(input())
my_list = list(map(int, input().split()))


cnt = 0
for i in range(1, a):
    if my_list[i-1] >= 0 and 0 <= my_list[i] or my_list[i-1] < 0 and my_list[i] < 0:
        cnt+=1

if cnt == 0:
    print("NO")
else:
    print("YES")