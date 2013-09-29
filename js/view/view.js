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
		},

		showTutorialLayer: function(timePerColor){
			jQuery("#overlay").show();
			jQuery("#timeOut").hide();
			jQuery("#complete").hide();
			jQuery("#tutorial").show();
			jQuery("#timePerColor").text(timePerColor);
		},

		hideTutorialLayer: function(){
			jQuery("#overlay").hide();
			jQuery("#timeOut").hide();
			jQuery("#complete").hide();
			jQuery("#tutorial").hide();
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