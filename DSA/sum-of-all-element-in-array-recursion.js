
let arr = [4, 3, 5, 1,7];
let n = arr.length - 1;
function sum(n){
    if(n === 0) return arr[n];

    return arr[n] + sum(n - 1);
}

console.log(sum(n));