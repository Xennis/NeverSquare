window.GAME = function() {

	function timeOutHtml(){
		jQuery("#complete").hide();
		jQuery("#timeOut").show();
	}

	function jQuerySetEvents(){
		jQuery("#restart").click(function(event){
			jQuery("#overlay").hide().val;

			GAME.board.resetBoard();
		}),
		jQuery("#start").click(function(event){
			var player_name = jQuery("#playerName").val();
			GAME.player.init(player_name);
			jQuery("#start_screen").hide();
			jQuery("#play_screen").show();
			GAME.start();
		})
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

		init: function () {
			jQuerySetEvents();
			jQuery("#play_screen").hide();
		},

		start: function () {
			

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
			var colorIndex = getRandomColorIndex();
			return {
				hover: window.GAME.settings.hoverColors[colorIndex], 
				in: window.GAME.settings.colors[colorIndex]
			}
		}


	}
}();

