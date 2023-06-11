const getTheTitles = function (books) {
	const bookList = books.map((book) => {
		return book.title;
	});

	return bookList;
};

// Do not edit below this line
module.exports = getTheTitles;
