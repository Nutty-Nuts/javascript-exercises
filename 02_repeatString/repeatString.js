const repeatString = function (text, iterations) {
    var returnText = "";

    if (iterations >= 0) {
        for (let i = 0; i < iterations; i++) {
            returnText = `${returnText}${text}`;
        }

        return returnText;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
