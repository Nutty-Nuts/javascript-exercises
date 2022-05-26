const removeFromArray = function (...args) {
    const inputArray = Array.from(args[0]);
    const loopLength = args.length;

    for (let a = 1; a <= loopLength - 1; a++) {
        if (args[a] == inputArray[inputArray.indexOf(args[a])]) {
            inputArray.splice(inputArray.indexOf(args[a]), 1);
        } else {
            continue;
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
