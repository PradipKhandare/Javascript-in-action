let n = -123456;

function reverseNumber(n) {
    let nCopy = n;
    n = Math.abs(n);
    let rev = 0;

    while (n > 0) {
        let rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10);
    }

    return (nCopy < 0) ? -rev : rev;
}

console.log(reverseNumber(n));