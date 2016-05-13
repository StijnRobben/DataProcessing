/*Stijn Robben
10559558

Data Processing
Week 4

Het is deze week helaas niet gelukt om de opdracht af te krijgen. Ik zal de dataset waarschijnlijk moeten omzetten,
maar dit is me niet gelukt. Het globale idee is om te kunnen switchen tussen 2 knoppen en om op die manier telkens een functie aan
te vragen die gebruikt maakt van een andere dataset. 
*/

// // ** Update data section (Called from the onclick)
function updateData(dataset) {

      // import de JSON data
      var January =

      d3.json(dataset, function(error, json) {
        if (error) return console.warn(error);
        January = json;
          console.log(January[1].DateJan)

        var date_format = d3.time.format("%Y%m%d"); 
        var tooltip_format = d3.time.format("%d-%m-%Y"); 

        January.forEach(function(d){
          d.DateJan = date_format.parse(String(d.DateJan));
          d.MaxJan = + d.MaxJan
          d.AvgJan = + d.AvgJan
        });

        var xdomain = d3.extent(January, function(d) { return d.DateJan; })
        var ydomain = [-50, 150];

        // declare margin
        var margin = {top: 20, right: 20, bottom: 60, left: 50},
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

      // declare x
      var x = d3.time.scale()
        .range([0, width])
        .domain(xdomain)

      // declare y 
      var y = d3.scale.linear()
        .range([height, 0])
        .domain(ydomain)

      // make x axis
      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .tickFormat(d3.time.format("%d-%b"));

      // make y axis
      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left");

      // declare line
      var line = d3.svg.line()
          .x(function(d) { return x(d.DateJan); })
          .y(function(d) { return y(d.MaxJan); });

      var lineMin = d3.svg.line()
          .x(function(d) { return x(d.DateJan); })
          .y(function(d) { return y(d.MinJan); });

      var lineAvg = d3.svg.line()
          .x(function(d) { return x(d.DateJan); })
          .y(function(d) { return y(d.AvgJan); });

      // combine the svg with the body
      var svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // append x axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")  
                  .style("text-anchor", "end")
                  .attr("dx", "-.5em")
                  .attr("dy", ".15em")
                  .attr("transform", "rotate(-40)" );

        // append y axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Temp. in 0.1 deg Celsius");

        // append line
        svg.append("path")
            .datum(January)
            .attr("class", "line")
            .attr("d", line);

        // append line
        svg.append("path")
            .datum(January)
            .attr("class", "line")
            .attr("d", lineMin)
            .style("stroke", "red");  

        // append line
        svg.append("path")
            .datum(January)
            .attr("class", "line")
            .attr("d", lineAvg)
            .style("stroke", "orange  ");

          // declare variables for crossline
          var g = svg.append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
          var focus = svg.append('g').style('display', 'none');
          var bisectDate = d3.bisector(function(d) { return d.DateJan; }).left;

          // add tooltip
         var tooltip = d3.select("body")
                .append("div")
                  .style("visibility", "hidden")
                .attr("id", "tooltip");

            // add cross lines
            focus.append('line')
                .attr('id', 'focusLineX')
                .attr('class', 'focusLine');
            focus.append('line')
                .attr('id', 'focusLineY')
                .attr('class', 'focusLine');

            // add circles
            svg.selectAll('circle').data(January).enter().append('circle')
              .attr('cx', function(d) { return x(d.DateJan); })
              .attr('cy', function(d) { return y(d.MaxJan); })
              .attr('r', 2)
              .attr('class', 'circle');

          // add interactivity
          svg.append('rect')
              .attr('class', 'overlay')
              .attr('width', width)
              .attr('height', height)
              .on('mouseover', function() {focus.style('display', null);})
              .on('mouseout', function() { 

                 tooltip.style("visibility", "hidden");
                focus.style('display', 'none'); })
              .on('mousemove', function() { 

                  var mouse = d3.mouse(this);
                  var mouseDate = x.invert(mouse[0]);
                  var i = bisectDate(January, mouseDate); // returns the index to the current data item

                  var d0 = January[i - 1]
                  var d1 = January[i];
                  // work out which date value is closest to the mouse
                  var d = mouseDate - d0[0] > d1[0] - mouseDate ? d1 : d0;

                  var xcor = x(d.DateJan);
                  var ycor = y(d.MaxJan);
                  console.log(y.domain[0], y.domain[1])

                  focus.select('#focusCircle')
                      .attr('cx', x)
                      .attr('cy', y);focus.select('#focusLineX')
                      .attr('x1', xcor).attr('y1', y(ydomain[0]))
                      .attr('x2', xcor).attr('y2', y(ydomain[1]));
                  focus.select('#focusLineY')
                      .attr('x1', x(xdomain[0])).attr('y1', ycor)
                      .attr('x2', x(xdomain[1])).attr('y2', ycor);

                  tooltip.style("visibility", "visible");

                tooltip.html("<b> Date: </b>" + tooltip_format(d.DateJan) + "<br/>" + "<b> Max. Temperature: </b>" + d.MaxJan)
                  .style("left", (d3.event.pageX) + "px")
                  .style("top", 183 + "px");
          });

      });
}

