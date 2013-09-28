window.GAME = function() {

	var colorIndex = 0;

	function timeOutHtml(){
		jQuery("#complete").hide();
		jQuery("#timeOut").show();
	}

	function jQuerySetEvents(){
		jQuery("#restart").click(function(event){
			jQuery("#overlay").hide();
			GAME.board.resetBoard();
		})
	}

	function completeHtml(){

	}

	function randomColor() {
		colorIndex = getRandomColorIndex();
		jQuery("#update");
		console.log(GAME.getCurrentColor());
		setTimeout(randomColor, GAME.settings.timePerColor);
	}

	return {
		settings: {
			height: 600,
			width: 800,
			numShapes: 4,
			scoreMod: 0.3,
			colors: new Array("#6495ed", "#8b0000", "#9ACD32", "#ffa500"),
			hoverColors: new Array("#CAE1FF", "#CD0000", "#adff2f","#FFD700"),
			baseColor: "#ddd",	
			timePerShape: 3000,
			timePerColor: 2000,
			incrementTime: 70,
			addedShapesPerLevel: 2,
		},

		init: function () {
			GAME.player.init();
			//Call random color to get the first color
			randomColor();
		},

		start: function () {
			jQuerySetEvents();

			//this.board.clearBoard();
		    this.board.buildBoard();
        },


		timeOut: function (){
 			timeOutHtml();
			jQuery("#overlay").show();
			GAME.player.failLevel();
		},

		completeLevel: function () {
			GAME.timer.toggle();
			GAME.player.completeLevel();
			jQuery("#overlay").show();
			this.settings.numShapes = this.settings.numShapes + this.settings.addedShapesPerLevel;
			this.start();

		},

		getCurrentColor: function() {
			return {
				hover: window.GAME.settings.hoverColors[colorIndex], 
				in: window.GAME.settings.colors[colorIndex]
			}
		}
	}
}();

