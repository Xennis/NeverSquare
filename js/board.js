GAME.board = (function (jQuery){

	var board = [],
	 	shapes,
	 	paper,
	 	finder;

	function createSVGString(pathIndex, coordinates){
		var svgString = "";

		svgString += "M" + coordinates[0].x + "," + coordinates[0].y;
		for (var i=1; i<coordinates.length; i+=1) {
			svgString += " L" + coordinates[i].x + "," + coordinates[i].y;
		}
		svgString += " Z";

		board.push(svgString);
	}

	function checkNeighbours(clickedItem) {
		var clickedItemColor = clickedItem.attr("fill")
		var isCorrect = true;
		var neighbours = finder.getNeighbours(clickedItem);
		jQuery.each(neighbours, function(index, element) {
			var elementColor = element.attr("fill");
				if (elementColor === clickedItemColor) {
					isCorrect = false;
					element.isCorrect = false;
				}
		});
		return isCorrect;
	}

	return {
		buildBoard: function () {
			var canvas = document.getElementById("canvas_container");
			var xlength = 800, ylength = 600; 
			paper = Raphael(canvas, xlength, ylength);

			shapes = shapes ? shapes : VoronoiDemo.generateShapes();
			jQuery.each(shapes, createSVGString);
			jQuery.each(board, function(index, svgString){
					var shape = paper.path(svgString);
					shape.isCorrect = false;
					shape.attr({fill: "#ddd"});
					var colorIndex = getRandomColorIndex();
					new PathColourFiller(shape, window.GAME.settings.hoverColors[colorIndex], window.GAME.settings.colors[colorIndex], "#ffffff", function(item) {
            		BOARD.checkBoard(item);
        		}).apply();
			});

			finder = new PathNeighbourFinder(paper);
		},
		checkBoard: function (clickedItem) {
			var boardCorrect = true;
			//check local
			var clickedItemColor = clickedItem.attr("fill")
			var neighbours = finder.getNeighbours(clickedItem);
			
			clickedItem.isCorrect = checkNeighbours(clickedItem);

			//check neighbours of neighbours
			jQuery.each(neighbours, function(index, shape) {
				shape.isCorrect = checkNeighbours(shape);
			});

			//check global
			console.log(shapes);
			paper.forEach(function (shape) {
				boardCorrect = boardCorrect && shape.isCorrect;
			});
			paper.forEach(function (shape){
				console.log(shape.isCorrect);
			});
			console.log(boardCorrect);
		}
	}

}(jQuery, undefined));
