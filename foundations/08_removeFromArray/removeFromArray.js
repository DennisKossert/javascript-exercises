const removeFromArray = function(arr, ...toRemove) {
    for (item of toRemove) {
        while (arr.includes(item)) {
            arr.splice(arr.indexOf(item), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
