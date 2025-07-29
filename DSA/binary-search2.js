let arr = [12, 16, 22, 30, 35, 41, 48, 50];

let target = 22;

var search = function(arr, target){
    let left = 0;
    let right = arr.length -1;
    while(left <= right){
        let middle = Math.floor((left+right)/2);
        if(target == arr[middle]){
            return middle;
        }else if(target < arr[middle]){
            right = middle - 1;
        }else {
            left = middle + 1;
        }
    }
    return -1;
}

let res = search(arr, target);
console.log(res)