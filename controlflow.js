const temperature=10;
if(temperature===100){
  console.log('bad');
  
}else{
  console.log('good');
  
}

const score=200;
if(score>100){
  const power=score;
  console.log(`user power:${power}`);
  
}
const student=49;
if(student>100){
  console.log("invalid");
  
}
else if(student>=90){
  console.log('A+');
  
}else if(student>=80){
  console.log('A');
  
}
else if(student>=70){
  console.log('B+');
  
}
else if(student>=60){
  console.log('B');
  
}
else if(student>=50){
  console.log('C');
  
}else{
  console.log("failed");
  
}


const userLoggIn=false;
const userLoggOUT=true;
if(userLoggIn||userLoggOUT){
  console.log('yes');
  
}

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// const month='jan';
// switch (month) {
//   case "jan":
//     console.log('jan');
// break;
//   case "feb":
//     console.log('feb');
// break;
//   case "Mar":
//     console.log('mar');
// break;
//   case "Apri":
//     console.log('Apri');
// break;
//   case "may":
//     console.log('may');
// break;
//   case "june":
//     console.log('june');
// break;
//   default:
//     console.log('invalid');
    
//     break;
// }
const value=100;
switch (true) {
  case value<=100:
    console.log("less 100");
    break;
    
  case value<=1000:
    console.log("less 1000");
    break;

  case value<=10000:
    console.log("less 10000");
    break;


  default:
    console.log("invalid");
    
    break;
}

const userEmail=" ";
if(userEmail){
  console.log("Got user email");
  
}else{
  console.log("no email");
  
}

let values =undefined??10;
console.log(values);
