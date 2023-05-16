const sumAll = function (numOne, numTwo) {
	if (typeof numOne !== 'number' || typeof numTwo !== 'number' || numOne < 0 || numTwo < 0)
		return 'ERROR';
	const min = numOne < numTwo ? numOne : numTwo;
	const max = numOne > numTwo ? numOne : numTwo;
	let count = min;
	let sum = 0;
	while (count <= max) {
		sum += count;
		count++;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
