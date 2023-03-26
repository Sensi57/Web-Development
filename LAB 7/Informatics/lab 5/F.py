import math
a = int(input())
my_list = list(map(int, input().split()))

cnt = 0
for i in range(2, a):
    if my_list[i] < my_list[i-1] and my_list[i-1] > my_list[i-2]:
        cnt+=1
    
print(cnt)