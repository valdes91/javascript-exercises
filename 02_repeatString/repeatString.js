const repeatString = function (str, numOfRepeats) {
	if (numOfRepeats < 0) return 'ERROR';
	let output = '';
	for (let i = 0; i < numOfRepeats; i++) {
		output += str;
	}
	return output;
};

// Do not edit below this line
module.exports = repeatString;
