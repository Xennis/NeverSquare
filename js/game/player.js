GAME.player = function() {
	
	var name;
	var level;
	var score;
	var tries;

	return {

		init: function(name) {
			this.name = name;
			this.level = 1;
			this.score = 0;
			this.tries = 0;

	        window.VIEW.updateSidebarPlayer(this.name, this.level, GAME.settings.numShapes, this.score);
		},

		completeLevel: function(time) {
			this.score = time * GAME.settings.numShapes * GAME.settings.scoreMod;
			this.level++;
			this.tries = 0;
	        window.VIEW.updateSidebarPlayer(this.name, this.level, GAME.settings.numShapes, this.score);
		},

		failLevel: function() {
			this.tries++;
		}
	}
}();