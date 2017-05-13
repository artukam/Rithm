import requests
import bs4
import csv

for a in range(2000,2017):
	r = requests.get("http://www.espnfc.us/club/chelsea/363/squad?season=" + str(a))
	soup = bs4.BeautifulSoup(r.text,"html.parser")

	player_data = soup.select(".squad-data-table tr")

	player_holder = []

	for i in player_data:
		if i.has_attr("class"):
			pass
		else:
			player_holder.append((str(a),i.get_text(",")))

	with open("chelsea_data.tsv", "a") as tsvfile:
		writer = csv.writer(tsvfile, delimiter="|")
		for j in player_holder:
			writer.writerow(j)

	