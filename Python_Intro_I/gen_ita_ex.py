from functools import wraps

def get_next_multiple(num):
	for x in range(10):
		yield x * num

gen_multiple_of_two = get_next_multiple(2)
print(next(gen_multiple_of_two))
print(next(gen_multiple_of_two))
print(next(gen_multiple_of_two))
print(next(gen_multiple_of_two))
print(next(gen_multiple_of_two))

def is_prime(num):
	if num <= 1:
		return False
	elif num <= 3:
		return True
	elif num % 2 == 0 or num % 3 == 0:
		return False
	i = 5
	while (i * i <= num):
		if num % i == 0 or num % (i+2) == 0:
			return False
		i += 6
	return True

print(is_prime(11))
print(is_prime(122))

def get_next_prime():
	for x in range(1000):
		if is_prime(x):
			yield x

gen = get_next_prime()
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))

def double_result(fn):
	@wraps(fn)
	def inner(*args):
		return fn(*args) * 2
	return inner

@double_result
def add(a,b):
	return a+b

print(add(5,5))

def only_even_parameters(fn):
	@wraps(fn)
	def inner(*args):
		if all([(val if val % 2 == 0 else False) for val in args]):
			return fn(*args)
		else:
			return "Please add even numbers!"
	return inner

@only_even_parameters
def add(a,b):
	return a+b

print(add(5,5))
print(add(4,4))

def sum_index(li):
	return sum([idx for idx,val in enumerate(li)])

print(sum_index([1,2,3,4]))	