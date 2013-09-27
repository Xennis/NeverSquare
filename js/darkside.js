$(document).ready(function() {
	var canvas = document.getElementById("canvas_container");
	var xlength = 500, ylength = 400; 
	var paper = Raphael(canvas, xlength, ylength);
	
	var triangle = paper.path('M 50 0 L 100 100 L 0 100 Z');
	triangle.node.onclick = function() {
		triangle.attr('fill', 'green');
	}

});
