const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let stringArray = [];
    for (; num != 0; num--) {
        stringArray.push(string);    
    }
    let newString = (stringArray.join(""));
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
