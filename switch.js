let day = 3;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesaday");
    break;
  case 3:
    console.log("wenesday");
        break;

  case 4:
    console.log("thursady");
        break;

  case 5:
    console.log("friday");  
      break;

  default:
    console.log("invalis");
}

function addoreven(num){
switch(num%2){
  case 0:console.log('even');
  break;
  case 1:
    case -1:
  console.log("odd");
  break;
  default:console.log("invalid put");
  
  
}
}
console.log(addoreven(-1));
