import requests
import bs4
import csv

r = requests.get('http://www.lexology.com/library/popular')
soup = bs4.BeautifulSoup(r.text, "html.parser")

li = []
for item in soup.select(".section-wrapper h4 a"):
		li.append(item.text)

with open("lexology_store.csv", "w") as csvfile:
	writer = csv.writer(csvfile, delimiter="\t")
	writer.writerow("Title")
	writer.writerow(li)
