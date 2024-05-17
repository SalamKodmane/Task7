// Number 1
function findMinMax() {
	let Arr = [7,8,5,6,];

	let minValue = Math.min(...Arr);
	let maxValue = Math.max(...Arr);
	
	console.log("Min element is:" + minValue);
	console.log("Max Element is:" + maxValue);
}
findMinMax()

// Number 2

function checkChar(char){ 
	ch = char.toLowerCase(); 
	const arr = ['a','e','i','o','u'] 
	if(arr.includes(ch)) 
	return console.log("Given character is a Vowel"); 
	return console.log("Given character is a Consonent"); 
} 
checkChar('E'); 
checkChar('J');


// Number 3

let n = 5;
for (let i = 1; i <= 12; ++i)
    console.log(n + " * " + i +
        " = " + n * i);

// Number 4
 
let numbers = [10, 23, 12, 21];
let even = [];
for(let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 == 0)
	even.push(numbers[i]);
}
console.log(`Even numbers in an array are: ${even}`);


// Number 5

let m1,m2,m3,m4,m5,sum,avg
m1=80
m2=90
m3=98
m4=98
m5=84
sum=m1+m2+m3+m4+m5
console.log("total marks" ,sum)
avg=sum/5
console.log('Average Marks=',avg)
avg=sum/5
console.log('Percentage=',avg)


// Number 6

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var Percentage = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (Percentage >=90) {
    console.log("Grade: A");
} else if (Percentage >=60 ) {
    console.log("Grade: D");
} else if (Percentage >= 70) {
    console.log("Grade: C");
} else if (Percentage >= 80) {
    console.log("Grade: B");
} else if (Percentage >=40) {
    console.log("Grade: E");
}  else if (Percentage <40) {
    console.log("Grade: F");
} 