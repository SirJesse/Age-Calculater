const birthDate = new Date('YYYY/MM/DD'); //Date of Birth
const currentDate = new Date(); //Current Date (no input)

const isLeapYear = new Date(currentDate.getFullYear(), 1, 29).getDate() === 29; //bool checking if Feb 29th is in the year
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] //list of how many days in a month

let age = currentDate.getFullYear() - birthDate.getFullYear(); //age you're turning of have turned this year
let totalDaysB = 0;
let totalDaysD = 0;

if(isLeapYear)
	days[1] = 29; //if leap year then changes value in 'days' to add the extra day

for (let m = 0; m < birthDate.getMonth(); m++) //for loop for the day num of your b-day
	totalDaysB += days[m];
for (let m = 0; m < currentDate.getMonth(); m++) //for loop for the day num of the current date
	totalDaysD += days[m];

totalDaysD += currentDate.getDate()
totalDaysB += birthDate.getDate();

console.log(totalDaysB)
console.log(totalDaysD)

if(totalDaysB > totalDaysD) //checks if b-day has passed or not
	age -= 1;

console.log(age)
