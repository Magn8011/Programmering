// husk skråstreg beggeveje !
let course = ("BINTO1064U.LA_E21")

console.log(/\w/.test(course));

// opgave 2

console.log(/\d/.test(course));

// via "\d tjekker vi for tal"

//opgave 3
console.log(/^BINT/.test(course));
//"^BINT" så tjekker man for om det er HA. IT. eller ej 

//Opgave 4

let matschsr = /_/.exec(course);
console.log(matschsr);
console.log(matschsr.index);
//Vi leder efter "_" så bare indsæt "_" og så søger den efter "_"


// Opgave 5
//brug ".replace" og erstat med ingenting " "
console.log(course.replace(".LA_E21", " "));

//Opgave 6
var course1 = "BINTO1064U"
var regex = /(\w{4})(O)(.*)/;
course1 = course1.replace(regex, "$1$3");
console.log(course1);
//via regex og ".replace" erstatter vi $2 altså "O" med ingenting og indsætter bare $1 og $3 

// Opgave 7
// jeg bruger en standard ".replace" funktion og smider "F22" ind i stedet for "E21"
var course2 = "BINTO1064U.LA_E21U"
console.log(course2.replace("E21", "F22"));



