const sumAll = function(a, b) {
    if ((typeof a) != "number" ||
        (typeof b) != "number") {
        return "ERROR"; 
        }
    if (Math.abs(Math.floor(a)) != a || Math.abs(Math.floor(b)) != b) {
        return "ERROR";
    }

    let low;
    let high;
    if (a < b) {
        low = a;
        high = b;
    } else {
        low = b;
        high = a;
    }

    let total = 0;
    for (let i = low; i <= high; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
