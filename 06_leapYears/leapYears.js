const leapYears = function (args) {
    if ((args % 4 == 0 && args % 100 != 0) || args % 400 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
