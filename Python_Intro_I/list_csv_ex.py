import csv
#add student function
def add_student(name):
	with open("students.txt","r+") as file:
		data = file.read()
		if name in data:
			print("Already in file")
			return None
		else:
			file.write("{} ".format(name))

#add_student("Arthur")
#add_student("Albert")
#add_student("Katie")

#find student function
def find_student(name):
	with open("students.txt","r") as file:
		data = file.read()
		if name in data:
			return name
		else:
			print("Student not found!")
			return None

#find_student("Arthur")
#find_student("Tobi")

#update student function
def update_student(name,new_name):
	with open("students.txt", "r+") as file:
		data = file.read()
		file.seek(0)
		if name in data:
			new_data = data.replace(name,new_name)
			file.seek(0)
			file.write(new_data)
			file.truncate()

#update_student("Arthur","Artu")

#remove student function
def remove_student(name):
	with open("students.txt","r+") as file:
		data = file.read()
		if name in data:
			new_data = data.replace(name,"")
			file.seek(0)
			file.write(new_data)
			file.truncate()

#remove_student("Albert")

#CSV
#add_user
def add_user():
	first = input("What is your first name?")
	last = input("What is your last name?")
	print("Hi {} {}, welcome to the terminal.".format(first,last))
	with open("users.csv","a") as csvfile:
		data = ["first_name", "last_name"]
		writer = csv.DictWriter(csvfile, fieldnames=data)
		if csvfile.tell() == 0:
			writer.writeheader()
		writer.writerow({
			"first_name": first,
			"last_name": last 
		})

add_user()

#greet_users
def greet_users():
	with open("users.csv") as csvfile:
		reader = csv.DictReader(csvfile)
		rows = list(reader)
		for val in rows:
			print("Hello {} {}".format(val["first_name"],val["last_name"]))


greet_users()