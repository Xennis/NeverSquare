var ColorGenerator = function() {

	var colors = new Array("#6495ed", "#8b0000", "#adff2f", "#ffa500");

	this.getRandomColor = function() {
		return Math.floor(Math.random() * 4);
	}


}