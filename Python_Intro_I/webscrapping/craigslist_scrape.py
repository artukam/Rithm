import requests
import bs4

r = requests.get("https://sfbay.craigslist.org/search/zip?s=1")
soup = bs4.BeautifulSoup(r.text,"html.parser")

for i in soup.select(".result-title"):
	print(i.text)