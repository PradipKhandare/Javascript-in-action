const radius = [3, 4, 6, 2, 5];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const diameter = function (radius) {
    return radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));
console.log(calculate(radius, area));