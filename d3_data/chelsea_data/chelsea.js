//Base SVG values
let width = 1000
let height = 600


//Max values

let maxValues = {
	Games_Played: 38,
	Goals_Scored: 30,
	Assists: 20
}

let padding = {
	left:50,
	top:50,
	right:50,
	bottom:50
}

d3.tsv("chelsea_data_all.tsv", function(data){

	//Scale and Max values
	let yMax = maxValues["Goals_Scored"];

	let yScale = d3.scaleLinear()
					.domain([0,yMax])
					.range([height-padding["bottom"],padding["bottom"]])
	let xMax = maxValues["Games_Played"];
	let xScale = d3.scaleLinear()
					.domain([0,xMax])
					.range([padding["left"],width-padding["left"]])
		//Tool tip
	var tooltip = d3.select("body")
						.append("div")
						.classed("tool-tip", true)
						.style("opacity",0)

	//Create all data for the graph and hide data
	d3.select("svg")
		.attr("width", width)
		.attr("height", height)
	  .selectAll("circle")
	  .data(data)
	  .enter()
	  .append("circle")
	  	.attr("cx", (d,i) => xScale(parseInt(d["Game Started"]) + parseInt(d["Sub Ins"])))
	  	.attr("cy",(d,i) => yScale(parseInt(d["Goals"])))
	  	.attr("r", 15)
	  	.attr("class", (d,i)=>`${d["Position"]} ${d["Year"]} ${d["Team"]} hide-label-year`)
	  	.on("mouseenter", function(d) {
	  		tooltip.html(`<p class="tool-tip-text"><strong>#${d["Number"]} ${d["Name"]}</strong></p>
	  					  <p class="tool-tip-text">Goals: ${d["Goals"]}</p>
	  					  <p class="tool-tip-text">Assists: ${d["Assists"]}</p>
	  					  <p class="tool-tip-text">Games played: ` + (parseInt(d["Game Started"]) + parseInt(d["Sub Ins"])) + `</p>`)
	  			   .style("opacity",1)
	  			   .style("left", d3.event.pageX + "px")
           		   .style("top", (d3.event.pageY-40) + "px");
  		})
  		.on("mouseout", () => tooltip.style("opacity", 0));

	//Range function
	d3.select("#year-range")
		.on("input",function(){
			console.log("Slider Works!")
		});

	//Axis
	var axisR = d3.axisLeft(yScale)
        .tickValues([0, 5, 10, 15, 20, 25,30])
    var axisT = d3.axisBottom(xScale)
    	.tickValues([0, 5, 10, 15, 20,25,30,35,38])

	d3.select("svg")
	  .append("g")
	  	.attr("class","axis")
	  	.attr("transform",`translate(${padding.left},0)`)
	  .call(axisR)

	d3.select("svg")
	  .append("g")
	  	.attr("class","axis")
	  	.attr("transform",`translate(0,`+ (height-padding.bottom) + ")")
	  .call(axisT)
	
	//Axis labels

	d3.select("svg")
		.append("text")
			.attr("transform","rotate(-90)")
			.attr("y",62)
			.attr("x",-92)
			.attr("class","axis goal-label")
			.style("text-anchor", "middle")
			.text("Goals scored")

	d3.select("svg")
		.append("text")
			.attr("y",height*0.915)
			.attr("x",width - 92)
			.attr("class","axis")
			.style("text-anchor", "middle")
			.text("Games Played")

	d3.select("svg")
		.append("text")
			.attr("transform","rotate(-90)")
			.attr("y",62)
			.attr("x",-92)
			.attr("class","axis hide-label assist-label")
			.style("text-anchor", "middle")
			.text("Assists")

	//Toggle for statistics
	d3.select("#offense-toggle").on("input",function(){
		if (d3.event.target["value"] === "goals-scored-metric") {
			d3.selectAll("circle")
				.data(data)
				.attr("cy",(d,i) => yScale(parseInt(d["Goals"])))
			d3.select(".assist-label")
				.classed("hide-label", true)
			d3.select(".goal-label")
				.classed("hide-label", false)

		} else if (d3.event.target["value"] === "assists-metric"){
			d3.selectAll("circle")
				.data(data)
				.attr("cy",(d,i) => yScale(parseInt(d["Assists"])))
			d3.select(".assist-label")
				.classed("hide-label", false)
			d3.select(".goal-label")
				.classed("hide-label", true)
		}
	});
	//Toggle players
	d3.selectAll(".btn-players").on("click",function(){
		if (d3.event.target.className === "btn btn-players btn-players-active") {
			d3.event.target.classList.add("btn-players-inactive");
			d3.event.target.classList.remove("btn-players-active");
			d3.selectAll("." + d3.event.target.innerText)
				.classed("hide-label",true)
		} else if (d3.event.target.className === "btn btn-players btn-players-inactive"){
			d3.event.target.classList.remove("btn-players-inactive");
			d3.event.target.classList.add("btn-players-active");
			d3.selectAll("." + d3.event.target.innerText)
				.classed("hide-label",false)

		}
	})

	//Toggle year
	d3.select("#metric-year").on("input",function(){
		d3.selectAll("circle")
			.classed("hide-label-year", true);
		d3.selectAll(".s" + d3.event.target.value)
			.classed("hide-label-year",false);
	})

	//Toggle by team
	//Toggle Chelsea


	//Set default view
	d3.selectAll(".s2016")
		.classed("hide-label",false)
		.classed("hide-label-year",false);
});