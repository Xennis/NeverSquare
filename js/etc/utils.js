var lastRandomInteger;

function makeArrayset(arr, key) {
	var seen = {};
	return arr.filter(function(elem) {
		var k = key(elem);
		return (seen[k] === 1) ? 0 : seen[k] = 1;
	});
}

/**
 * Get random integer.
 *
 * @param max max value of integer
 * @return integer between zero and max
 */
function getRandomInteger(max) {
	return Math.floor(Math.random() * (max + 1));
}

function getRandomColorIndex() {
	newRandomInteger = getRandomInteger(3);
	if (newRandomInteger == lastRandomInteger) {
		newRandomInteger = (newRandomInteger + 1) % 4;
	}
	//console.log("random");
	//console.log(newRandomInteger);
	//console.log(lastRandomInteger);
	lastRandomInteger = newRandomInteger;

	return newRandomInteger;
}