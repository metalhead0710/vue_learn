//spread operator

let staticLangs = ["C", "Java", "C++"];
let dynamicLangs = ["Js", "PHP", "Ruby"];
let languages = [...staticLangs, "C#", ...dynamicLangs, "Python"];

function add (x,y,z) {
  console.log(x+y+z);
}
function sum(...values) {
  let sum = 0;
  values.forEach( value => sum+=value );

  return sum;
}
let numbers = [1,2,3];
add(...numbers);

console.log("Sum with spread: " + sum(1,2,5,6,8,9,4,5,7,8,3,8,3));

let fName = "Kolia",
    lName = "Kobak",
    email = "test@test.com";

let person = {
  fName,
  lName,
  email,
  social: {
    fb: 'mykob',
    vk: 'kokob'
  },

  sayHello() {
    console.log(`My name is ${this.fName} ${this.lName}`);
  }
}

class Guitar {
  constructor (vendor = Guitar.defaultVendor()) {
    this.vendor = vendor;
    this._bought = false;
    this.amp = "Lamp!"
    Guitar.count += 1;
  }

  get bought() {
    return this._bought ? "Bought!" : "Not Bought";
  }
  set bought(value) {
    if (value !== undefined && typeof value === 'boolean') {
      this._bought = value;
    } else {
      console.error("True or false is needed, dont be a jerk");
    }
  }


  buy() {
    this.bought = true;
  }

  static defaultVendor() {
    return "Урал";
  }
}

Guitar.count = 0;

let fender = new Guitar("Fender");
let gibson = new Guitar("Gibson");
let ural = new Guitar;
fender.buy();

console.log(fender.bought);

(value => console.log(`This is ${value}`))('EpiCaee, mofo');

// Destructive assigning
let langs = ["Java", "PHP", "Python", "Ruby"];
let [java, php, py, rb] = langs;

console.log(java, php, py, rb);

let {fName: name, lName: surname, social: { fb: fabe, vk}, email: mylo} = person;
let {vendor:guitar, bought: availability, amp = "Peavey"} = fender;
console.log(guitar, availability, amp);
console.log(name, surname, mylo, fabe, vk);

//Promises
function getPasspost(docs) {
  console.log(docs);
  return new Promise( (resolve, reject) =>{
    setTimeout( () => {
      Math.random() ? resolve({passport:"Ok"}) : reject('Sorry, we have dinner');
    }, 20);
  });
}
function getInvitation(passpost) {
  console.log(passpost);
  let promise = new Promise((resolve, reject) => {
    Math.random() ? resolve({passpost}) : reject('no invitation');
  });
  return promise;
}
function bookHotel(passpost) {
  console.log(passpost);
  let promise = new Promise((resolve, reject) => {
    Math.random() ? resolve({hotel: 'booked'}) : reject('Fuck you, no hotel');
  });
  return promise;
}
function buyTickets(booking) {
  console.log(booking);
  let promise = new Promise((resolve, reject) => {
    Math.random()  ? resolve(console.info({ticket: 'got'})) : reject('No ticket');
  });
  return promise;
}

//Call all this shit

getPasspost({id: 33333333, ukrPass: "serie"})
  .then(getInvitation)
  .then(bookHotel)
  .then(buyTickets)
  .catch(error => console.error(error));

// Generators

function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
let iterator = generator();
