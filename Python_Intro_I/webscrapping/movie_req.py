import requests
import bs4

movie = input("What movie do you want to search?")
person = input("Which actor/actress do you want to know if they're in a movie?")

r = requests.get("http://www.omdbapi.com/?t=" + movie)

if person in r.json()["Actors"]:
	print("Yes! Person in movie")

else:
	print("No, person not in movie")

print("The movie was directed by: {}".format(r.json()["Director"]))
print("The movie was written by: {}".format(r.json()["Writer"]))