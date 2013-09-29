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

		showLayerTimeout: function(){
			jQuery("#overlay").show();
			jQuery("#complete").hide();
			jQuery("#timeOut").show();
		},

		showLayerComplete: function(numScores){
			jQuery("#overlay").show();
			jQuery("#timeOut").hide();
			jQuery("#complete").show();
			jQuery("#score").text("Score: " + numScores);
		},

		showTutorialLayer: function(){
			jQuery("#overlay").show();
			jQuery("#timeOut").hide();
			jQuery("#complete").hide();
			jQuery("#tutorial").show();
		},

		hideTutorialLayer: function(){
			jQuery("#overlay").hide();
			jQuery("#timeOut").hide();
			jQuery("#complete").hide();
			jQuery("#tutorial").hide();
		},

		// ------ sidebar (play screen) -------
		updateSidebarPlayer: function(name, numLevel, numShapes, numScores) {
			jQuery('#play_screen #playerName').text(name);
			jQuery('#levelNumber').text(numLevel);
			jQuery('#shapesNumber').text(numShapes);
			jQuery('#scoreNumber').text(numScores);
		},

		updateSidebarColorPreview: function(color) {
			jQuery("#colorPreview").css("background-color", color);
		},

		updateSidebarTime: function(time) {
			jQuery('#gameTime').text(time);
		}



	}
}();