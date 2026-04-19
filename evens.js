let myArray = [1,2,3,4,5];

function sumOfTripledEvens(array) {
    let evenArray = array.filter(function(num){
        return num % 2 == 0;
    });
    //triple and reduce sumArray
    let tripledArray = evenArray.map((num) => num * 3);
    const sum = tripledArray.reduce((total, current) => {
        return (total + current);
    }, 0);
        return sum;
}

console.log(sumOfTripledEvens(myArray));