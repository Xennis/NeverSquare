window.GAME = function() {

	var colorIndex = 0;

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
			GAME.timer.resetTimer();
			GAME.start();
		});
		jQuery("#nextLevel").click(function(event){
			jQuery("#overlay").hide().val;
			GAME.timer.resetTimer();
			GAME.start();
		});
		jQuery("#colorPreview").click(function(){
			GAME.randomColor();
		});
		jQuery("body").keyup(function(event){
			if (event.which === 68) {
				colorIndex = colorIndex === 4 ? 0 : colorIndex + 1;	
			}
			if (event.which === 65) {
				colorIndex = colorIndex === 0 ? 4 : colorIndex - 1;
			}
			console.log(colorIndex);
			GAME.randomColor();
			event.preventDefault();
		});
	}

	function completeHtml(){
		jQuery("#timeOut").hide();
		jQuery("#complete").show();
		jQuery("#score").html("Score: " + GAME.player.scoreLastGame);
	}

	return {
		settings: {
			height: 550,
			width: 750,
			numShapes: 4,
			scoreMod: 0.3,
			colors: new Array("#6495ed", "#8b0000", "#9ACD32", "#ffa500"),
			hoverColors: new Array("#CAE1FF", "#CD0000", "#adff2f","#FFD700"),
			baseColor: "rgba(0,0,0,.4)",	
			timePerShape: 40000,
			timePerColor: 1000,
			incrementTime: 70,
			addedShapesPerLevel: 2,
		},

		init: function () {
			GAME.player.init();
			//Call random color to get the first color
			(function randomColorTimer () {
				colorIndex = getRandomColorIndex();
				GAME.randomColor();
				setTimeout(randomColorTimer, GAME.settings.timePerColor);
			}());
			jQuerySetEvents();
			jQuery("#play_screen").hide();
		},

		start: function () {
			//this.board.clearBoard();
		    this.board.buildBoard();
		    GAME.timer.toggle();
        },


		timeOut: function (){
 			timeOutHtml();
			jQuery("#overlay").show();
			GAME.player.failLevel();
		},

		completeLevel: function () {
			GAME.timer.toggle();
			GAME.player.completeLevel();
			completeHtml();
			jQuery("#overlay").show();
			this.settings.numShapes = this.settings.numShapes + this.settings.addedShapesPerLevel;
		},

		getCurrentColor: function() {
			return {
				hover: window.GAME.settings.hoverColors[colorIndex], 
				active: window.GAME.settings.colors[colorIndex]
			}
		},

		randomColor: function () {
    		jQuery("#colorPreview").css("background-color", GAME.getCurrentColor().active);
		},

		mouse: {
			x:0, 
			y:0
		}
	}
}();

