window.VIEW = function() {

	return {

		// ------ screen -------
		showScreenStart: function() {
			jQuery("#start_screen").show();
			jQuery("#play_screen").hide();				
		},

		showScreenPlay: function() {
			jQuery("#start_screen").hide();
			jQuery("#play_screen").show();			
		},

		// ------ layer -------
		hideLayer: function() {
			jQuery("#overlay").hide().val;
		},

		showLayer: function(layerId) {
			jQuery("#overlay").show();
			jQuery("#complete").hide();
			jQuery("#timeOut").hide();
			jQuery("#tutorial").hide();
			jQuery("#highscore").hide();
			jQuery(layerId).show();			
		},

		showLayerTimeout: function(losePoints){
			this.showLayer("#timeOut");
			jQuery('#timeOut #losePoints').text("Lose points: " + losePoints);
		},

		showLayerComplete: function(numLevel, numShapes, numScores){
			this.showLayer("#complete");
			jQuery('#complete #levelNumber').text("Level: " + numLevel);
			jQuery('#complete #shapesNumber').text("Shapes: " + numShapes);
			jQuery("#complete #score").text("Score: " + numScores);
		},

		showLayerTutorial: function(timePerColor){
			this.showLayer("#tutorial");
			jQuery("#tutorial #timePerColor").text(timePerColor);
		},

		showLayerHighscore: function(scoreList){
			/*var highscore = jQuery("#highscore");
			jQuery.each(scoreList, function(index, score){
				var playerSpan = "<span id=\"p"+(index+1)+"\" class=\"player\">"+ score.name+"</span>";
				var scoreSpan = "<span id=\"s"+(index+1)+"\" class=\"score\">"+ score.score+"</span>";
				highscore.html(playerSpan);
				highscore.html(scoreSpan);
			});
			*/
			this.showLayer("#highscore");
		},

		// ------ sidebar (play screen) -------
		updateSidebarPlayer: function(name, numLevel, numScores, numTries) {
			jQuery('#play_screen #playerName').text(name);
			jQuery('#levelNumber').text(numLevel);
			jQuery('#scoreNumber').text(numScores);
			jQuery('#triesNumber').text(numTries);
		},

		updateSidebarColorPreview: function(currentColor, nextColor) {
			jQuery("#colorPreview #currentColor").css("background-color", currentColor);
			jQuery("#colorPreview #nextColor").css("background-color", nextColor);
		},

		updateSidebarTime: function(time) {
			jQuery('#gameTime').text(time);
		}

	}
}();