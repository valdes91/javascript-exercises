const palindromes = function (str) {
	const lower = str.toLowerCase().replace(' ', '');

	//the regex below filters out all non alphanumeric characters and underscores
	const validCharacters = lower.replace(/\W|_/g, '');

	const reversed = [...validCharacters].reverse().join('');

	return validCharacters === reversed;
};

// Do not edit below this line
module.exports = palindromes;
