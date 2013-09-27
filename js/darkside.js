window.onload = function() {
	var canvas = document.getElementById("canvas_container");
	var paper = Raphael(canvas, 500, 400);
	
	var triangle = paper.path('M 50 0 L 100 100 L 0 100 Z');
	triangle.node.onclick = function() {
		triangle.attr('fill', 'red');
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
	
	var p1 = paper.path("M10,10L10,120L120,120L120,10Z");
	var p2 = paper.path("M10,110L10,230L120,230L120,120Z");
	var p3 = paper.path("M120,30L230,10L230,120L120,100Z");
	var p4 = paper.path("M120,120L230,120L230,230L120,230Z");
	p1.attr({fill: "red"});
	p2.attr({fill: "green", opacity:0.5});
	p3.attr({fill: "blue"});
	p4.attr({fill: "yellow"});

	paper.forEach(function(el){
		paper.forEach(function(ab){
			if(el===ab){return true;}
			var intersections = Raphael.pathIntersection(el.attr('path'), ab.attr('path'));
			intersections = getUniquePoints(intersections);
			if(intersections.length>2){
					console.log(el.attr('fill') + ab.attr('fill'));
			}
		})


	})

	function getUniquePoints(intersections){
		
		return intersections;

	}
	
	var bool = p3.isPointInside(121,50);
	console.log(Raphael.pathIntersection(p3.attr('path'),p4.attr('path')));

	p1.click(function (evt){
		//p1.attr({fill:"black"});




	}

		);
}