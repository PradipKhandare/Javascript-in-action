const users = [
    { fn: "Pradip", ln: "Khandare", age: 25 },
    { fn: "Aarti", ln: "Sharma", age: 28 },
    { fn: "Rahul", ln: "Mehra", age: 32 },
    { fn: "Sneha", ln: "Patil", age: 28 },
    { fn: "Kiran", ln: "Deshmukh", age: 30 }
];


//fid list of full name

const output = users.map((x) => {
    return x.fn + ' ' + x.ln;
});

console.log(output);

//how many people of perticular age

const output2 = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = acc[curr.age]++
    } else {
        acc[curr.age] = 1;
    }

    return acc;
}, {})

console.log(output2);


//find first name of all the users whose age is less than 30.

const output3 = users.filter((x) => x.age < 30).map(x => x.fn);
console.log(output3);