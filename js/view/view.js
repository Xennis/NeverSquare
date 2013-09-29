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
			jQuery("#tutorial").hide().val;
		},

		showLayerTimeout: function(losePoints){
			jQuery("#overlay").show();
			jQuery("#complete").hide();
			jQuery("#timeOut").show();
			jQuery("#tutorial").hide();
			jQuery("#highscore").hide();
			jQuery('#timeOut #losePoints').text("Lose points: " + losePoints);
		},

		showLayerComplete: function(numLevel, numShapes, numScores){
			jQuery("#overlay").show();
			jQuery("#timeOut").hide();
			jQuery("#complete").show();
			jQuery('#complete #levelNumber').text("Level: " + numLevel);
			jQuery('#complete #shapesNumber').text("Shapes: " + numShapes);
			jQuery("#complete #score").text("Score: " + numScores);
			jQuery("#tutorial").hide();
			jQuery("#highscore").hide();
		},

		showTutorialLayer: function(timePerColor){
			jQuery("#overlay").show();
			jQuery("#timeOut").hide();
			jQuery("#complete").hide();
			jQuery("#tutorial").show();
			jQuery("#highscore").hide();
			jQuery("#timePerColor").text(timePerColor);
		},

		hideTutorialLayer: function(){
			jQuery("#overlay").hide();
			jQuery("#timeOut").hide();
			jQuery("#complete").hide();
			jQuery("#tutorial").hide();
			jQuery("#highscore").hide();
		},

		showHighscoreLayer: function(scoreList){
			var highscore = jQuery("#highscore");
			jQuery.each(scoreList, function(index, score){
				var playerSpan = "<span id=\"p"+(index+1)+"\" class=\"player\">"+ score.name+"</span>";
				var scoreSpan = "<span id=\"s"+(index+1)+"\" class=\"score\">"+ score.score+"</span>";
				highscore.html(playerSpan);
				highscore.html(scoreSpan);
			});
			
			jQuery("#overlay").show();
			jQuery("#timeOut").hide();
			jQuery("#complete").hide();
			jQuery("#tutorial").hide();
			jQuery("#p1").text("hallo");
			jQuery("#highscore").show();
		},

		hideHighscoreLayer: function(){
			jQuery("#overlay").hide();
			jQuery("#timeOut").hide();
			jQuery("#complete").hide();
			jQuery("#tutorial").hide();
			jQuery("#highscore").hide();
		},

		// ------ sidebar (play screen) -------
		updateSidebarPlayer: function(name, numLevel, numScores, numTries) {
			jQuery('#play_screen #playerName').text(name);
			jQuery('#levelNumber').text(numLevel);
//			jQuery('#shapesNumber').text(numShapes);
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