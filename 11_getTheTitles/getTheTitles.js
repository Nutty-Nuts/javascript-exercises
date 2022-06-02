const getTheTitles = function (book) {
    let bookArray = Array.from(book);
    let titleArray = [];

    for (e of book) {
        let element = Object.values(e);

        titleArray.push(element[0]);
    }

    return titleArray;
};
const books = [
    {
        title: "Book",
        author: "Name",
    },
    {
        title: "Book2",
        author: "Name2",
    },
];

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
