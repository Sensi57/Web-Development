def front3(str):
  a = 0
  if len(str) < 3:
    a = len(str)
  else:
    a = 3
  a = str[:a]
  return a+a+a
