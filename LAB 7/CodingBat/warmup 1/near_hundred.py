def near_hundred(n):
  if n <= 100 and n >= 90 or n >= 100 and n <= 110 or n == 100:
    return True
  elif n <= 200 and n >= 190 or n >= 200 and n <= 210 or n == 200:
    return True
  else:
    return False