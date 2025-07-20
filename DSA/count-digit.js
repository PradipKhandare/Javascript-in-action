let num = 123456;

function countDigit(n) {
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

let res = countDigit(num);
console.log(res);