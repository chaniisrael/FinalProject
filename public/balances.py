import codecs
import re
f = codecs.open("uploads/balances.txt", "r", "utf-8")
line = f.readline()
balance = 0
balance1 = 0
credit = 0
flag = True
flag1 = True

while line:
    if "סה" in line and flag:
        number = re.findall(r'[{+,-}]*[\d]+[,]*[\d]*[,]*[\d]*[.]*[\d]*', line)
        if number:
            num = ""
            s = number[0].split(",")
            for c in s:
                num += c
            balance = balance + float(num)
            flag = False
    if "אשראי" in line and flag1:
        number = re.findall(r'[{+,-}]*[\d]+[,]*[\d]*[,]*[\d]*[.]*[\d]*', line)
        if number:
            num = ""
            s = number[0].split(",")
            for c in s:
                num += c
            balance1 = balance1 + float(num)
            flag1 = False
    line = f.readline()
print(balance,balance1)