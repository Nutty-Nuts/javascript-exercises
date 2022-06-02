const getTheTitles = function (book) {
    let bookArray = Array.from(book);
    let titleArray = [];

    for (e of book) {
        let element = Object.values(e);

        titleArray.push(element[0]);
    }

    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
