//Binary search algorithm is only works on sorted array always remember
let arr = [-1, 0, 4, 6, 11, 30, 32, 34, 40, 41, 46];

let target = 32;

let left = 0;
let right = arr.length - 1;

function binarySearch(arr, target){
    while(left <= right){
        let middle = Math.floor((left+right)/2);
        if(target == arr[middle] ){
            return middle;
        }
        else if(target < arr[middle]){
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }

    return -1;
}
let res = binarySearch(arr, target)
console.log(res);