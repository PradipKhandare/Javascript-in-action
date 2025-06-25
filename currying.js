// function add (a, b){
//     return a + b;
// }

// console.log(add(2, 4));


//lets curry the function:
// function add(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// const addOne = add(1);

// console.log(addOne(5));
// console.log(addOne(10));


function multiply(x, y, z) {
    return x * y * z;
}

console.log(multiply(3, 2, 4));