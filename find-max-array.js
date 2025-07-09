const array1 = [10, 9, 8, 1, 10];
const max = Math.max(...array1);
const updated = [...new Set(array1)];
const reversed = array1.reverse();
console.log(max);
console.log(updated);
console.log(reversed);