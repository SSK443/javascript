// // const emp={
// //   name:'shruthy',
// //   age:22,
// //   dep:"hr",
// //   salary:34000,
// //   efficience:"poor",
// //   gender:function(){
// // console.log(` ${this.name} has small tits  and ass`);


// //   }


// // }
// // // console.log(emp.gender());
// // emp.gender();

// // const car=new Object();
// // car.brand='tata';
// // car.model="harrier"
// // car.show=function(){
// //   console.log(`${this.car}  
// //     ${this.brand}`);
  
// // }

// // const prototypecar={
// //   drive:function(){
// //     console.log("driving");
    
// //   },

  
// // }
// // prototypecar.mycar="cybertruck"
// // console.log(prototypecar);
// // if(!prototypecar.price){
// //   prototypecar.price="14lakh"
// // }

// // console.log(prototypecar);

// // const cars = new Object();
// // cars.brand = "Tesla";
// // cars.model = "Model S";
// // cars.showDetails = function () {
// //   console.log(`${this.brand} - ${this.model}`);
// // };

// // cars.showDetails(); // Tesla - Model S
// // console.log(cars);

// // let mahindar =new Object()
// // mahindar.model="ROXX";
// // mahindar.variant="e6";
// // mahindar.price=function(){
// //   console.log(`${this.model} ${this.variant}`);
  
// // }
// // console.log(mahindar);

// // console.log('value 'in mahindar ? (mahindar.value = true) : "yes");
// // const user = { name: "Alice", age: 25, city: "New York" };
// // console.log(Object.entries(user));

// // const target = { a: 1 };
// // const source = { b: 2, c: 3 };

// // Object.assign(target,source)
// // console.log(target);

// // const to={...target,...source}
// // console.log(to);
  


// // Object.assign(mahindar,cars)

// // console.log(mahindar);

// // Object.freeze(cars)
// // cars.wow="ffvef"
// // console.log(cars);


// // const myBody=new Object();
// // myBody.heart="healthy";
// // myBody.blood="A+";

// // myBody.check=function(){
// //   console.log(` ${this.heart} ${this.blood}`);
  
// // }

// // console.log(myBody);

// // console.log(Object.entries(myBody));
// // console.log(Object.keys(myBody));
// // console.log(Object.values(myBody));
// // Object.assign(myBody,cars)
// // console.log(Object.entries(myBody));
// // const micu={...cars,...myBody}
// // console.log(micu);
// // // Object.freeze(myBody)
// // myBody.gender="male";

// // myBody.heart="poor"

// // Object.seal(myBody)
// // myBody.model="toyata"
// // console.log(myBody);

// // const {heart:beat,blood,model="ed"}=myBody;

// // console.log(beat);
// // console.log(model);



// // const rams={name:'ramm'};

// // const{name="soogu",age=40}=rams;
// // console.log(age);

// // const viv = {
// //   show: { ages: 33, add: "rvffvr" },
// //   show1: { age: 33, add: "rvffvr" },
// //   show2: { age: 33, add: "rvffvr" },
// // };
// // const {
// //   show: { ages, add },
// // } = viv;
// // function Person(name) {
// //   this.name = name;
// // }
// // Person.prototype.greet=function(){
// //   console.log(`hello ${this.name}`);
  
// // }
// // const alice =new Person('rfoirf')
// // alice.greet()

// // console.log(Person);

// // function Animal(type) {
// //   this.type = type;
// // }

// // Animal.prototype.makeSound = function () {
// //   console.log(`${this.type} makes a sound`);
// // };

// // const dog = new Animal("Dog");

// // dog.makeSound(); // Dog makes a sound

// // console.log(dog.__proto__ === Animal.prototype); // true
// // console.log(Animal.prototype.__proto__ === Object.prototype); // true
// // console.log(Object.prototype.__proto__); // null (end of prototype chain)

// // const parent={
// //   greet:function(){
// //     console.log("hlo world");
    
// //   }
// // };
// // const child=Object.create(parent)

// // child.greet();

// // function person(name){
// //   this.name=name;

// // }

// // person.prototype.sayhello=function(){
// //   console.log(`${this.name}`);
  
// // }
// // const person1=new person('alice')
// // console.log(person1);

// // person1.sayhello();
// const mysymbol=Symbol('nokia');
//  const person2={
//   'name':'alice',
//   [mysymbol]:'nokia',
//   age:22,
//   add:"whitfield",
//   greet:function(){
//     console.log(`hello mr.${this.name}`);
    
//   }
// }
// console.log(
//   person2['name']
// );
// console.log(typeof person2[mysymbol]);

// person2.gender='male';
// console.log(person2);

// "salary"in person2?console.log('yes'):person2.salary="444444";

// console.log(person2)

// person2.hasOwnProperty("performance")?console.log('yes'):person2.performence="decent"
// console.log(person2);

// const person = {
//   name: "John Doe",
//   age: 30,
//   job: "Software Engineer",
//   isMarried: false,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     country: "USA",
//   },
//   hobbies: ["reading", "coding", "traveling"],
//   greet: function () {
//     console.log(`Hello, my name is ${this.name} and I am a ${this.job}.`);
//   },
// };

// Object.assign(person2,person)

// console.log(person2);

// // const double={...person2,...person}

// // console.log(double);
// console.log(typeof Object.values(person2));

// const{name,add,gender}=person2
// console.log(name);

// console.log(add);

// let suku =Object.entries(person)

// console.log();

// for(keys in person){
//   console.log(`${keys}:${person[keys]}`);
  
// }
// console.log(typeof suku);

// delete add;
// console.log(person2.hasOwnProperty(add));
// delete person.address.country;
// console.log(person.address.hasOwnProperty("country"));
// console.log(person);

// // Object.freeze(person);

// // console.log(delete person.address);

// Object.seal(person)
// person.car="bmw";
// console.log(person);
// const showMe = [
//   ["name", "Alice"],
//   ["age", 25],
// ];
// console.log(Object.fromEntries(showMe));

// console.log(Object.is(5, 5));
// console.log(Object.getOwnPropertySymbols(person2));

const object4={
  add:'rferf',
  sschol:'etetgrgg'
}
const object5={
  name:'sheela',
  age:44,
}
// const object6={...object4,...object5}
const object6=Object.assign({},object4,object5)
console.log(object6);

console.log(object4);

