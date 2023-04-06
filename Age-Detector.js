const birthDate = new Date('2011-07-08'); //Y,M,D
const currentDate = new Date();

const isLeapYear = new Date(currentDate.getFullYear(), 1, 29).getDate() === 29;
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let age = currentDate.getFullYear() - birthDate.getFullYear();
let totalDaysB = 0;
let totalDaysD = 0;

if(isLeapYear)
	days[1] = 29;

for (let m = 0; m < birthDate.getMonth(); m++)
	totalDaysB += days[m];
for (let m = 0; m <	currentDate.getMonth(); m++)
	totalDaysD += days[m];

totalDaysD += currentDate.getDate()
totalDaysB += birthDate.getDate();

console.log(totalDaysB)
console.log(totalDaysD)

if(totalDaysB > totalDaysD)
	age -= 1;

console.log(age)