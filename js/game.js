window.GAME = (function (jQuery){

	return {
		settings: {
			height: 600,
			width: 800,
			numShapes: 4
		},

		start: function () {
		    this.board.buildBoard();

		    jQuery("#time").text();
		}
	}

}(jQuery, undefined));
