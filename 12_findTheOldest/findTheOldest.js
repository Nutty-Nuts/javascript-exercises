const findTheOldest = function (people) {
    let peopleArr = Array.from(people);

    const oldestPeople = peopleArr.sort(function (a, b) {
        let currentYear = new Date().getFullYear();
        let ageA = 0;
        let ageB = 0;

        if (typeof a.yearOfDeath === "undefined") {
            ageA = currentYear - a.yearOfBirth;
            console.log("undefined");
        } else {
            ageA = a.yearOfDeath - a.yearOfBirth;
        }

        if (typeof b.yearOfDeath === "undefined") {
            ageB = currentYear - b.yearOfBirth;
        } else {
            ageB = b.yearOfDeath - b.yearOfBirth;
        }

        console.log(`${a.name}: ${ageA} ${b.name}: ${ageB}`);

        if (ageA > ageB) {
            return 1;
        } else {
            return -1;
        }
    });

    return oldestPeople.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
