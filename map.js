const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const live=myNumers.map(e=>e*2).map(e=>e+2).filter(e=>e>10)
console.log(live);
