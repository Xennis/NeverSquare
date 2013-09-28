GAME.player = function() {
	
	var name = "default";
	var level = 1;
	var score = 0;
	var tries = 0;

	var htmlLevel;
	return {
		completeLevel: function() {
			//var time = GAME.timer.getCurrentTime();
			//var score = time*this.settings.numShapes*this.settings.scoreMod;
			var time = GAME.timer.getCurrentTime();
			this.score = time * GAME.settings.numShapes * GAME.settings.scoreMod;
			this.level++;
			this.tries = 0;

	        htmlLevel = $('#levelNumber');
	        htmlLevel.text(this.level);
		},

		failLevel: function() {
			this.tries = this.level + 1;
		}
	}
}();