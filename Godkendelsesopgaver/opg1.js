//opgave 1. 1
const hemmeligBesked = ["hej", "klaus", "vil", "du", "med", "til", "fodbold", "i", "klubben", "i",  
"aften", "?", "kurt"];

let removed = hemmeligBesked.pop() // fjern kurt fra enden

console.log(removed)
console.log(hemmeligBesked)
//jeg har derved fjernet "kurt" fra den sidste del af sætningen

//opgave 1. 2 
let newLength = hemmeligBesked.push("adressen","er","Piratvej", "100")

console.log(hemmeligBesked)
//så har jeg tilføjet adressen tilsidst i besked


//opgave 1. 3
hemmeligBesked [1] = "bro"
console.log(hemmeligBesked)
//jeg har derved mærket ord nr. 1, Klaus, (da man starter med at tælle fra 0) 
//og erstatter så "Klaus" med "bro"

//opgave 1. 4
let first = hemmeligBesked.shift()
console.log(hemmeligBesked)
// via "shift" funktionen fjernes den første del af beskeden, altså "hej"

//opgave 1. 5
let nyLængde = hemmeligBesked.unshift('yo')
console.log(hemmeligBesked)
//via "unshift" funktionen tilføjer jeg "yo" i starten af arrayet, 
//derved starter sætningen nu med "yo"

//opgave 1. 6
let fjern = hemmeligBesked.splice(6,2)
console.log(hemmeligBesked)
//for at slette 3 ord og indsætte 1 nyt, så bruger jeg "splice" 
//til at slette ordene med indexnummerr 6 og 7 ("fodbold" "i")
hemmeligBesked [6] = "piratfest"
//og så ændre jeg det sidste og tredje ord "klubben" med "piratfest" 
//og så kommmer den rigtige besked frem
console.log(hemmeligBesked)


//opgave 1. 7
let faktiskeBeskeder = hemmeligBesked.join(" ");
console.log(faktiskeBeskeder)

// ved bare at smide ".join" på, så får man samlet sin kode vandret ud af linjerne.
// derudover tilføjer jer "" "" altså mellemrum, så at jeg får mellemrum imellem ordene, 
// så det ikke bare står ud i en lang kører

// opgave 1. 8

console.log(faktiskeBeskeder)

// Opgave 1. del 2. 1

function gørBeskedPersonlig (name = "bro"){
    console.log(`yo ${name} vil du med til piratfest på reffen i aften ? adressen er Piratvej 100`)
}
gørBeskedPersonlig("Sigurd") 
// Jeg indsætter hele den "faktiskBesked" og tilføjer så at "${name}" skal kunne erstatte bro
// såfremt at man tilføjer et navn til funktionen "greeting", f.eks "Sigurd"

// Opgave 1. del 2. 2
gørBeskedPersonlig("Sigurd")
//Jeg indsætter Sigurd ind i greeting funktionen og derved printer den 
//"yo Sigurd vil du med til piratfest i aften ? adressen er Priratvej 100"

//Opgave 1. del 3 
let playListe = {
    venner: {
        Sigurd: {
        navn: 'Sigurd',
        sang: 'Hit me baby one more time'
        },

        Tessa: {
        navn: 'Tessa', 
        sang: 'Ben'
        },

        Mia: {
        navn: 'Mia',
        sang: 'Love will tear us apart'
        },

    },

}
for (let person in playListe.venner) {
    console.log(`${person}: ${playListe.venner[person].sang}`);

console.log(`yo ${person} vil du med til piratfest på reffen i aften? adressen er Priratvej 100`)
}