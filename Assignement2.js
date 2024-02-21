const myAge = 20;
//creation of variable which change later
let earlyYears = 2;
//reassign earlyYears by using multiplication assignement
earlyYears *= 10.5;
// take the myAge variable, and subtract 2 from it. take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;
// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//Add earlyYears and laterYears together,
const myAgeInDogYears = earlyYears + laterYears;
const Name = "Benigne";
// Converting name to lowercase using the toLowerCase() method
const myName = Name.toLowerCase();
console.log(
  `My name is ${myName}.I am ${myAge}years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
