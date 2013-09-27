$(document).ready(function() {
	var canvas = document.getElementById("canvas_container");
	var xlength = 500, ylength = 400; 
	var paper = Raphael(canvas, xlength, ylength);
	
	var triangle = paper.path('M 50 0 L 100 100 L 0 100 Z');
	triangle.node.onclick = function() {
		triangle.attr('fill', 'green');
	}

	var points = window.BOARD.buildBoard()
	jQuery.each(points, function(index, svgString){
		var shape = paper.path(svgString);
		shape.attr({fill: "red"});
	});
});
