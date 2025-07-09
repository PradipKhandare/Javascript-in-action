const arr = [1, 3, 3, 4, 5, 6];
const odd = arr.filter((x) => {
    return x % 2 != 0;
});

console.log(odd);