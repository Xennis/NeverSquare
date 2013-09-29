GAME.player = function() {
	
	var name;
	var level;
	var score;
	var scoreLastGame;
	var tries;

	return {

		init: function(name) {
			this.name = name;
			this.level = 0;
			this.score = 0;
			this.tries = 0;

			this.updateView();
		},

		completeLevel: function(time) {
			this.scoreLastGame = time * GAME.settings.numShapes * GAME.settings.scoreMod;
			this.score += this.scoreLastGame; 
			this.updateView();
		},

		nextLevel: function() {
			this.level++;
			this.tries = 0;
			this.updateView();
		},

		failLevel: function() {
			this.tries++;
			this.updateView();
		},

		updateView: function() {
	        window.VIEW.updateSidebarPlayer(this.name, this.level, this.score, this.tries);	
		}
	}
}();