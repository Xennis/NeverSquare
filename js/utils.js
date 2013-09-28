function makeArrayset(arr, key) {
	var seen = {};
	return arr.filter(function(elem) {
		var k = key(elem);
		return (seen[k] === 1) ? 0 : seen[k] = 1;
	});
}

function getRandomColorIndex() {
		return Math.floor(Math.random() * 4);
	}

