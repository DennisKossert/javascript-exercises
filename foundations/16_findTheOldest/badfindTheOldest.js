const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestIndex;
    people.forEach((person) => {
        let yearOfDeath = new Date().getFullYear();
        if (person.yearOfDeath) {
            yearOfDeath = person.yearOfDeath;
        }
        let age = yearOfDeath - person.yearOfBirth;
        if (oldestAge < (age)) {
            oldestAge = age;
            oldestIndex = people.indexOf(person);
        }
    });
    return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
