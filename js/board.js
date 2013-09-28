window.BOARD = (function (jQuery){

	var board = [],
	 	shapes;

	function createSVGString(pathIndex, coordinates){
		var svgString = "";

		svgString += "M" + coordinates[0].x + "," + coordinates[0].y;
		for (var i=1; i<coordinates.length; i+=1) {
			svgString += " L" + coordinates[i].x + "," + coordinates[i].y;
		}
		svgString += " Z";

		board.push(svgString);
	}

	return {
		buildBoard: function(){
			shapes = shapes ? shapes : VoronoiDemo.generateShapes();
			jQuery.each(shapes, createSVGString);
			return board;
		}
	}

}(jQuery, undefined));
