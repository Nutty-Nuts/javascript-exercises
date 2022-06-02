const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (a) {
    let arr = Array.from(a);
    let arrLen = arr.length - 1;
    let output = 0;

    if (arrLen == 0) {
        return arr[0];
    } else {
        for (let i = 0; i <= arrLen; i++) {
            output += arr[i];
        }

        return output;
    }
};

const multiply = function (a) {
    let arr = Array.from(a);
    let output = 1;

    for (e of arr) {
        output = output * e;
    }

    return output;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (a) {
    let output = 1;

    if (a == 0) {
        return 1;
    } else if (a < 0) {
        return "ERROR";
    } else {
        for (let i = 1; i <= a; i++) {
            output = output * i;
        }
    }

    return output;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
