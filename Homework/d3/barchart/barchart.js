
var data=

d3.json("population.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  console.log(data)
});