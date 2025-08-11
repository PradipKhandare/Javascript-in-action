let fname = "Pradip Khandare     ";
let n = fname.length - 1;

while(n >= 0){
    if(fname[n] != ' ') break;
    --n;
}

let count = 0;
while(n >= 0){
    if(fname[n] == ' ') break;
    --n;
    ++count;
}

console.log(count);
