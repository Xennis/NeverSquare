window.BOARD = (function (jQuery){

	var board = [],
	 	shapes = [
			[
				{x: 10, y:10},
				{x: 10, y:120},
				{x: 120, y:120},
				{x: 120, y:10}
			],
			[{x:10 ,y:110},
			{x:10 ,y:230},
			{x:120 ,y:230},
			{x:120 ,y:120}],
			//[],
			//[],
			/**
			M10,110L10,230L120,230L120,120Z");
	var p3 = paper.path("M120,30L230,10L230,120L120,100Z");
	var p4 = paper.path("M120,120L230,120L230,230L120,230Z");
			*/
		];

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
			jQuery.each(shapes, createSVGString);
			return board;
		}
	}

}(jQuery, undefined));