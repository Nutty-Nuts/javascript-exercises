const fibonacci = function (num) {
    let fibonacciSeq = [1, 1];

    num = parseInt(num);

    if (num <= 2 && num > 0) {
        return 1;
    } else if (num > 0) {
        for (let i = 1; i <= num - 2; i++) {
            fibonacciSeq.push(fibonacciSeq[i] + fibonacciSeq[i - 1]);
        }

        return fibonacciSeq.pop();
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
