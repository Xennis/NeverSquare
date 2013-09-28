$(document).ready(function() {
	var canvas = document.getElementById("canvas_container");
	var xlength = window.GAME.settings.width, ylength = window.GAME.settings.height; 
	var paper = Raphael(canvas, xlength, ylength);
	
	var points = window.BOARD.buildBoard()
	jQuery.each(points, function(index, svgString){
		var shape = paper.path(svgString);
		new PathColourFiller(shape, "#aaaaaa", "ff0000", "#ffffff").apply();
	});
});
