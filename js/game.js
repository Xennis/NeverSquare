window.GAME = (function (jQuery){

	return {
		settings: {
			height: 600,
			width: 800,
			numShapes: 4,
			colors: new Array("#6495ed", "#8b0000", "#9ACD32", "#ffa500"),
			hoverColors: new Array("#CAE1FF", "#CD0000", "#adff2f","#FFD700"),
			timePerShape: 1000,
			incrementTime: 70

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

