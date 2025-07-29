let arr = [12, 13, 17, 20, 24, 28, 30, 33, 37, 60]
let target = 37;

function search(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(target == arr[mid]){
            return mid
        }else if(target < arr[mid]){
            right = mid - 1;
        }else {
            left = left +1;
        }
    }
    return -1;
}

console.log(search(arr, target));