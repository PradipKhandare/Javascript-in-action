let arr = [7, 0, 5, 3, 6, 4]

let maxProfit = 0;

for(let i = 0; i< arr.length; i++){

    for(let j = i + 1; j < arr.length; j++){
        if(arr[j] > arr[i] && arr[j] - arr[i] > maxProfit){
            maxProfit = arr[j] - arr[i];
        }
    }
}

console.log(maxProfit)

//Time complaxity: O(n2)