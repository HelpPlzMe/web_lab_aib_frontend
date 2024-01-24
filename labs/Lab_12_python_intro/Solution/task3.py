s = input()
mx = 0
dictionary = {}
for t in s:
    if t == ' ':
        continue
    if t in dictionary:
        dictionary[t] += 1
        mx = max(mx, dictionary[t])
    else:
        dictionary[t] = 1
s = ""
for c in dictionary.keys():
    s += c
ch = list(s)
ch.sort()
i = mx
while i > 0:
    str = ""
    for tt in ch:
        if dictionary[tt] >= i:
            str += '#'
        else:
            str += ' '
    print(str)
    i -= 1
for c in ch:
    print(c, end='')
