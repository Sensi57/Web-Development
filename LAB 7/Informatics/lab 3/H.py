import math
a = int(input())

s = ""

for i in range(1, a+1):
    if a % i == 0 :
        s = s + str(i) + " "
        
print(s)