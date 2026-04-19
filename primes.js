let n = 10;

for (let i = 0; i <= n; i++) {
    let j;
    for (j = 2; j < i; j++) {
        if ((i % j) == 0){
            break;
        } 
    }
    if (j === i) {
            console.log(i);
    }
}