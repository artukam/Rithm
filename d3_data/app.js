var colors = {
  "G": "green",
  "PG": "yellow",
  "PG-13": "orange",
  "R": "red"
}

var pTags = d3.select("body")
				.selectAll("p")
				.data(movies);

pTags
  .enter()
  .append("p")
  	.style("border", "5px solid blue")
  .merge(pTags)
    .text(d => `"${d.quote}" - ${d.title} (${d.year})`)
    .style('font-size', d => d.quote.length < 40 ? '2em' : '1em')
    .style('background-color', d => colors[d.rating])
    .style('padding', '20px')
    .style('border-radius', '8px');

d3.select("button")
	.on("click", function(data,index){
		movies = movies.filter(movie=> movie.rating !== "R");
		
		d3.selectAll("p")
			.data(movies, function(d) {
				return d.quote
			})
			.exit()
			.remove()
	});