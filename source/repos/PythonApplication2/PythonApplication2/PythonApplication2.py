import pdb
import re
pdb.set_trace()
questions= {}

mail=input()
regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@][\w\.]+[.]\w{2,3}$'
while not re.search(regex,mail):
    print("Некорректный email")
    mail=input()
text=input()
if  text=="":
    print("Некорректный email")
    mail=input()
questions[mail]=text
