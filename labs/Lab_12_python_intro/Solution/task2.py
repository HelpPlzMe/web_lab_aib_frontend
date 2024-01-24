n = int(input())
X = input().split()
medians = []
for i in range(n):
    X[:i+1] = sorted(X[:i+1])
    if (i + 1) % 2 == 1:
        m = int(X[(i + 1) // 2])
    else:
        m = int(X[i // 2])
    medians.append(m)
sum = 0
for m in medians:
    sum += m
print(sum)

