

function checkForOddOrEven(num) {

    // if (num <= 0) {
    //     console.log('Give valid number');
    // }

    if (num % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

console.log(checkForOddOrEven(2));