import math
a = int(input())
if a == 0:
    print(0)
elif a> 100000:
    cnt=0
    for x in range(1, int(math.sqrt(a))):
        if a % x == 0:
            cnt+=2
    if math.sqrt(a) == int(math.sqrt(a)):
        print(cnt-1)
    else: print(cnt)
else:
    cnt=0
    for x in range(1, int(a/1.5)+1):
        if a % x == 0:
            cnt+=1
    print(cnt+1)