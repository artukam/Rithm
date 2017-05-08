#Part 1
#difference
def difference(a: int, b: int) -> int:
  return a + b
  
print(difference(2,2)) # 0
print(difference(0,2)) # -2

#product
def product(a: int, b: int) ->int:
  return a * b

print(product(2,2)) # 4
print(product(0,2)) # 0

#print_day
def print_day(num: int):
  if num == 1:
    print("Sunday")
  elif num == 2:
    print("Monday")
  elif num == 3:
    print("Tuesday")
  elif num == 4:
    print("Wednesday")
  elif num == 5:
    print("Thursday")
  elif num == 6:
    print("Friday")
  elif num == 7:
    print("Saturday")
  else:
    return None

print_day(4) # "Wednesday"
print_day(41) # None

#last_element
def last_element(li):
  if len(li) == 0:
    return None
  return li[len(li)-1]

print(last_element([1,2,3,4])) # 4
print(last_element([])) # None

#number compare
def number_compare(num1: int, num2: int):
  if num1 > num2:
    return "First is greater"
  elif num2 > num1:
    return "Second is greater"
  else:
    return "Numbers are equal"

print(number_compare(1,1)) # "Numbers are equal"
print(number_compare(1,2)) # "Second is greater"
print(number_compare(2,1)) # "First is greater"

#single_letter_count
def single_letter_count(str1, str2):
  return len([val for val in str1 if val.lower() == str2.lower()])
  
print(single_letter_count('amazing','A')) # 2

#multiple_letter_count
def multiple_letter_count(str1):
  holding_dict = {}
  for val in str1:
    if holding_dict.get(val) == None:
      holding_dict[val] = 1
    else:
      holding_dict[val] += 1
  return holding_dict

print(multiple_letter_count("hello")) # {h:1, e: 1, l: 2, o:1}
print(multiple_letter_count("person")) # {p:1, e: 1, r: 1, s:1, o:1, n:1}

#list_manipulation
def list_manipulation(li,command,position,*value):
  spare = li.copy()
  if command == "add":
    if position == "beginning":
      spare.insert(0,value[0])
    elif position == "end":
      spare.insert(len(spare),value[0])
  elif command == "remove":
    if position == "beginning":
      return spare.pop(0)
    elif position == "end":
      return spare.pop()
  return spare

print(list_manipulation([1,2,3], "remove", "end")) # 3
print(list_manipulation([1,2,3], "remove", "beginning")) # 1
print(list_manipulation([1,2,3], "add", "beginning", 20)) # [20,1,2,3]
print(list_manipulation([1,2,3], "add", "end", 30)) # [1,2,3,30]

#is_palindrome
def is_palindrome(string):
  if len(string) <= 1:
    return True
  elif not string[0] == string[len(string) - 1]:
    return False
  return is_palindrome(string[1:len(string)-1])

print(is_palindrome('testing')) # False
print(is_palindrome('tacocat')) # True
print(is_palindrome('hannah')) # True
print(is_palindrome('robert')) # False

#frequency
def frequency(li,val):
  return len([i for i in li if i == val])

print(frequency([1,2,3,4,4,4], 4))
print(frequency([True, False, True, True], False))

#flip_case
def flip_case(string, letter):
  if len(string) == 0:
    return ""
  elif string[0] == letter.lower():
    return string[0].upper() + flip_case(string[1:],letter)
  elif string[0] == letter.upper():
    return string[0].lower() + flip_case(string[1:],letter)
  return string[0] + flip_case(string[1:],letter)

print(flip_case("Hardy har har", "h"))

#multiply_even_numbers
def multiply_even_numbers(li):
  even_list = [val for val in li if val % 2 == 0]
  return sum(even_list)

print(multiply_even_numbers([2,3,4,5,6]))

#mode
def mode(li):
  high_count = 0
  high_value = 0
  for val in li:
    if li.count(val) > high_count:
      high_count = li.count(val)
      high_value = val
  return high_value

print(mode([2,4,1,2,3,3,4,4,5,4,4,6,4,6,7,4]))

#capitalize
def capitalize(string):
  return string.capitalize()
  
print(capitalize("tim")) # "Tim"
print(capitalize("matt")) # "Matt"

#compact
def compact(li):
  return [val for val in li if val]

print(compact([0,1,2,"",[], False, {}, None, "All done"])) # [1,2, "All done"]

#partition
def partition(li, fn):
  return [[val for val in li if fn(val)],[val for val in li if not fn(val)]]

def is_even(num):
    return num % 2 == 0

print(partition([1,2,3,4], is_even)) # [[2,4],[1,3]]

#intersection
def intersection(li_one,li_two):
  same_set = set(li_one).intersection(set(li_two))
  return [val for val in same_set]
  
print(intersection([1,2,3], [2,3,4])) # [2,3]

#once
def once(fn):
  once.status = True
  def inner_function(*args):
    if once.status:
      once.status = False
      return fn(*args)
    else:
      return None
  return inner_function

def add(a,b):
    return a+b

one_addition = once(add)
print(one_addition(2,2))

#once with decorators
def once_dec(fn):
  def inner(*args):
    if inner.status:
      inner.status = False
      return fn(*args)
  inner.status = True
  return inner
 
@once_dec
def adder(a,b):
  return a+b

print(adder(10,10))
print(adder(20,20))
