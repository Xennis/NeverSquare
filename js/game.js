window.GAME = (function (jQuery){

	function timeOutHtml(){
		jQuery("#complete").hide();
		jQuery("#timeOut").show();
	}

	function completeHtml(){


	}

	return {
		settings: {
			height: 600,
			width: 800,
			numShapes: 20,
			scoreMod: 0.3
		},

		start: function () {
		    this.board.buildBoard();


            
        },


		timeOut: function (){
 			timeOutHtml();
			jQuery("#overlay").show();
		},

		completeLevel: function(){
			GAME.timer.toggle();
			var time = GAME.timer.getCurrentTime();
			var score = time*this.settings.numShapes*this.settings.scoreMod;
			jQuery("#overlay").show();

		}
	}


}(jQuery, undefined));

