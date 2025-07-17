let arr = [1, 2, 3, 0]
let smallerNumber = arr[0];


function findSmaller() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallerNumber) {
            smallerNumber = arr[i]
        }
    }
    return smallerNumber;
}

let res = findSmaller();
console.log(res);