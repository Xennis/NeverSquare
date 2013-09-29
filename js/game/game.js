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
		});
		// Tutorial buttons
		jQuery("#startTutorial").click(function(event){
			window.GAME.timer.toggle();
			window.VIEW.showTutorialLayer();
		}),

		jQuery("#endTutorial").click(function(event){
			window.VIEW.hideTutorialLayer();
			window.GAME.timer.toggle();
		});
		// next level button
		jQuery("#nextLevel").click(function(event){
			window.VIEW.hideLayer();
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
			GAME.randomColor();
			event.preventDefault();
		});
	}

	function completeHtml(){
		jQuery("#timeOut").hide();
		jQuery("#complete").show();
		jQuery("#score").html("Score: " + GAME.player.scoreLastGame);
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
			baseColor: "rgba(0,0,0,.4)",	
			timePerShape: 40000,
			timePerColor: 1000,
			incrementTime: 70,
			addedShapesPerLevel: 2,
		},

		mouse: {
			x:0, 
			y:0
		},

		init: function () {
			GAME.player.init();
			GAME.colorlist.init();
			//Call random color to get the first color
			(function randomColorTimer () {
				colorIndex = getRandomInteger(4);
				GAME.randomColor();
				GAME.colorlist.setNextColor();
				setTimeout(randomColorTimer, GAME.settings.timePerColor);
			}());
			jQuerySetEvents();
			window.VIEW.showScreenStart();
		},

		start: function () {
			GAME.player.nextLevel();
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
			GAME.player.completeLevel(GAME.timer.getCurrentTime());
			window.VIEW.showLayerComplete(GAME.player.level, GAME.settings.numShapes, GAME.player.scoreLastGame);
			this.settings.numShapes += this.settings.addedShapesPerLevel;
		},

		getCurrentColor: function() {
			console.log(GAME.colorlist.getCurrentColor());
			console.log(GAME.colorlist.getNextColor());
			return {
				hover: window.GAME.settings.hoverColors[colorIndex], 
				active: window.GAME.settings.colors[colorIndex]
			}
		},

		randomColor: function () {
			window.VIEW.updateSidebarColorPreview(GAME.getCurrentColor().active);
		},
	}
}();

