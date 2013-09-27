$(document).ready(function() {
	var canvas = document.getElementById("canvas_container");
	var xlength = 800, ylength = 600; 
	var paper = Raphael(canvas, xlength, ylength);
	
	var points = window.BOARD.buildBoard()
	jQuery.each(points, function(index, svgString){
		var shape = paper.path(svgString);
		new PathColourFiller(shape, "#aaaaaa", "ff0000", "#ffffff").apply();
	});
});
