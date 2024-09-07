// ? Destructuring objects and arrays
//Sept 2024

const person = {
    name: 'John',
    age: 25,
    hobbies: ['reading','cooking'],
    greet: function(){
        console.log('Hello my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

//When to use destructuring?
// Destructuring is useful when you only need a specific property of an object.

//regular function
//regular passing of object
// even though we are passing th whole object, we are only using the name property.
//const printName = (personData) => {
    //console.log(persondata.name);
//}


const printName = ( { name } ) => {
    console.log(`Hello, my name is ${name}.`);
}

printName(person);

//if we are only interested in the name property of the object, can use destructuring
//destructuring the object
// const printName = ({ name }) => {
  //console.log(name);  
//}

//we pass the object as an argument to the function
printName(person);

const { name, age } = person;
console.log(name, age);

//destructuring arrays
const hoobies = ['reading', 'cooking'];
const [hobby1, hobby2] = hoobies;
console.log(hobby1, hobby2);


/* Reminders when using destructuring:
- The property name must match the object property name.
- The property name must be enclosed in curly braces.
- The property name must be followed by a colon.
*/



