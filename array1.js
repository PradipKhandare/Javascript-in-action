const friend = ['Pradip', 'Shubham', 'Shreyash'];
console.log(friend);

const years = new Array(1212, 12121, 21212, 21212);
console.log(years);


console.log(friend[0]);
console.log(friend[2]);

console.log(friend.length);
console.log(friend[friend.length - 1]);


friend[2] = "Jay";
console.log(friend);



const firstName = 'Pradip';
const pradip = [firstName, "Khandare", 27, friend];
console.log(pradip)


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years2 = [1997, 2003, 2012, 2025];

const age1 = console.log(calcAge(years2[0]))
const age2 = console.log(calcAge(years2[1]))
const age3 = console.log(calcAge(years2.length - 1))
