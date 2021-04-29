from bottle import post, request
import re
import compare
import json

@post('/home', method='post')
def my_form():
	mail = request.forms.get('ADRESS')
	quest = request.forms.get('QUEST')
	if len(mail) == 0 or len(quest) == 0:
		return "Fill all fields!"

	if not compare.compare(mail):
		return "Enter valid email"

	questions = {}
	try:
		file = open("questions.json", 'r')
		json_str = file.read()
	
		if len(json_str) != 0:
			try:
				questions = json.loads(json_str)
			except json.JSONDecodeError as e:
				print(e)
		file.close()
	except FileNotFoundError as e:
		print(e)

	file = open("questions.json", 'w')

	questions[mail] = quest	
	file.write(json.dumps(questions))
	file.close()

	return "Thanks! The answer will be sent to the mail %s" % mail