#1

for val in [1,2,3,4]:
  print(val)
  
#2
for val in [1,2,3,4]:
  print(val*20)
  
#3

sample_list = ["Elie", "Tim", "Matt"]
letter_list = [letter[0] for letter in sample_list]

print(letter_list)

#4
num_list = [1,2,3,4,5,6]
num_two_list = [num for num in num_list if num % 2 == 0]

print(num_two_list)

#5
list_one = [1,2,3,4]
list_two = [3,4,5,6]

num_three_list = [num for num in list_one if num in list_two]

print(num_three_list)

#6
str_list = ["Elie","Tim","Matt"]
str_one_list = [word.lower()[::-1] for word in str_list]

print(str_one_list)

#7

str_two_list = [let for let in "first" if let in "third"]

print(str_two_list)

#8
num_four_list = [num for num in range(1,101) if num % 12 == 0]

print(num_four_list)

#9

str_three_list = [let for let in "amazing" if not let in "aeiou"]

print(str_three_list)

#10
num_five_list = []

for num in range(0,3):
  num_five_list.append([0,1,2])
  
print(num_five_list)

#11
num_six_list = [[i for i in range(10)] for j in range(10)]

print(num_six_list)