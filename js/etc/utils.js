var lastRandomInteger;

function makeArrayset(arr, key) {
	var seen = {};
	return arr.filter(function(elem) {
		var k = key(elem);
		return (seen[k] === 1) ? 0 : seen[k] = 1;
	});
}

function getRandomInteger(max) {
	return Math.floor(Math.random() * (max + 1));
}

function getRandomColorIndex() {
	newRandomInteger = getRandomInteger(100) % 3;
	if (newRandomInteger == lastRandomInteger) {

	}

	lastRandomInteger = newRandomInteger;
	return newRandomInteger;
}