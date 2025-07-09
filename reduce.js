const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0)

console.log(sum);

const maxValue = arr.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);

console.log(maxValue);

const minValue = arr.reduce((acc, curr) => {
    if (curr < acc) {
        acc = curr;
    }
    return acc;
}, arr[0]);

console.log(minValue);