let nam = ['A', "B", "C", "D"];
let len = nam.length;
let halfLength = Math.floor(len / 2);


for (let i = 0; i < halfLength; i++) {
    let temp = nam[i];
    nam[i] = nam[len - 1 - i];
    nam[len - 1 - i] = temp;
}

console.log(nam)
