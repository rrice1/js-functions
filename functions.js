//input = animal ex. fish
//output = animal product ex. fish stix
function nuggetizer(animal){
    return `${animal} stix`;
}

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
}
console.log('deer:', nuggetizer2('deer'));

const bearSticks = nuggetizer('bear');

const nomnom = (name, food) => {
    return `${name} devoured ${food}`
}

console.log(nomnom('rob', bearSticks));//rob devoured bear stix

console.log('fish:',nuggetizer('fish'));
console.log('cat:',nuggetizer('cat'));//cat stix
console.log('bear:',nuggetizer('bear'));//bear stix

//function numberAdder that takes in a number and returns the number +3

const numberAdder = (x) => {
   const finalNumber = x + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};

const printToDom = (stringToPrint, divId) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML += stringToPrint
};

numberAdder(22);
numberAdder(2);

printToDom('I am ready for lunch', 'feelings');