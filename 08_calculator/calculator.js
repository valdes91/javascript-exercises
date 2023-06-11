const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (numbers) {
	let total = 0;
	numbers.forEach((num) => {
		total += num;
	});

	return total;
};

const multiply = function (numbers) {
	if (numbers.includes(0)) return 0;

	let product = 1;
	numbers.forEach((num) => {
		product *= num;
	});

	return product;
};

const power = function (base, exp) {
	return Math.pow(base, exp);
};

const factorial = function (num) {
	if (num === 0) return 1;
	else return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
