GAME.player = function() {
	
	var name;
	var level;
	var score;
	var tries;

	var htmlLevel;

	return {

		init: function() {
			this.name = "default";
			this.level = 1;
			this.score = 0;
			this.tries = 0;

			htmlLevel = $('#levelNumber');
			htmlLevel.text(this.level);		
		},

		completeLevel: function() {
			//var time = GAME.timer.getCurrentTime();
			//var score = time*this.settings.numShapes*this.settings.scoreMod;
			var time = GAME.timer.getCurrentTime();
			this.score = time * GAME.settings.numShapes * GAME.settings.scoreMod;
			this.level++;
			this.tries = 0;
	        
	        htmlLevel.text(this.level);
		},

		failLevel: function() {
			this.tries++;
		}
	}
}();