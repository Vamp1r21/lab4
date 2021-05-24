import json
import compare
from bottle import post, request, template
from datetime import date

# Функция для получения всех людей которые в онлайне
def get_all_onlines():
	online = []
	with open('online.json') as f:
		file_content = f.read()
		online = json.loads(file_content)
	return [x for x in online if x['isTrue'] == "True"]

def create_online(art): # Функция для создания аккаунта
	articles = []
	with open('online.json') as f: # Получение данных с файла online.json
		file_content = f.read()
		articles = json.loads(file_content)
	articles.append(art) # Добавление в массив аккаунтов новый аккаунт
	file = open("online.json", 'w') # Запись в файл articles.json нового массива статей
	file.write(json.dumps(articles))
	file.close()
	return articles; # Возврат нового массива аккаунтов

@post('/registration', method='post')
def delete():
	header="Acc created!"
	id = str(uuid.uuid4().fields[-1])[:5]
	name = request.forms.get('NAME')
	email = request.forms.get('EMAIL')
	# Валидация через свой модуль compare
	if not compare.compare_name(name): 
		return template('registration.tpl',title="Author name must be more then 3 symbols!")
	if not compare.compare_email(email): 
		return template('registration.tpl',title="Enter correct email!")

	# Создание объекта статьи, для занесения в файл
	online = {
		"id": id,
		"name": name,
		"email": email,
		"isTrue":"False"
	}

	
	# Вызов функции создания аккаунта
	onlines = create_online(online)
	# Редирект пользователя к странице с онлайном
	return template('online.tpl',title="Useful Templates", year="2021", onlines=onlines)
