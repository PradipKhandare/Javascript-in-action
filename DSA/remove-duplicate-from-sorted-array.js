let arr = [1,1,2,3,4,5,5,5,6];
let n = arr.length;

let x = 0;

for(let i = 0; i < n; i++){
    if(arr[i] > arr[x]){
          x = x + 1;
        arr[x] = arr[i]
      
    }
}

console.log(x+1);