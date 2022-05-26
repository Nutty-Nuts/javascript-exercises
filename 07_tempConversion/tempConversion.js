const ftoc = function (args) {
    const fahrenheit = args;

    let convertedValue = (fahrenheit - 32) * (5 / 9);

    return (convertedValue = Math.round(convertedValue * 10) / 10);
};

const ctof = function (args) {
    const celsius = args;

    let convertedValue = (celsius * 9) / 5 + 32;

    return (convertedValue = Math.round(convertedValue * 10) / 10);
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
