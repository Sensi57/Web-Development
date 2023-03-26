import math
a = int(input())
i = 1

while i < 3:
    c = i
    while a >= c:
        if c == 1:
            print(i)
            break
        else:
            if c % i == 0:
                print(c) 
        c*=2
    i += 1