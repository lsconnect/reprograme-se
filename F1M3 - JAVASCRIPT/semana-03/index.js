let sumEven = 0;
let sumOdd = 0;
  
for(let i = 1; i <= 20; i++) {
  let sqr = i * i;
  if( i % 2 == 0) {
    sumEven += sqr;
  } else {
    sumOdd += sqr;
  }

  console.log(sqr);
}

console.log("A soma de quadrados pares:", sumEven);
console.log("A soma de quadrados ímpares:", sumOdd);