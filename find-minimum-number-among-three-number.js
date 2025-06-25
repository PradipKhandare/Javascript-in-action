function minNumber(a, b, c) {
    return a < b && a < c ? a : b < c ? b : c;
}

console.log(minNumber(2, 3, 1));