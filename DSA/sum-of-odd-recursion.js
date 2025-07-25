let arr = [2, 5, 3, 1, 8, 6];
let n = arr.length - 1;

function sumOdd(n){
    if(n === 0) return arr[n] % 2 !== 0? arr[n] : 0;
    return (arr[n] % 2 !== 0) ? (arr[n] + sumOdd(n - 1)): sumOdd(n-1);
   }

console.log(sumOdd(n));