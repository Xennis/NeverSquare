window.GAME = function() {

	function jQuerySetEvents(){
		// restart button
		jQuery("#restart").click(function(event){
			window.VIEW.hideLayer();
			GAME.board.resetBoard();
		}),
		// button start
		jQuery("#start").click(function(event){
			GAME.player.init(jQuery("#playerName").val());

			window.VIEW.showScreenPlay();
			GAME.start();
		}),
		// button tutorial
		jQuery("#startTutorial").click(function(event){
			window.GAME.timer.toggle();
			window.VIEW.showLayerTutorial(window.GAME.settings.timePerColor/1000);
		}),

		// button player
		jQuery(".button_play").click(function(event){
			window.VIEW.hideLayer();
			window.GAME.timer.toggle();
		}),

		// button highscore
		jQuery("#showHighscore").click(function(event){
			window.GAME.timer.toggle();
			//GAME.scorelist.getScoreList(window.VIEW.showHighscoreLayer);
			window.VIEW.showLayerHighscore(0);
		}),

		// button next level
		jQuery("#nextLevel").click(function(event){
			window.VIEW.hideLayer();
			GAME.start();
		}),

		//
		jQuery("#colorPreview").click(function(){
			
		}),
		jQuery("body").keyup(function(event){
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

			height: 600,
			width: 800,
			numShapes: 2,
			scoreMod: 0.3,
			colors: new Array("#6495ed", "#8b0000", "#9ACD32", "#ffa500"),
			hoverColors: new Array("#CAE1FF", "#CD0000", "#adff2f","#FFD700"),
			baseColor: "rgba(0,0,0,.4)",	
			timePerShape: 15000,
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
				GAME.colorlist.setNextColor();
				setTimeout(randomColorTimer, GAME.settings.timePerColor);
				window.VIEW.updateSidebarColorPreview(
					GAME.colorlist.getCurrentColor().active, 
					GAME.colorlist.getNextColor().active
				);
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
			var losePoints = GAME.player.failLevel();
			window.VIEW.showLayerTimeout(losePoints);
			
			GAME.scorelist.checkHighScore(GAME.player.getName(), GAME.player.getScore());
		},

		completeLevel: function () {
			GAME.timer.toggle();
			GAME.player.completeLevel(GAME.timer.getCurrentTime());
			window.VIEW.showLayerComplete(GAME.player.level, GAME.settings.numShapes, GAME.player.scoreLastGame);
			this.settings.numShapes += this.settings.addedShapesPerLevel;

			GAME.scorelist.checkHighScore(GAME.player.getName(), GAME.player.getScore());
		},

		getCurrentColor: function() {
			return GAME.colorlist.getCurrentColor();
		},
	}
}();

