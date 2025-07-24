let arr = [1,1,2,3,2,3,4];
let xor = 0;


for(let i = 0; i< arr.length; i++){
    xor = xor ^ arr[i]
}

console.log(xor);