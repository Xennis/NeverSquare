window.GAME = function() {

	var colorIndex = 0;

	function jQuerySetEvents(){
		// restart button
		jQuery("#restart").click(function(event){
			jQuery("#overlay").hide().val;
			GAME.board.resetBoard();
		}),
		// start button
		jQuery("#start").click(function(event){
			var player_name = jQuery("#playerName").val();
			GAME.player.init(player_name);
			jQuery("#start_screen").hide();
			jQuery("#play_screen").show();
			GAME.timer.resetTimer();
			GAME.start();
		}),
		// next level button
		jQuery("#nextLevel").click(function(event){
			jQuery("#overlay").hide().val;
			GAME.timer.resetTimer();
			GAME.start();
		})
	}

	function timeOutHtml(){
		jQuery("#overlay").show();
		jQuery("#complete").hide();
		jQuery("#timeOut").show();
	}

	function completeHtml(){
		jQuery("#overlay").show();
		jQuery("#timeOut").hide();
		jQuery("#complete").show();
		jQuery("#score").html("Score: " + GAME.player.score);
	}

	function randomColor() {
		colorIndex = getRandomInteger(3);
		jQuery("#colorPreview").css("background-color", GAME.getCurrentColor().active);
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
			timePerColor: 500,
			incrementTime: 70,
			addedShapesPerLevel: 2,
		},

		mouse: {
			x:0, 
			y:0
		},

		init: function () {
			GAME.player.init();
			//Call random color to get the first color
			randomColor();
			jQuerySetEvents();
			jQuery("#play_screen").hide();
		},

		start: function () {
		    this.board.buildBoard();
		    GAME.timer.toggle();
        },


		timeOut: function (){
			GAME.player.failLevel();
 			timeOutHtml();
		},

		completeLevel: function () {
			GAME.timer.toggle();
			GAME.player.completeLevel(GAME.timer.getCurrentTime());
			completeHtml();
			this.settings.numShapes += this.settings.addedShapesPerLevel;
		},

		getCurrentColor: function() {
			return {
				hover: window.GAME.settings.hoverColors[colorIndex], 
				active: window.GAME.settings.colors[colorIndex]
			}
		}
	}
}();

