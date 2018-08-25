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


