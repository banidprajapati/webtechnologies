// Values and Variables
let country = 'Nepal';
let continent = 'Asia';
let population = 30;
console.log(country);
console.log(continent);
console.log(population);

// Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//let, const and var
language = 'Nepali';
const country1 = 'Nepal';
const continent1 = 'Asia';
const isIsland1 = false;
country1 = 'United Kingdom'

// Basic Operations
let halfPopulation = population/2;
halfPopulation += 1;
console.log(halfPopulation)
let finlandPopulation =  6;
console.log(population > finlandPopulation)
console.log(population < 33)
let description1 = country1 + " is in " + continent1+", and its "+population +" million people speak "+ language;
console.log(description1)


// String and Template Literals
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description)

// Taking Decisions: if / else Statements
// population = 13
population = 130
console.log(country + "'s Population is " + 33 - population + " million below average");
if (population > 33){
    console.log(country + "'s population is above average")
} else {
    console.log(country + "'s Population is " + 33 - population + " million below average");
}

// Type Conversion and Coercion
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //'617'
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143


// Equity Operators: ==vs==
let numNeighbours = prompt('How many neighbour countries does your country have?',);
if (numNeighbours == 1){
    console.log("Oly 1 border!")
} else if (numNeighbours > 1){
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

// Logical Operators

// The switch Statement

// The conditional Operator
