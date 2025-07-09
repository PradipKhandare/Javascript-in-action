const friends = ["Pradip", "Vijay"];

//Add Elements
friends.push("Jay")
console.log()
console.log(friends)

//Add elements at the beginning of array
friends.unshift("Shreyash")

//remove last element
friends.pop();
console.log(friends);


//remove first element
friends.shift();
console.log(friends);

//find the position of element in array
console.log(friends.indexOf('Pradip')); // 0
console.log(friends.indexOf('sss')); // -1
console.log(friends.includes('Pradip')); //true
console.log(friends.includes('ffff')); //false
