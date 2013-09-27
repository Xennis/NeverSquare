$(document).ready(function() {
	var canvas = document.getElementById("canvas_container");
	var xlength = 500, ylength = 400; 
	var paper = Raphael(canvas, xlength, ylength);
	
	var triangle = paper.path('M 50 0 L 100 100 L 0 100 Z');
	triangle.node.onclick = function() {
		triangle.attr('fill', 'green');
	}

	// Creates circle at x = 50, y = 40, with radius 10
	//var circle = paper.circle(50, 40, 10);
	//var rec = paper.path("M10 10L10" );
	// Sets the fill attribute of the circle to red (#f00)
	//circle.attr("fill", "#f00");
	//rec.attr("fill", "#0f0");

	// Sets the stroke attribute of the circle to white
	//circle.attr("stroke", "#fff");
	//rec.attr("stroke", "#f0f");
	
	/*var p2 = paper.path("M10,110L10,230L120,230L120,120Z");
	var p3 = paper.path("M120,30L230,10L230,120L120,100Z");
	var p4 = paper.path("M120,120L230,120L230,230L120,230Z");

	p2.attr({fill: "green", opacity:0.5});
	p3.attr({fill: "blue"});
	p4.attr({fill: "yellow"});
*/
	var points = window.BOARD.buildBoard()
	jQuery.each(points, function(index, svgString){
		var shape = paper.path(svgString);
		shape.attr({fill: "red"});
	});


	paper.forEach(function(el){
		paper.forEach(function(ab){
			if(el===ab){
				return true;
			}
			var intersections = Raphael.pathIntersection(el.attr('path'), ab.attr('path'));
			intersections = getUniquePoints(intersections);
			//console.log(intersections);
			if(intersections.length>2){
			//		console.log(el.attr('fill') + ab.attr('fill'));
			}
		})
	});
	//test 
	function getUniquePoints(intersections){
		return intersections;
		var filtered_intersections = [];

		jQuery.each(intersections, function(index, value){
			var point = {
				x: Math.round(value.x),
				y: Math.round(value.y)
			}

			if ( ! jQuery.inArray(point, filtered_intersections)) {
				filtered_intersections.push(point);
			}
			//console.log(filtered_intersections);
		});
		return filtered_intersections;

	}
	
	var bool = p3.isPointInside(121,50);
	//console.log(Raphael.pathIntersection(p3.attr('path'),p4.attr('path')));

	p1.click(function (evt){
		//p1.attr({fill:"black"});




	}

		);
}
