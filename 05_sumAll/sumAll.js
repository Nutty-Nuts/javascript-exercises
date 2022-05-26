const sumAll = function (...args) {
    let sumOfAll = 0;

    let biggerNum;
    let smallerNum;

    // Test for Data Type
    if (typeof args[1] === "number" && args[0] >= 0) {
        // continue
    } else {
        return "ERROR";
    }

    // Test for Bigger Number
    if (args[0] > args[1]) {
        biggerNum = args[0];
        smallerNum = args[1];
    } else {
        biggerNum = args[1];
        smallerNum = args[0];
    }

    // Main Loop
    for (let a = smallerNum; a <= biggerNum; a++) {
        sumOfAll = sumOfAll + a;
    }

    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
