const fibonacci = function(index) {
    let n = Number(index);
    if (n < 0) {return "OOPS"}
    if (n == 0) {return 0;}

    let prev = 1;
    let current = 1;

    for (let i = 2; i < n; i++) {
        let temp = prev + current;
        prev = current;
        current = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
