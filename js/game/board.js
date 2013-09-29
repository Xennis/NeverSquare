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
				if (elementColor === clickedItemColor || elementColor === GAME.settings.baseColor) {
					isCorrect = false;
					element.isCorrect = false;
				}
		});
		return isCorrect;
	}

	return {
		buildBoard: function () {
			board = [];
			var canvas = document.getElementById("canvas_container");
			jQuery("#canvas_container").html("");
			var xlength = 784, ylength = 584; 
			paper = Raphael(canvas, xlength, ylength);

			shapes = VoronoiDemo.generateShapes();
			jQuery.each(shapes, createSVGString);
			jQuery.each(board, function(index, svgString){
					var shape = paper.path(svgString);
					shape.isCorrect = false;
					shape.attr({fill: GAME.settings.baseColor, stroke: "#fff"});
					shape.filler = new PathColourFiller(
							shape, 
							window.GAME.getCurrentColor, 
							GAME.settings.baseColor, 
							function(item) {
            					GAME.board.checkBoard(item);
        					}
        				);
        			shape.filler.apply();
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
			paper.forEach(function (shape) {
				boardCorrect = boardCorrect && shape.isCorrect;
			});
			if(boardCorrect === true){
				GAME.completeLevel();
			}
		},
		resetBoard: function(){
			paper.forEach(function(element){
				element.isCorrect = false;
				element.attr({fill: GAME.settings.baseColor});
				element.filler.reset();
			})
			GAME.timer.resetTimer();
			GAME.timer.toggle();
		},
		getPaper: function () {
			return paper;
		}
	}

}(jQuery, undefined));
