window.GAME = (function (jQuery){

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

	return {
		settings: {
			height: 600,
			width: 800,

			numShapes: 20,
			scoreMod: 0.3,
			colors: new Array("#6495ed", "#8b0000", "#9ACD32", "#ffa500"),
			hoverColors: new Array("#CAE1FF", "#CD0000", "#adff2f","#FFD700"),
			timePerShape: 1000,
			incrementTime: 70

		},

		start: function () {
			jQuerySetEvents();

			//this.board.clearBoard();
		    this.board.buildBoard();
        },


		timeOut: function (){
 			timeOutHtml();
			jQuery("#overlay").show();
		},

		completeLevel: function(){
			GAME.timer.toggle();
			var time = GAME.timer.getCurrentTime();
			var score = time*this.settings.numShapes*this.settings.scoreMod;
			jQuery("#overlay").show();

		},

		getCurrentColor: function() {
			var colorIndex = getRandomColorIndex();
			return {
				hover: window.GAME.settings.hoverColors[colorIndex], 
				in: window.GAME.settings.colors[colorIndex]
			}
		}


	}


}(jQuery, undefined));

