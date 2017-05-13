import requests
import bs4
import csv

r = requests.get("http://www.espnfc.us/club/chelsea/363/index")
soup = bs4.BeautifulSoup(r.text, "html.parser")

with open("espn_chelsea.tsv","w") as tsvfile:
	writer = csv.writer(tsvfile, delimiter="\t")
	writer.writerow(("title","URL"))
	for item in soup.select(".feed-item-content h2 a"):
		writer.writerow((item.text, item["href"]))