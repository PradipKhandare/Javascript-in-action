let arr = [10, 11, 1, 2, 80];
let largestNumber = -Infinity;
let secondLargerNumber = -Infinity;



// function findSmallerNumber() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largestNumber) {
//             largestNumber = arr[i];
//         }
//     }

//     let smallerNumber = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > smallerNumber && arr[i] < largestNumber) {
//             smallerNumber = arr[i];
//         }
//     }
//     return smallerNumber;
// }

function findSmallerNumber() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            secondLargerNumber = largestNumber;
            largestNumber = arr[i];
        } else if (arr[i] > secondLargerNumber) {
            secondLargerNumber = arr[i];
        }
    }
    return secondLargerNumber;
}

let res = findSmallerNumber();
console.log(res);