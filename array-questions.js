/*
2. Declare variables to store your first name, last name, marital status, country and 
age and display them using interploation method.
 */

let firstName = "Pujari";
let lastName = "Basvaraj";
var maritalStatus = "unmarried";
let myCountry = "INDIA";
var myAge = 21;

console.log(`
    My firstName is : ${firstName}
    My lastName is : ${lastName}
    My maritalStatus is : ${maritalStatus}
    I live in : ${myCountry}
    My Age is : ${myAge}
`);

console.log('=======QUestion-3==========');
/*
3. Decalre a varibale and assign value to it and change all the string characters to 
capital letters using toUpperCase() method.
*/

let favouriteCricketer = "virat kohli";

console.log(favouriteCricketer.toUpperCase());

console.log('=======QUestion-4==========');

/* 4. Check if the string contains a word Script using includes() method.*/

let trendinglanguage = "javascript";
let language = "java";

console.log("Does this string includes script word:", trendinglanguage.includes('script'));
console.log("Does this string includes script word:", language.includes('script'));

console.log('=======QUestion-5==========');

/*5. Split the string into an array using split() method*/

let myString = "Basvaraj";
console.log(myString.split(''));

console.log('=======QUestion-6==========');

/* 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at 
the comma and change it to an array.*/

let techGiants = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

if(techGiants.includes(',')){
    console.log(techGiants.split(','));
}

console.log('=======QUestion-7==========');
/* 7. Use lastIndexOf to determine the position of the last occurrence of a script.*/

let myScript = "javascript is programming language, Javascript is know also used in back-end";

console.log("the last occurence of script", myScript.lastIndexOf("script"));

console.log('=======QUestion-8==========');

/* 8.Use search to find the position of the first occurrence of the word 'because' in the 
following sentence:'You cannot end a sentence with because because because is a conjunction'*/

let findString = "You cannot end a sentence with because because because is a conjunction";

console.log("the first occurence of because", findString.indexOf('because'));

console.log('=======QUestion-9==========');

/*9. Use trim() to remove any trailing whitespace at the beginning and the end 
of a string.*/

let whiteString = "  Pujari   ";

console.log(whiteString); // before using trim method
console.log(whiteString.trim()); // after using trim method

console.log('=======QUestion-10==========');

/* 10. Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value. */

console.log('for truthy value:');
console.log(1 == '1');
console.log(1 == [1]);
console.log('1' == [1]);

console.log('\n for falsy value:');
// all below 3 logs will return false because we are checking condition using '==='
// and it check the value and its type
console.log(1 === '1'); 
console.log(1 === [1]);
console.log('1' === [1]);

console.log('=======QUestion-11==========');

/*11. Figure out the result of the following comparison expression first without using console.log().
  After you decide the result confirm it using console.log() */

console.log('value is-', 4 > 3);
console.log('value is-', 4 >=3);
console.log('value is-', 4 < 3);
console.log('value is-', 4 <= 3);
console.log('value is-', 4 == 4);
console.log('value is-', 4 === 4);
console.log('value is-', 4!=4);
console.log('value is-', 4!==4);
console.log('value is-', 4!='4');
console.log('value is-', 4 == '4');
console.log('value is-', 4 === '4');

/*Find the length of python and jargon and make a falsy comparison statement. */

let progLanguage = 'python';
let word = 'jargon';

console.log('length-',progLanguage.length);
console.log('length-',word.length);

console.log('is both words same- ', progLanguage === word);


console.log('=======QUestion-12==========');
/* 12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now. 
*/

let myDate = new Date();

console.log('year today is- ',myDate.getFullYear());
console.log('month today as a number is-',myDate.getMonth());
console.log('what date is today-',myDate.getDate());
console.log('day today as a number',myDate.getDay());
console.log(' hours now -',myDate.getHours());
console.log(' minutes now-',myDate.getMinutes());
console.log(myDate.toString());

//- Find out the numbers of seconds elapsed from January 1, 1970 to now

// this example takes 2 seconds to run
const start = new Date('January 1, 1970') ;

const millis = Date.now() - start;

console.log(`seconds elapsed from January 1, 1970 = ${Math.floor(millis / 1000)}`);

console.log('=======QUestion-13==========');

/*13. Write a script that prompt the user to enter base and height of the triangle and 
calculate an area of a triangle (area = 0.5 x b x h).*/

const trianglebase = prompt("Enter a base for triangle:");
const base = parseInt(trianglebase);
const triangleheight = prompt("Enter a height for triangle:");
const height = parseInt(triangleheight);

console.log("Area of triangle is-",(0.5*base*height));

/*
 14. Slope Formula is m(slope) = (y2-y1)/(x2-x1). To Find the slope between point (1, 8) and point(19, 12)  
 */

 let x1 = 1;
 let y1 = 8;
 let x2 = 19;
 let y2 = 12;
 
 let m = (y2 - y1) / (x2 - x1); // slope
 console.log(m);

/* 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2 */
const eqn = 'y = 2x - 2'

/* 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */

let radius = prompt("Enter radius of a circle:");

let areaOfCircle = Math.PI * radius * radius;
let circumOfCircle = 2 * Math.PI * radius;

console.log(`Area is ${areaOfCircle}Circumference is ${circumOfCircle}`);

// console.log('=======QUestion-18==========');

/*18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give 
feedback:'You are old enough to drive' but if not 18 give another feedback stating to 
wait for the number of years he needs to turn 18. */

var userinput = prompt("Enter a age:");

if(isNaN(userinput)){
    alert("please provide input in numbers!!!!");
    return;
}
else if(userinput>=18){
    console.log('You are old enough to drive');
}
else{
    alert("wait for the "+Math.abs((userinput-18))+ "  years to turn 18");
}

/* 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript*/
let num1 = 24;
if (num1 % 2 == 0) {
    console.log(`${num1} is even`);
} else {
    console.log(`${num1} is odd`);
}

/* 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
*/

const marks = 59;


if (marks < 0 || marks > 100) {
    console.log("Incorrct marks")
} else if (marks >= 80 && marks <= 100) {
    console.log("Grade is A")
} else if (marks >= 70 && marks <= 79) {
    console.log("Grade is B")
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade is C")
} else if (marks >= 50 && marks <= 59) {
    console.log("Grade is D")
} else {
    console.log("FAIL")
}

/* 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer
*/

// Using Date() API of Javascript to get current month in string (i.e. September) format.
let Month = new Date().toLocaleString('en-US', { month: 'long' });
let season;
if (Month === "September" || Month === "October" || Month === "November") {
    season = "Autumn";
} else if (Month === "December" || Month === "January" || Month === "February") {
    season = "Winter";
} else if (Month === "March" || Month === "April" || Month === "May") {
    season = "Spring";
} else if (Month === "June" || Month === "July" || Month === "August") {
    season = "Summer";
}
/* 22. Write a program which tells the number of days in a month.*/
let date = new Date();
let month = date.getMonth() + 1;
let days;

if (month > 0 && month <= 7) {
    if (month % 2 == 0) {
        if (month == 2) {
            days = "27 or 28";
        } else {
            days = 30;
        }
    } else {
        days = 31;
    }
} else if (month > 7 && month <= 12) {
    if (month % 2 == 0) {
        days = 31;
    } else {
        days = 30;
    }
} else {
    console.log("Invalid Month");
}

/* 23. Write a program which tells the number of days in a month, now consider leap year.*/

// function to check leap year.
function leapYear(year) {
    if (year % 400 == 0) {
        return true;
    }
    if (year % 100 == 0) {
        return false;
    }
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

// function to find number of days.
let getDays = (month, year) => {
    if (month > 0 && month <= 7) {
        if (month % 2 == 0) {
            if (month == 2) {
                return (leapYear(year) ? 28 : 27);
            }
            return 30;
        } else {
            return 31;
        }
    } else if (month > 7 && month <= 12) {
        if (month % 2 == 0) {
            return 31;
        } else {
            return 30;
        }
    } else {
        console.log("Invalid Month");
    }
}

// Driver Code.
const getmonth = 2;
const getyear = "2022";
console.log(getDays(getmonth, getyear))


console.log(`Month is ${date.toLocaleString('en-US', { month: 'long' })} and it has ${days} days.`)
console.log(`Month is ${Month} and it is ${season} season`);

/* 25 In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'*/ 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

let includesMeat = shoppingCart.includes('Meat');
if(!includesMeat){
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
}

let includessugar = shoppingCart.includes('Sugar');
if(!includessugar){
    shoppingCart.push('Sugar');
    console.log(shoppingCart);
}

shoppingCart[3]='Green Tea';
console.log(shoppingCart);

/*
27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort the array and find the min and max age
const sortedArray = ages.sort()
const min = sortedArray[0]
let max = min;
for (let index = 0; index < sortedArray.length; index++) {
    max = sortedArray[index];
}
console.log(sortedArray)
// - Find the median age(one middle item or two middle items divided by two)
let median;
if (sortedArray.length % 2 === 0) {
    console.log('even')
    const firstMidIndex = sortedArray.length / 2
    const secondMidIndex = firstMidIndex - 1
    console.log(firstMidIndex)
    console.log(secondMidIndex)
    const firstMidItem = sortedArray[firstMidIndex]
    const secondMidItem = sortedArray[secondMidIndex]
    median = (firstMidItem + secondMidItem) / 2
} else {
    console.log('odd')
    const midIndex = Math.floor(sortedArray.length / 2)
    median = sortedArray[midIndex] / 2
}
console.log(median)

// Find the range of the ages(max minus min)
const range = max - min

// - Find the average age(all items divided by number of items)
let sum = min
for (let index = 0; index < sortedArray.length; index++) {
    const element = sortedArray[index];
    sum = sum + element
}
const avg = sum / sortedArray.length

// - Compare the value of (min - average) and (max - average), use abs() method
const a = Math.abs(min - avg)
const b = Math.abs(max - avg)

const compare = Math.abs(a - b)

/*28. Use for loop to iterate from 0 to 100 and print only prime numbers*/ 

function isPrime(value) {
    
    if(value == 1 || value ==  0){
        return false;
    }

    for (var i = 2; i<value; i++) {
       
       if(value % i == 0){
        return false;
       }   
    }
    return true;
}

var num = 100;

console.log('Prime no"s betwen 0-100');
for(var i=1; i<=num;i++){
    if(isPrime(i)){
        console.log(i);
    }
}

/* 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.*/

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum = evenSum + i;
    } else {
        oddSum = oddSum + i;
    }
}

console.log(`
Even Sum is ${evenSum}
Odd Sum is ${oddSum}
`);

// 30. Write a script which generates a random hexadecimal number.

let num = Math.random() * 16;
console.log(Math.round(num));

/*31*/
const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
    "land",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
//console.log(countryList.sort());


/*32 
//  Array Questions
// - Extract all the countries contain the word 'land' from the countries array and print it as array
// - Find the country containing the hightest number of characters in the countries array
// - Extract all the countries contain the word 'land' from the countries array and print it as array
// - Extract all the countries containing only four characters from the countries array and print it as array
// - Extract all the countries containing two or more words from the countries array and print it as array
// - Reverse the countries array and capitalize each country and stored it as an array

*/

let res = countryList.filter((country) => country.includes('land'));
console.log(res);

//Extract all the countries containing two or more words from the countries array and print it as array

console.log('-----------------------------');
let newArray =[];
for(let i of countryList){
    if(i.includes(" ")){
        newArray.push(i);
    }
}
console.log(newArray.sort());

console.log('-----------------------------');
let myarray =[];
for(var i = 0; i<countryList.length; i++){
    if(countryList[i].length=10){
        myarray.push(i);
    }
}

/* 35. Write a functions which checks if all items are unique in the array.*/

let arr = [22, 32, 43, "Pujari", "Basvaraj", 43, false, true];
let uniqueArray = [];
let notUniqueArray = [];
arr.forEach((num) => {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
        uniqueArray.push(num);
    } else {
        notUniqueArray.push(num);
    }
})
console.log(uniqueArray);
console.log(notUniqueArray);