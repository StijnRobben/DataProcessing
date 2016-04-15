/**
 * Stijn Robben
 * 10559558
 * 
 * KNMI.js
 * DataProcessing
 * Homework1
 * 
 * visualises a linegraph out of the
 * KNMI average temperatures
 */

// obtain the raw data
var data = document.getElementById('rawdata').value;

// split the raw data into separate values, each value containing
// both the date and temperature
var date = data.split("\n", 365);

// declare empty arrays for date, temperature and converted temperature
temp = [];
datum = [];
temp_convert = [];
datum_convert = [];

// split date and temperature
for(var i = 0; i <date.length; i++){
    // make temporary array with both values
    var buf = date[i].split(",");
    // put dates into date array and temperatures in temp array
    datum.push(new Date(buf[0]));
    // devide by 10 to convert to celcius
    temp.push(buf[1]/10);
}
console.log(buf)

console.log(datum);

// formula for converting values into new parameters
function createTransform(domain, range){
 		var alpha = (range[1] - range[0])/(domain[1] - domain[0]);
	var beta = (range[0] - (alpha * domain[0]));
	
	return function(x){
		return alpha * x + beta;
	};
}

// create canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// transform these parameters
var transform_temp = createTransform([Math.min.apply(Math, temp), Math.max.apply(Math, temp)], [50, canvas.height]);

// transform temperatures
for(var s = 0; s < temp.length; s++){
    temp_convert.push(transform_temp(temp[s]));
}
console.log(temp_convert);

// transform dates
var transform_date = createTransform([datum[0].getTime(), datum[364].getTime()], [50, canvas.width]);

// move transformed dates in array
for(var r = 0; r < datum.length; r++){
    datum_convert.push(transform_date(datum[r].getTime()));
}

ctx.beginPath();

// connect data positions
for(var i = 0; i < temp_convert.length; i++){
    ctx.lineTo(datum_convert[i], (canvas.height - temp_convert[i]));
}

ctx.stroke();

// make y-axis
ctx.beginPath();
ctx.moveTo(50,0);
ctx.lineTo(50,450);
ctx.stroke();

// make x-axis
ctx.beginPath();
ctx.moveTo(50,450);
ctx.lineTo(900,450);
ctx.stroke();

// make small lines on y-axis
ctx.beginPath();
for(var i = 0; i < 10; i++){
    ctx.moveTo(45, 45* i); 
    ctx.lineTo(50, 45* i);
}
ctx.stroke();

// make small lines on x-axis
ctx.beginPath();
for(var i = 1; i < 900; i++){
    ctx.moveTo(50 + 70.83*i,450);
    ctx.lineTo(50+ 70.83*i, 455);
}

// add month names
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
s = 50;
for(var i = 0; i <12; i++){
    ctx.fillText(months[i], s, canvas.height - 20);
    s+= (canvas.width - 50)/12;
}

// add temperature values
temperatures = ["26.0", "23.12", "20.24", "17.36", "14.48","11.60", "8.72", "5.84", "2.96", "0.08", "-2.8"];
a = 10;
for(var i = 0; i < 11; i++){
    ctx.fillText(temperatures[i], canvas.width - 890, a);
    a += (canvas.height - 50)/10;
}
ctx.stroke();

// create variables for interactivity
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

// get the coordinates of the mouse
function getMousePos(canvas, evt) {
    var rect = canvas2.getBoundingClientRect();
    mouse_coor = [];
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    mouse_coor.push(x,y);
    return mouse_coor;
}

// draw line at mouse position
canvas2.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        ctx2.clearRect(0,0, canvas2.width, canvas2.height);
        ctx2.beginPath();
        ctx2.moveTo(mousePos[0], 0);
        ctx2.lineTo(mousePos[0],450);
        // make sure cross-hair stays within bounds
        if(mousePos[0] > 50){
            ctx2.stroke();
        }
        // transform x-axis to day
        var coor_trans = createTransform([50, canvas2.width], [0,365]);
        // get the day
        var day = parseInt(coor_trans(mouse_coor[0]));
        var value = transform_temp(temp[day]);
        ctx2.beginPath();
        ctx2.moveTo(50, (canvas2.height - value));
        ctx2.lineTo(canvas2.width, (canvas2.height - value));
        ctx2.stroke();
})






