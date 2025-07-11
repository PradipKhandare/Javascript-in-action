//without loop
// console.log('Lifting weigths repetition 1');
// console.log('Lifting weigths repetition 2');
// console.log('Lifting weigths repetition 3');
// console.log('Lifting weigths repetition 4');
// console.log('Lifting weigths repetition 5');
// console.log('Lifting weigths repetition 6');
// console.log('Lifting weigths repetition 7');

//loop
for (let i = 1; i < 11; i++) {
    // console.log(`Lifting weigths repetition ${i}`);
}


//looping through array
const pradipArray = [
    'Pradip',
    'Khandare',
    2023 - 2010,
    'Software Engineer',
    ['Shreyash', 'Sumit', 'Rutuja']
];
const types = [];
for (let i = 0; i < pradipArray.length; i++) {
    console.log(pradipArray[i], typeof pradipArray[i]);
    types[i] = typeof pradipArray[i];
}

console.log(types);