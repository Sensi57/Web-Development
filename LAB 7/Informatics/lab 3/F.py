x = input()
s =""
for i in x[::-1]:
    s+=i
cnt = 0
while s[cnt] == "0":
    cnt+=1

print(s[cnt::])