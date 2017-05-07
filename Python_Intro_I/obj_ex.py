#1
instructor = [("name", "Elie"), ("job", "Instructor")]

x = {val[0]: val[1] for val in instructor}
print(x)

#2
code = ["CA", "NJ", "RI"]
local = ["California", "New Jersey", "Rhode Island"]

y = {code[i]: local[i] for i in range(0,len(code))}
print(y)

#3
z = {val: 0 for val in 'aeiou'}
print(z)

#4
a = {i-64:chr(i) for i in range(65,91)}
print(a)