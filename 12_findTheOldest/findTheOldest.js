const findTheOldest = function (people) {
	const oldest = people.reduce((oldestPerson, person) => {
		const thisYear = new Date().getFullYear();
		const personAge = (person.yearOfDeath || thisYear) - person.yearOfBirth;
		const oldestPersonAge = (oldestPerson.yearOfDeath || thisYear) - oldestPerson.yearOfBirth;

		return personAge > oldestPersonAge ? person : oldestPerson;
	}, people[0]);

	return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
