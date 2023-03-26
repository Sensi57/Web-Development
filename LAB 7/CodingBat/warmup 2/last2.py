def last2(str):
  a = ""
  b = len(str)-2
  
  for i in range(b,len(str)):
    a += str[i]
    
  if len(str) < 2:
      return 0

  cnt = 0
  for i in range(len(str)-2):
    c = ""
    for j in range(i, i+2):
        c += str[j]
        if c == a:
            cnt += 1

  return cnt