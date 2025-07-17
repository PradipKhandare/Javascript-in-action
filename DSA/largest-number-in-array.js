let arr = [-9, -8, -3, -10];
let largestNumber = arr[0];

function findLargestNumber() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i]
        }
    }
    return largestNumber;
}

let res = findLargestNumber();
console.log(res);