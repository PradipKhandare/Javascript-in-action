let arr = [2, 3, 5, 7, 1, 6, 8, 9];

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right){
let res = [];
let i = 0;
let j = 0;

while(i < left.length && j < right.length){
    if(left[i] < right[j]){
        res.push(left[i]);
        i++;
    }else {
        res.push(right[j]);
        j++;
    }
}

return [...res, ...left.slice(i), ...right.slice(j)]
}

let result = mergeSort(arr);
console.log(result);