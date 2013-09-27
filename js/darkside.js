$(document).ready(function() {
	var canvas = document.getElementById("canvas_container");
	var paper = Raphael(canvas, 500, 400);
	
	var triangle = paper.path('M 50 0 L 100 100 L 0 100 Z');
	var triangle2 = paper.path('M 50 0 L 100 100 L 150 0 Z');
	var triangle3 = paper.path('M 150 0 L 150 150 L 100 100 Z');

	new PathColourFiller(triangle, '#aaaaaa', '#ff0000', '#ffffff' ).apply();
	new PathColourFiller(triangle2, '#aaaaaa', '#ff0000', '#ffffff').apply();
	new PathColourFiller(triangle3, '#aaaaaa', '#ff0000', '#ffffff').apply();
});


