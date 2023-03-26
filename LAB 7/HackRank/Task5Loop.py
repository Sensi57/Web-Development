if __name__ == '__main__':
    n = int(input())
    for i in range(n**2):
        if i**2 < n**2:
            print(i**2) 