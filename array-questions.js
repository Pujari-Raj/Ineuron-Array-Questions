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

// const trianglebase = prompt("Enter a base for triangle:");
// const base = parseInt(trianglebase);
// const triangleheight = prompt("Enter a height for triangle:");
// const height = parseInt(triangleheight);

// console.log("Area of triangle is-",(0.5*base*height));

// console.log('=======QUestion-18==========');

/*18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give 
feedback:'You are old enough to drive' but if not 18 give another feedback stating to 
wait for the number of years he needs to turn 18. */

// var userinput = prompt("Enter a age:");

// if(isNaN(userinput)){
//     alert("please provide input in numbers!!!!");
//     return;
// }
// else if(userinput>=18){
//     console.log('You are old enough to drive');
// }
// else{
//     alert("wait for the "+Math.abs((userinput-18))+ "  years to turn 18");
// }

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

console.log('===========QUestion-28========');
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


/*32 */

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