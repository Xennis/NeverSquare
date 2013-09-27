window.onload = function() {
	var canvas = document.getElementById("canvas_container");
	var paper = Raphael(canvas, 500, 400);
	
	var triangle = paper.path('M 50 0 L 100 100 L 0 100 Z');
	triangle.node.onclick = function() {
		triangle.attr('fill', 'red');
	}

}
