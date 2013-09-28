window.GAME = (function (jQuery){

	return {
		settings: {
			height: 600,
			width: 800,
			numShapes: 4
		},

		start: function () {
		    this.board.buildBoard();


            
        },


		timeOut: function (){
 			//alert('Example 2: Countdown timer complete!');
			jQuery("#overlay").show();
		}
	}


}(jQuery, undefined));

