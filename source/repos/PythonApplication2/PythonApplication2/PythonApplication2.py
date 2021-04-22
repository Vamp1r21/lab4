import pdb
import json
import re
users=[]
file = open('data.txt')
if(file.readline()!=""):
    with open('data.txt') as json_file:
            data = json.load(json_file)
            for p in data:
                for key in p:
                    users.append({
                    key: p[key], 
                })
                

def userInput(): 
    print("Введите email")
    email=input()
    regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@][\w\.]+[.]\w{2,3}$'
    while not re.search(regex,email):
        print("Некорректный email")
        email=input()
    print("Введите ФИО")
    question=input()
    if  question=="":
        print("Вы не ввели имя ")
        question=input()
    users.append({
        email: question,
    })

print("Ввод пользователей")
userInput()
with open('data.txt', 'w') as outfile:
    json.dump(users, outfile)


with open('data.txt') as json_file:
    data = json.load(json_file)
    for p in data:
         for key in p:
             print(key+"   :   "+p[key]) 

