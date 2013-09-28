var PathColourFiller = function(item, currentColor, colorOut, onClickCallback) {
	var self = this;
		checkMe = false;

	this.fin = function(ev) {
		if (!self.clicked) {
			item.attr('fill', "rgba(0,0,0,.4)");
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
	}

	this.reset = function(){
		self.clicked = false;
	}
}
