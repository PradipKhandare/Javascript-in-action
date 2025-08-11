let arr = [7, 1, 5, 3, 6, 4];

let x = 0;
let max = 0;
for(let i = 1; i < arr.length; i++){
    if(arr[i] > arr[x] && arr[i] - arr[x] > max){
        max = arr[i] - arr[x];     
    }
    x = x+1;
}

console.log(x);