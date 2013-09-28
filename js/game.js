window.GAME = function() {

	function timeOutHtml(){
		jQuery("#complete").hide();
		jQuery("#timeOut").show();
	}

	function completeHtml(){


	}

	return {
		settings: {
			height: 600,
			width: 800,
			numShapes: 4,
			scoreMod: 0.3,
			colors: new Array("#6495ed", "#8b0000", "#9ACD32", "#ffa500"),
			hoverColors: new Array("#CAE1FF", "#CD0000", "#adff2f","#FFD700"),
			timePerShape: 3000,
			incrementTime: 70,
			addedShapesPerLevel: 2,
		},

		start: function () {
		    this.board.buildBoard();            
        },


		timeOut: function (){
 			timeOutHtml();
			jQuery("#overlay").show();
//			GAME.player.failLevel();
		},

		completeLevel: function(){
			GAME.timer.toggle();
//			GAME.player.completeLevel();
			jQuery("#overlay").show();
//			this.settings.numShapes = this.settings.numShapes + this.settings.addedShapesPerLevel;
//			this.start;
		}
	}
}();
