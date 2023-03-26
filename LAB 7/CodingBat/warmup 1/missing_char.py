def missing_char(str, n):
  a = ""
  for i in range(len(str)):
    if i == n:
      continue
    else:
      a += str[i]
  return a
