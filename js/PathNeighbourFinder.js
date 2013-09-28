var PathNeighbourFinder = function(paper) {
	var self = this;

	this.pointKey = function(x,y) {
		return ""+x+","+y;
	}

	this.init = function() {
		self.intersections = {}

		paper.forEach(function(element) {
			var next = element.next;
			while (next) {
				var intersections = Raphael.pathIntersection(element.attr('path'), next.attr('path'));
				var points = Array()
				var uniquePoints = Array();

				for (var i = 0; i < intersections.length; i++) {
					var intersection = intersections[i];
					
					var x = Math.round(intersection.x);
					var y = Math.round(intersection.y);

					points.push([x, y]);
				}

				var uniquePoints = makeArrayset(points, function(point) {
					return self.pointKey(point[0], point[1]);
				});

				var amountOfIntersections = uniquePoints.length;
				if (amountOfIntersections > 1) {
					if (! (element.id in self.intersections)) self.intersections[element.id] = Array();
					if (! (next.id in self.intersections))    self.intersections[next.id] = Array();
					
					self.intersections[element.id].push(next.id);
					self.intersections[next.id].push(element.id);
				}

				next = next.next;
			}
			return true;
		});
	}

	/**
	 * Call -this- function.
	 */
	this.getNeighbours = function(element) {
		var ids = self.intersections[element.id];
		var result = Array(ids.length);

		for (var i = 0; i < ids.length; i++) {
			result[i] = paper.getById(ids[i]);
		}

		return result;
	}

	this.init();
}


