GAME.player = function() {
	
	var name;
	var level;
	var score;
	var tries;

	var htmlLevel;
	var htmlShapes;
	var htmlScores;

	return {

		init: function(name) {
			this.name = name;
			this.level = 1;
			this.score = 0;
			this.tries = 0;

			htmlLevel = $('#levelNumber');
			htmlShapes = $('#shapesNumber');
			htmlScores = $('#scoreNumber');
			$('#play_screen #playerName').text(this.name);
			this.updateDisplay();
		},

		completeLevel: function(time) {
			this.score = time * GAME.settings.numShapes * GAME.settings.scoreMod;
			this.level++;
			this.tries = 0;
	        this.updateDisplay();
		},

		failLevel: function() {
			this.tries++;
		},

		updateDisplay: function() {
	        htmlLevel.text(this.level);
			htmlShapes.text(GAME.settings.numShapes);
			htmlScores.text(this.score);
		}
	}
}();