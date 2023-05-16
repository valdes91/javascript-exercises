const removeFromArray = function (arr, ...args) {
	return arr.filter((element) => {
		if (!args.includes(element)) return element;
	});
};

// Do not edit below this line
module.exports = removeFromArray;
