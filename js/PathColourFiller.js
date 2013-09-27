var PathColourFiller = function(item, colorIn, colorClick, colorOut, onClickCallback) {
	var self = this;

	this.fin = function(ev) {
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
			onClickCallback();
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
}
