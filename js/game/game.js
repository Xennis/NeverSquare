window.GAME = function() {

	var colorIndex = 0;

	function jQuerySetEvents(){
		// restart button
		jQuery("#restart").click(function(event){
			window.VIEW.hideLayer();
			GAME.board.resetBoard();
		}),
		// start button
		jQuery("#start").click(function(event){
			GAME.player.init(jQuery("#playerName").val());

			window.VIEW.showScreenPlay();
			GAME.start();
		}),
		// next level button
		jQuery("#nextLevel").click(function(event){
			window.VIEW.hideLayer();
			GAME.start();
		})
	}

	function randomColor() {
		colorIndex = getRandomInteger(3);
		window.VIEW.updateSidebarColorPreview(GAME.getCurrentColor().active);
		setTimeout(randomColor, GAME.settings.timePerColor);
	}

	return {
		settings: {
			height: 600,
			width: 800,
			numShapes: 2,
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
			window.VIEW.showScreenStart();
		},

		start: function () {
			GAME.timer.resetTimer();
		    this.board.buildBoard();
		    GAME.timer.toggle();
        },


		timeOut: function (){
			GAME.player.failLevel();
			window.VIEW.showLayerTimeout();
		},

		completeLevel: function () {
			GAME.timer.toggle();
			this.settings.numShapes += this.settings.addedShapesPerLevel;
			GAME.player.completeLevel(GAME.timer.getCurrentTime());
			window.VIEW.showLayerComplete(GAME.player.score);
		},

		getCurrentColor: function() {
			return {
				hover: window.GAME.settings.hoverColors[colorIndex], 
				active: window.GAME.settings.colors[colorIndex]
			}
		}
	}
}();

