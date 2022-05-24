const reverseString = function (text) {
    var output = "";

    for (let i = text.length - 1; i >= 0; i--) {
        output = `${output}${text[i]}`;
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
