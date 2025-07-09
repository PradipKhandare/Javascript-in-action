const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, val) => {
    return acc + val;
}, 0)

console.log(sum);