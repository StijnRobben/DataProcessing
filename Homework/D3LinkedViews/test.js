// Stijn Robben
// 10559558

// DataProcessing
// Week 3

// declaring the margin
var margin = { top: 20, right: 10, bottom: 100, left: 80 },
	width = 700 - margin.right - margin.left,
	height = 500 - margin.top - margin.bottom;

// define x-axis scale
var xScale = d3.scale.linear()
    .range([0, width]);

// define y-axis scale
var yScale = d3.scale.ordinal()
    .rangeRoundBands([0, height], .2);

// define x-axis
var xAxis = d3.svg.axis()
	.scale(xScale)
	.orient("bottom");

// define y-axis
var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left");

// define d3-tip
// var tip = d3.tip()
//   .attr('class', 'd3-tip')
//   .offset([-10, 0])
//   .html(function(d) {
//     return "Population: <span style='color:red'>" + d.people + "</span>";
  // })

 // define SVG
var svg = d3.select('body')
	.append('svg')
	.attr ({
		"width" : width + margin.right + margin.left,
		"height" : height + margin.top + margin.bottom
	})
	.append('g')
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// svg.call(tip);

// import the csv data
d3.csv("test.csv", function(error, data) {
  if (error) return console.warn(error);
  console.log(data);

	xScale.domain(d3.extent(data, function(d) { return +d.value; }));
	yScale.domain(data.map(function(d) { return d.name; }));

	// draw the bars
	// svg.selectAll(".bar")
	// 	.data(data)
	// 	.enter()
	// 	.append("rect")
	// 	.attr("class", "bar")
	// 	.attr ({
	// 		"x": function(d) {return xScale(d.year);},
	// 		"y": function(d) {return yScale(d.people);},
	// 		"width": xScale.rangeBand(),
	// 		"height": function(d) { return height - yScale(d.people);}
	// 	})
		// .on('mouseover', tip.show)
  //     	.on('mouseout', tip.hide)
  svg.selectAll(".bar")
    .data(data)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return xScale(Math.min(0, d.value)); })
    .attr("y", function(d) { return yScale(d.name); })
    .attr("width", function(d) { return Math.abs(xScale(d.value) - xScale(0)); })
    .attr("height", yScale.rangeBand());

	// make x axis
	svg.append("g")
      .attr("class", "x axis")
  	  .attr("transform", "translate(0," + height + ")")
      .call(xAxis);


    // make y axis and label it
    svg.append("g")
	    .attr("class", "y axis")
	    .attr("transform", "translate(" + xScale(0) + ",0)")
	    .call(yAxis);
	  
});



