let name = "Danielle"; 
let age = 19;
let watchEsports = true;
let nameThatCannotChange = "Danielle"; 

if(watchEsports) { 
    console.log("I watch Esports tournaments");
}

if(age > 20){
    console.log("You are older than 20.");
}else if(age <20){
    console.log("You are younger than 20.")
}else{
    console.log("You are 20 years old.");
}

switch (name) {
    case "Danielle":
        console.log("You are Danielle Brazil")
        break; 
    default:
        console.log("You are not Danielle Brazil");
}

console.log(name);
console.log(age);
console.log(watchEsports);

console.log(nameThatCannotChange);

console.log(`Eyyy ka muna, My name is ${name} and I am ${age} years old and I love to watch Esports tournaments of `); 

let games = ["Mobile Legends", "Valorant"];

console.log(games);
console.log(games[0]);

for (let game of games) {
    console.log(game);
}

games.push("Honor of Kings");
games.push("Dota 2");

console.log(games); 

games = games.map(game => game + " Esports ");

console.log(games);

let fan = {
    name: "Danielle Brazil",
    age: 19, 
    watchEsports: true,
    greet: function(){
        console.log("Hello, I am " + this.name); 
    }
};

console.log(fan.name); 
console.log(fan.age); 
console.log(fan.watchEsports); 

fan.greet();

function myFunction(){
    console.log("Eyyy");
}

myFunction(); 

const myNewFunction = () => {
    return "Eyyy"; 
};

console.log(myNewFunction()); 

function describePerson(name, age) {
    console.log("This Esports fan is " + name + " and is " + age + " years old and love to watch " + games);
}

describePerson(name, age, games); 

const describePerson2 = (name, age, games) => {
    return `This person is ${name} and is ${age} years old and love to watch ${games}`;
};

console.log(describePerson2(name, age, games));