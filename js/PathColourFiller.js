var PathColourFiller = function(item, currentColor, colorOut, onClickCallback) {
	var self = this,
		colorClick,
		colorIn;

	this.fin = function(ev) {
		var currentColorArray = currentColor();
		colorClick = currentColorArray.in;
		colorIn = currentColorArray.hover;

		if (!self.clicked) {
			item.attr('fill', colorIn);
		}
	}

	this.fclick = function(ev) {
		if (self.clicked) {
			self.clicked = false;
			self.fin(ev);
			return;
		}

		item.attr('fill', colorClick);
		self.clicked = true;

		if (typeof(onClickCallback) !== "undefined") {
			onClickCallback(item);
		}
	}

	this.fout = function(ev) {
		if (!self.clicked) {
			item.attr('fill', colorOut);
		}
	}

	this.apply = function() {
		item.hover(self.fin, self.fout);
		item.click(self.fclick);
	}

	this.reset = function(){
		self.clicked = false;
	}
}
