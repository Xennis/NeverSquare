window.onload = function() {
	// Creates canvas 320 × 200 at 10, 50
	var paper = Raphael(document.getElementById("canvas_container"), 500, 400);

	// Creates circle at x = 50, y = 40, with radius 10
	var circle = paper.circle(50, 40, 10);

	// Sets the fill attribute of the circle to red (#f00)
	circle.attr("fill", "#f00");

	// Sets the stroke attribute of the circle to white
	circle.attr("stroke", "#fff");
}
