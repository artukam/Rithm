import requests
import bs4

r = requests.get("https://news.google.com/")
soup = bs4.BeautifulSoup(r.text, "html.parser")

def return_matching_article(value,heading_list):
	li = []
	for val in heading_list:
		if value in val.text:
			li.append(val.text)
	return li


user_input = input("What title are you looking for?")

print(return_matching_article(user_input, soup.select(".esc-lead-article-title a")))