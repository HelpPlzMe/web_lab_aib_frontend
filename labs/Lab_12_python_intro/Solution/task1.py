n, m = map(int, input().split())
a = []
for i in range(n):
    a.append([0] * m)
a[0][0] = 1
for i in range(1, n):
    for j in range(1, m):
        if i - 2 >= 0 and j - 1 >= 0:
            a[i][j] += a[i - 2][j - 1]
        if i - 1 >= 0 and j - 2 >= 0:
            a[i][j] += a[i - 1][j - 2]
print(a[n - 1][m - 1])

