const palindromes = function (text) {
    let lowercaseText = text.toLowerCase();
    let initArr = Array.from(lowercaseText);

    let normalArr = [];
    let reverseArr = [];
    let sampleArr = [];

    for (e of initArr) {
        if (e != " " && e != "!" && e != "." && e != ",") {
            normalArr.push(e);
            sampleArr.push(e);
        }
    }

    for (e of normalArr) {
        if (e != " " && e != "!" && e != "." && e != ",") {
            reverseArr.push(sampleArr.pop());
        }
    }

    let normal = normalArr.toString();
    let reverse = reverseArr.toString();

    console.log(normal);
    console.log(reverse);

    if (normal === reverse) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
