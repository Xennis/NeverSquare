var PathColourFiller = function(item, currentColor, colorOut, onClickCallback) {
	var self = this;
		checkMe = false;

	this.fin = function(ev) {
		if (!self.clicked) {
			item.attr('fill', currentColor().hover);
		}
	}

	this.fclick = function(ev) {
		if (self.clicked) {
			self.clicked = false;
			self.fin(ev);
			return;
		}

		item.attr('fill', currentColor().active);
		self.clicked = true;

		if (typeof(onClickCallback) !== "undefined") {
			onClickCallback(item);
		}
	}

	this.fout = function(ev) {
		checkMe = false;
		if (!self.clicked) {
			item.attr('fill', colorOut);
		}
	}

	this.apply = function() {
		item.hover(self.fin, self.fout);
		item.click(self.fclick);
		item.mousemove(function(ev){
			GAME.mouse.x = ev.x;
			GAME.mouse.y = ev.y;
		});
	}

	function updateCurrentColor() {
		var _item = GAME.board.getPaper().getElementByPoint(GAME.mouse.x, GAME.mouse.y);
		if (_item) {
			_item.attr('fill', currentColor().hover);
		}

		setTimeout(updateCurrentColor, 100);
	}
	updateCurrentColor();

	this.reset = function(){
		self.clicked = false;
	}
}
