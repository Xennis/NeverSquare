GAME.player = function() {
	
	var name;
	var level;
	var score;
	var tries;

	var htmlLevel;
	var htmlSpades;
	var htmlScores;

	return {

		init: function(name) {
			this.name = name;
			this.level = 1;
			this.score = 0;
			this.tries = 0;

			htmlLevel = $('#levelNumber');
			htmlLevel.text(this.level);
			htmlSpades = $('#spadesNumber');
			htmlSpades.text(GAME.settings.numShapes);
			htmlScores = $('#scoreNumber');
			htmlScores.text(this.score);
			$('#play_screen #playerName').text(this.name);
		},

		completeLevel: function() {
			//var time = GAME.timer.getCurrentTime();
			//var score = time*this.settings.numShapes*this.settings.scoreMod;
			var time = GAME.timer.getCurrentTime();
			this.score = time * GAME.settings.numShapes * GAME.settings.scoreMod;
			this.level++;
			this.tries = 0;
	        
	        htmlLevel.text(this.level);
			htmlSpades.text(GAME.settings.numShapes);
			htmlScores.text(this.score);
		},

		failLevel: function() {
			this.tries++;
		}
	}
}();