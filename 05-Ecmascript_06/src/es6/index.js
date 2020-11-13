// Params by default

//Before
function newFunction(name) {
  var name = name || 'Cristian';
}

//es6
function newFunctionTwo(name = 'Cristian') {
  console.log(name);
}

newFunctionTwo();
newFunctionTwo('Camilo');

// Template literals 

// Before
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhraseTwo = `${hello} ${world}`;
console.log(epicPhraseTwo);



