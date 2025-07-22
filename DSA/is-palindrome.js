var isPalindrome = function (n) {
    let x = n;
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10);
    }

    if (rev == x) {
        return true
    }
    else {
        return false;
    }
}

let n = 121;

let res = isPalindrome(n);
console.log(res);
