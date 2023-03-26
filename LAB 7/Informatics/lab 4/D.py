import math
a = int(input())
i = 1

# while True:
#     if a % 2 == 0:
#         print("YES")
#     elif a == 1:
#         print("YES")
#     else:
#         print("NO")
#     break

while i+1 < 3:
    c = i
    if a == 1:
            print("YES")
            break
    else:
        c += 1 
        while True:
            if c % i == 0 and a == c:
                print("YES")
                break
            elif a < c:
                print("NO")
                break
            else:
                c *= 2
    i = i + 1