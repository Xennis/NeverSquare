var VoronoiDemo = {
	voronoi: new Voronoi(),
	sites: [],
	diagram: null,
	margin: 0.1,
	bbox: {xl:0,xr:800,yt:0,yb:600},
	lastCell: undefined,

	generateShapes: function() {
		var n = 6;
		this.randomSites(n,true,this.bbox.xr,this.bbox.yb);

		var shapes = this.getShapes();
		console.log(shapes);
		return shapes;
		},


	randomSites: function(n,clear,width,height) {
		if (clear) {this.sites = [];}
		// create vertices
		var xmargin = width*this.margin,
			ymargin = height*this.margin,
			xo = xmargin,
			dx = width-xmargin*2,
			yo = ymargin,
			dy = height-ymargin*2;
		for (var i=0; i<n; i++) {
			this.sites.push({x:self.Math.round((xo+self.Math.random()*dx)*10)/10,y:self.Math.round((yo+self.Math.random()*dy)*10)/10});
			}
		this.diagram = this.voronoi.compute(this.sites, this.bbox);
		},

	getShapes: function() {
		var shapeArray = new Array();
		for (i = 0; i<this.diagram.cells.length; i++) {
			shapeArray[i] = new Array();
			var halfedges = this.diagram.cells[i].halfedges;
			for (j = 0; j< halfedges.length; j++) {
				shapeArray[i][j] = new Array();
				var va = halfedges[j].edge.va;
			//console.log(va);
			shapeArray[i][j] = va;			
			}
		}
		return shapeArray;
		},
	};