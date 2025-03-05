const emp={
  name:'shruthy',
  age:22,
  dep:"hr",
  salary:34000,
  efficience:"poor",
  gender:function(){
console.log(` ${this.name} has small tits  and ass`);


  }


}
// console.log(emp.gender());
emp.gender();

const car=new Object();
car.brand='tata';
car.model="harrier"
car.show=function(){
  console.log(`${this.car}  
    ${this.brand}`);
  
}

const prototypecar={
  drive:function(){
    console.log("driving");
    
  },

  
}
prototypecar.mycar="cybertruck"
console.log(prototypecar);
if(!prototypecar.price){
  prototypecar.price="14lakh"
}

console.log(prototypecar);

const cars = new Object();
cars.brand = "Tesla";
cars.model = "Model S";
cars.showDetails = function () {
  console.log(`${this.brand} - ${this.model}`);
};

cars.showDetails(); // Tesla - Model S
console.log(cars);

let mahindar =new Object()
mahindar.model="ROXX";
mahindar.variant="e6";
mahindar.price=function(){
  console.log(`${this.model} ${this.variant}`);
  
}
console.log(mahindar);

console.log('value 'in mahindar ? (mahindar.value = true) : "yes");
const user = { name: "Alice", age: 25, city: "New York" };
console.log(Object.entries(user));

const target = { a: 1 };
const source = { b: 2, c: 3 };

Object.assign(target,source)
console.log(target);

const to={...target,...source}
console.log(to);
  


Object.assign(mahindar,cars)

console.log(mahindar);

Object.freeze(cars)
cars.wow="ffvef"
console.log(cars);


const myBody=new Object();
myBody.heart="healthy";
myBody.blood="A+";

myBody.check=function(){
  console.log(` ${this.heart} ${this.blood}`);
  
}

console.log(myBody);

console.log(Object.entries(myBody));
console.log(Object.keys(myBody));
console.log(Object.values(myBody));
Object.assign(myBody,cars)
console.log(Object.entries(myBody));
const micu={...cars,...myBody}
console.log(micu);
// Object.freeze(myBody)
myBody.gender="male";

myBody.heart="poor"

Object.seal(myBody)
myBody.model="toyata"
console.log(myBody);

const {heart:beat,blood,model="ed"}=myBody;

console.log(beat);
console.log(model);



const rams={name:'ramm'};

const{name="soogu",age=40}=rams;
console.log(age);

const viv = {
  show: { ages: 33, add: "rvffvr" },
  show1: { age: 33, add: "rvffvr" },
  show2: { age: 33, add: "rvffvr" },
};
const {
  show: { ages, add },
} = viv;
function Person(name) {
  this.name = name;
}
Person.prototype.greet=function(){
  console.log(`hello ${this.name}`);
  
}
const alice =new Person('rfoirf')
alice.greet()

console.log(Person);

function Animal(type) {
  this.type = type;
}

Animal.prototype.makeSound = function () {
  console.log(`${this.type} makes a sound`);
};

const dog = new Animal("Dog");

dog.makeSound(); // Dog makes a sound

console.log(dog.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of prototype chain)

const parent={
  greet:function(){
    console.log("hlo world");
    
  }
};
const child=Object.create(parent)

child.greet();

function person(name){
  this.name=name;

}

person.prototype.sayhello=function(){
  console.log(`${this.name}`);
  
}
const person1=new person('alice')
console.log(person1);

person1.sayhello();