def string_splosion(str):
  a = ""
  for i in range(len(str)):
    for j in range(i+1):
      a += str[j]
  return a
