const fibonacci = function (num) {
	let integer = parseInt(num);
	if (integer <= 0) return 'OOPS';
	if (integer <= 2) return 1;

	const fibonacci = [1, 1];
	let counter = 3;
	let fib;
	while (counter <= integer) {
		fib = fibonacci[0] + fibonacci[1];
		if (counter % 2 === 0) fibonacci[0] = fib;
		else fibonacci[1] = fib;
		counter++;
	}

	return fib;
};

// Do not edit below this line
module.exports = fibonacci;
