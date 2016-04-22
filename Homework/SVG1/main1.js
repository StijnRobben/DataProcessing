// Stijn Robben
// 105559558

// Data Processing
// Week 2

/* use this to test out your function */
window.onload = function() {
    changeColor("no", "#ff3399");
    changeColor("es", "#0000ff");
    changeColor("pt", " #9900ff");
    changeColor("is", " #00ffff");
};

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
        document.getElementById(id).setAttribute("fill", color);
}