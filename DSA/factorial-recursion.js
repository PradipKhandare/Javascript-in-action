
let n = 5;

function fact(n){
    if(n === 1) return 1;

    return n * fact(n-1);
}

let res = fact(n);

console.log(res);

