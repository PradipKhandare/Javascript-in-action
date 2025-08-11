let fName = [1, 2, 3, 4, 5, 6]
let len = fName.length;
let hl = Math.floor(len/2);
let p1 = 0;
for(let i = 0; i < hl; i++){
    let temp = fName[i];
    fName[i] = fName[len - 1 - i];
    fName[len - 1 - i] = temp
}

console.log(fName)
