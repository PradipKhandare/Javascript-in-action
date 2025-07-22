let n = [2, 2, 1, 1, 0];

let x = 0;

function removeDuplicates(n) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] < n[x]) {
            x = x + 1;
            n[x] = n[i]
        }
    }

    return x + 1;
}

console.log(removeDuplicates(n));

