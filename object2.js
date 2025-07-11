const pradip = {
    firstName: "Pradip",
    lastName: "Khandare",
    birthYear: 1998,
    job: "Software Developer",
    friends: ["Sumit", "Shreyash", "Rutuja(Heker)"],
    hasDrivingLicense: true,


    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return;
    },
    getSummary: function(){

    }

}


console.log(pradip.calcAge());
console.log(pradip.age);
console.log(pradip.age);
console.log(pradip.age);



//pradip is a 27 year old software engineer, amd he has a driver's license.
const driverLiscense = pradip.hasDrivingLicense ? 'a' : 'not a';

console.log(`${pradip.firstName} is a ${pradip.age} year old ${pradip.job}, he has ${driverLiscense} driver's license`);