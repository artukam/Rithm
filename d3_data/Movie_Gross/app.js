d3.csv('./example.csv', function(foo) {
  console.log(foo);
})

var width = 600;
var height = 600;

var barPadding = 40;
var barWidth = width / movieData.length - barPadding;
var yMax = d3.max(movieData.map(d=>d3.max(d.annualGrosses)))
var yScale = d3.scaleLinear()
				.domain([0,yMax])
				.range([height,0])

var colors = {
	"G": "forestgreen",
	"PG": "gold",
	"PG-13": "darkorange",
	"R": "darkred"
}

d3.select("svg")
	.attr("width", width)
	.attr("height", height)
  .selectAll("rect")
  .data(movieData)
  .enter()
  .append("rect")
  	.attr("x", (d,i) =>(barWidth + barPadding) * i)
  	.attr("y", d => yScale(d.annualGrosses[0]))
  	.attr("width",barWidth)
  	.attr("height", d=>height - yScale(d.annualGrosses[0]))
  	.attr("fill", d => colors[d.rating])

var axis = d3.axisRight(yScale)
             .tickValues([0, yMax/4, 2*yMax/4, 3*yMax/4])

d3.select('svg')
  .append('g')
    .attr('transform', 'translate(0,-10)')
  .call(axis);


d3.select("input")
	.on("input",function(){
		var idx = d3.event.target.value - d3.event.target.min;
		d3.selectAll("rect")
			.attr("y", d=>height - d.annualGrosses[idx]/1e7)
			.attr("height", d=>d.annualGrosses[idx]/1e7)
	})