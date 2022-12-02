let x = "10";
let y = 10;

let isItRaining = true;
let nickName = 'karem';

function buyCoffee(dollarAmount){
    let costOfCoffee = 1.00;
    let change = dollarAmount - costOfCoffee;
    return change;
}



// //discount is whatvere i decide it to be when i call your function
// function buyCoffeeAndReturnPriceAfterDiscount(productCost, discount){
//     let x = productCost * discount;
//     productCost = productCost - (x/100);
//     return productCost;
// }

// console.log(buyCoffeeAndReturnPriceAfterDiscount(100, 10))

const person = {
    firstName: "mike",
    lastName: "jones",
    age: 50,
    eyeColor: "brown",
    fullName: function(){
        return this.firstName + " "+ person.lastName;
    }
}

console.log(person.firstName);
console.log(person.fullName());

// function printPersonName(person){
//     console.log("user 1 is", person.firstName, " ", person["lastName"]);

// }
// printPersonName(person);


const whips = ['bmw', 'benz', 'bentley'];
whips[3] = 'bugatti';

console.log(whips[1]);

for(let x = 0; x < whips.length; x++){
    console.log(whips[x]);
}

const bill = [10.0, 45.0 , 25.0];

function totalBill(bill){
    let total = 0;
    for(let x = 0; x < bill.length; x++){
        total = total + bill[x];
        console.log(total);
    }
}

var name = "Karem"

var last = "abdul";

function transform(){
    var last = "john";
    console.log(last);
}

console.log(last);
transform();
 console.log(last);

 // //the last name is only accesssable within the function scope making it not a global variable.

var lastName = true;

// // Initialize a global variable
let name2 = "Abe";

if (lastName) {
  // Initialize a block-scoped variable
  let name2 = "James";
  console.log(`the new name is ${name2}.`);
}

const benz = {
	name: "Mercedes",
	color: "Black/Red",
	modele: "CLA45",
	pullUp: function() {
		return `this car is ${this.modele}!`;
	},
};

console.log(benz);

console.log(benz.color);
console.log(benz.modele);

console.log(benz.pullUp());

// Assign the five cars
let vehicleBrand = [
	"Benzo",
	"bmw",
	"honda",
	"toyota",
	"kia",
];

console.log(vehicleBrand[2]);


let footballers = [
	"Messi",
	"neymar",
	"mbappe",
];

console.log(footballers);

let nestedArray = [
	[
		"Karem",
		"Omar",
	],
	[
		"Aqil",
		"Liam",
	]
];

console.log(nestedArray[0][1]);


let array = [
	"Brazil",
	"Argentina",
	"Portual",
	"Spain",
	"Croatia",
];

seaCreatures.push(" ");

//adds a object to the array 

for(let i = 0; i < array.length; i++){
	console.log(i, array[i]);
}

const qatar = {
	first: "Brazil",
	second: "Argentina",
	third: "France"
}

// Print property names of object
for (attribute in qatar) {
	console.log(attribute);
}

// Print property values of object
for (attribute in qatar) {
	console.log(qatar[attribute]);
}

// Print names and values of object properties
for (attribute in qatar) {
	console.log(`${attribute}`.toUpperCase() + `: ${qatar[attribute]}`);
}

function greet(){
	console.log("Hello world");
}


// Define multiply function
const multiply = (x, y) => {
	return x * y;
}

// Invoke function to find product
// multiply(30, 4);


const add = (x, y) => {
	return x + y;
}


class person2{
    constructor(name, level){
        this.name = name;
        this.age = age;
    }
	greet(){
		return `${this.name} says hello.`;
	}
	backFlip(){
		return `${this.name} does a back flip`;
	}
	
	
}


const person3 = new person2(`John`, 22);
console.log(person3);




// Initialize an object with properties and methods
const player = {
    name: "messi",
    position: 'Right Wing',
    availability: false,
    reason: 'injured',
    showDetails() {
        const thisplayer = this.availability ? 'is playing' : "is not playing";

        console.log(`The ${this.name} availibility is ${this.availability} because of ${this.reason}.`);
    }
};


// Initialize an object
const employees = {
	boss: 'Karem',
	secretary: 'James',
	sales: 'John',
	accountant: 'Abe'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);

// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

	 console.log(`${key}: ${value}`);
});

// Get the length of the keys
const length = Object.keys(employees).length;

console.log(length);
const values = Object.values(employees);
console.log(values);

const entries = Object.entries(employees);
console.log(entries);

// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});

// Initialize an object
const person4 = {
    firstName: 'Karem',
    lastName: 'Abe'
};

// Initialize another object
const details = {
    job: 'Software Engineeer',
    employer: 'JP Morgan'
};

// Merge the objects
const character = Object.assign(person4, details);

console.log(character);


// Initialize an object
const user = {
	username: 'Karem',
	password: '1235'
};

// Freeze the object
const newUser = Object.freeze(user);

// Seal the object
const newUser2 = Object.seal(user);

newUser.password = '54321';
newUser.active = true;

console.log(newUser);

const note = {
	id: 1,
	title: '1000 splendid sungs',
	date: '01/14/2010',
	author: {
		firstName: 'Karem',
		lastName: 'Abdul',
	  },
  }

//Create variables from the Object properties
// const id = note.id
// const title = note.title
// const date = note.date

//Destructure properties into variables
// const { id, title, date } = note

console.log(id)
console.log(title)
console.log(date)



//   Destructure nested properties
// const {
// 	id,
// 	title,
// 	date,
// 	author: { firstName, lastName },
//   } = note

  //console.log(`${firstName} ${lastName}`)

  const name = ['Abe', 'Karem', 'Ali']

  //Create variables from the Array items
// const first = date[0]
// const last = date[2]
// const middle = date[1]

// Destructure Array values into variables
// const [first, last, middle] = full name

// console.log(first)
// console.log(middle)
// console.log(last)

// Skip the second item in the array
const [first, , middle] = name

console.log(middle)
console.log(first)

const printNumbers = {
	phrase: 'The current value is:',
	numbers: [1, 2, 3, 4],
  
	loop() {
	  this.numbers.forEach((number) => {
		console.log(this.phrase, number)
	  })
	},
  }
  
  printNumbers.loop();

//   ---------------------EVENT LOOP-------------------------

// Define three example functions
function first() {
	console.log(1)
  }
  
  function second() {
	console.log(2)
  }
  
  function third() {
	console.log(3)
  }

  // Execute the functions
first()
second()
third()

const promise = new Promise((resolve, reject) => {
	resolve('We did it!')
})
