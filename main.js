const bananaDiv = document.getElementById("banana");
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
counter = counter + 1;
counter += 1;
counter++;

console.log('counter: ',counter)

const greetingElement = document.getElementById('greeting');
greetingElement.innerHTML = 'Hello my name is Rob';
const firstName = 'rob';
const lastName = 'rice';
// greetingElement.innerHTML = 'Hello my name is ' + firstName + ' ' + lastName;

greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

// object shorthand notation
let name = 'callan';
let age = '10000000000000';

// let person={
//     name: name,
//     age: age
// };

let person = {
    name,
    age
};

console.log('person: ',person.name);