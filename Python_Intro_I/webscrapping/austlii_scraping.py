import requests
import bs4

r = requests.get('http://www.lexology.com/library/popular')
soup = bs4.BeautifulSoup(r.text, "html.parser")

for item in soup.select(".most-popular-content .ui-tabs-panel . section-wrapper .section h4")
	print(item)
