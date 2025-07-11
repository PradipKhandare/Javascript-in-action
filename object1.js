const pradipArray = [
    'Pradip',
    'Khandare',
    2023 - 2010,
    'Software Engineer',
    ['Shreyash', 'Sumit', 'Rutuja']
];

//objects: object literal syntax.order of values does'nt matter
const pradipObject = {
    firstName: 'Pradip',
    lastName: "Khandare",
    age: 2023 - 2010,
    job: 'Software Engineer',
    friends: ['Shreyash', 'Sumit', 'Rutuja']
};

//dot vs bracket notation:
console.log(pradipObject)
console.log(pradipObject.lastName)
console.log(pradipObject['lastName'])
const nameKey = "Name";
console.log(pradipObject['first' + nameKey])

const ans = prompt('What do you want to know about Pradip, choose between firstName, lastName, age, job, friends?');

//console.log(pradipObject.ans);

if (pradipObject[ans]) {
    console.log(pradipObject[ans]);
} else {
    console.log('Info is not available, choose between firstName, lastName, age, job, friends');
}


pradipObject.location = "Pune";
pradipObject['linkdin'] = "https://www.linkedin.com/in/pradip-khandare-8b6289206/";

console.log(pradipObject)
//ways to create an object:

console.log(pradipObject.firstName + ' has ' + pradipObject.friends.length + " friends and his bestfriend name is " + pradipObject.friends[0]);
console.log(`${pradipObject.firstName} has ${pradipObject.friends.length} friends and his bestfriends name is ${pradipObject.friends[0]}`)


