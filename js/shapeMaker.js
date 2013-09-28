var EdgeChain = function() {
	var self = this;

	this.first_edge = null;
	this.points = {};

	this.pointKey = function(point) {
		return ""+point.x+";"+point.y;
	}

	this.addEdge = function(edge) {
		var edgePoints = [ edge.va, edge.vb ];

		for (var i = 0; i < edgePoints.length; i++) {
			var p = edgePoints[i];
			if (self.points[self.pointKey(p)]) {
				self.points[self.pointKey(p)].push(edge);
			} else {
				self.points[self.pointKey(p)] = [ edge ];
			}
		}
		self.first_edge = self.first_edge ? self.first_edge : edge;
	};

	this.getShape = function() {
		if (self.first_edge === null) {
			return null;
		}

		var result = [];
		result.push(self.first_edge.va);

		var last_edge = self.first_edge;
		var next_edge = self.points[self.pointKey(self.first_edge.vb)][0];
		while(true) {
			if (typeof(next_edge) === "undefined") {
				console.log("Tried to obtain incomplete shape. Aborting");
				return null;
			}

			var other_point = self.pointKey(next_edge.va) == self.pointKey(last_edge.va) || self.pointKey(next_edge.va) == self.pointKey(last_edge.vb) ? next_edge.vb : next_edge.va;

			result.push(other_point);

			last_edge = next_edge;
			var next_edge_cands = self.points[self.pointKey(other_point)];
			next_edge = next_edge_cands[0] === next_edge ? next_edge_cands[1] : next_edge_cands[0];

			if (next_edge === self.first_edge) {
				break;
			}
		}

		return result;
	};
}


var VoronoiDemo = {
	voronoi: new Voronoi(),
	sites: [],
	diagram: null,
	margin: 0.1,
	bbox: {xl:0,xr:window.GAME.settings.width,yt:0,yb:window.GAME.settings.height},
	lastCell: undefined,

	generateShapes: function() {
		this.randomSites(window.GAME.settings.numShapes,this.bbox.xr,this.bbox.yb);

		var shapes = this.getShapes();
		return shapes;
	},


	randomSites: function(numShapes,width,height) {
		this.sites = [];
		// create vertices
		var xmargin = width*this.margin,
			ymargin = height*this.margin,
			xo = xmargin,
			dx = width-xmargin*2,
			yo = ymargin,
			dy = height-ymargin*2;
		for (var i=0; i<numShapes; i++) {
			this.sites.push({x:self.Math.round((xo+self.Math.random()*dx)*10)/10,y:self.Math.round((yo+self.Math.random()*dy)*10)/10});
		}
		this.diagram = this.voronoi.compute(this.sites, this.bbox);
	},

	getShapes: function() {
		var shapeArray = new Array();
		for (i = 0; i<this.diagram.cells.length; i++) {
			var edgeChain = new EdgeChain();
			var halfedges = this.diagram.cells[i].halfedges;
			for (j = 0; j< halfedges.length; j++) {
				var edge = halfedges[j].edge;
				edgeChain.addEdge(edge);
			}
			//	shapeArray[i] = edgeChain.getShape();
			var shape = edgeChain.getShape();
			if (shape != null) {
				shapeArray.push(shape);
			}
		}

	//console.log(shapeArray);

		return shapeArray;
	},
};
