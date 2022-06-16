import codecs
import re
f = codecs.open("uploads/accountTransactions.txt", "r", "utf-8")
line = f.readline()
refunds = 0
while line:
    if "א.כ.מ" in line:
        refunds += 1
    line = f.readline()
print(refunds)
