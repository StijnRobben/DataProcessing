// Stijn Robben
// 10559558

// DataProcessing
// Week 3

// declaring the margin
var margin = { top: 20, right: 10, bottom: 100, left: 80 },
	width = 9800 - margin.right - margin.left,
	height = 600 - margin.top - margin.bottom;

// define y-axis scale
var yScale = d3.scale.linear()
    .range([height, 0]);

// define x-axis scale
var xScale = d3.scale.ordinal()
    .rangeRoundBands([0, width], .2);

// define x-axis
var xAxis = d3.svg.axis()
	.scale(xScale)
	.orient("bottom");

// define y-axis
var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left")

// define d3-tip
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "growth: <span style='color:red'>" + d.barchart[0].growth + "%" + "</span>";
  })


 // define SVG
var svg = d3.select('body')
	.append('svg')
	.attr ({
		"width" : width + margin.right + margin.left,
		"height" : height + margin.top + margin.bottom
	})
	.append('g')
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

// import the csv data
d3.csv("GDPgrowth2.csv", function(error, data) {
  if (error) return console.warn(error);

// create extra variable within object to create barchart
data.forEach(function (d){
	d.barchart = [{"year": 2000, "growth": d.year_2000},
	{"year": 2001, "growth": d.year_2001},
	{"year": 2002, "growth": d.year_2002},
	{"year": 2003, "growth": d.year_2003},
	{"year": 2004, "growth": d.year_2004},
	{"year": 2005, "growth": d.year_2005},
	{"year": 2006, "growth": d.year_2006},
	{"year": 2007, "growth": d.year_2007},
	{"year": 2008, "growth": d.year_2008},
	{"year": 2009, "growth": d.year_2009},
	{"year": 2010, "growth": d.year_2010},
	{"year": 2011, "growth": d.year_2011},
	{"year": 2012, "growth": d.year_2012},
	{"year": 2013, "growth": d.year_2013},
	{"year": 2014, "growth": d.year_2014}]
});

console.log(data)
Country_Object = data[166]
console.log(Country_Object.barchart[0].year)
years = []
	for (i = 0; i < 15; i++){
		years.push(Country_Object.barchart[i].year)
	}
	console.log(years)

	xScale.domain(data.map(function(d){ return d.Country_Name;}))
	yScale.domain(d3.extent(data, function(d){return +d.year_2014;}))

  svg.selectAll(".bar")
    .data(data)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return xScale(d.Country_Name); })
    .attr("y", function(d) { return yScale(Math.max(0, d.year_2014)); })
    .attr("width", xScale.rangeBand())
    .attr("height", function(d) { return Math.abs(yScale(d.year_2014) - yScale(0)); 
    })
    		.on('mouseover', tip.show)
      	.on('mouseout', tip.hide)

	// make x axis
	svg.append("g")
      .attr("class", "x axis")
  	  .attr("transform", "translate(0," + yScale(0) + ")")
      .call(xAxis)
      .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.5em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-40)" );

    // make y axis and label it
    svg.append("g")
	    .attr("class", "y axis")
	    .attr("transform", "translate(" + 0 + ",0)")
	    .call(yAxis);
	  
});