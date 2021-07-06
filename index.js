const num = Number(prompt('Type an even or odd number'));


 const even = b => {
//    if(isNaN(b)) {
//   console.log('You should type a number')
// }
     if (b % 2 === 0) {
    console.log (b);
  }
};


const odd = c => {
//   if(isNaN(c)) {
//   console.log('You should type a number')
// }
if (c % 2 !== 0) {
    console.log(c*2);
  }
};

even(num);
odd(num);

function checkNumber (a, b, c) {
if(isNaN(a)) {
  console.log('You should type a number')
}
 else if(a % 2 === 0) {
    console.log(b);
  }
  else if (a % 2 !== 0) {
    console.log(c);
  }
}

checkNumber(num, even, odd);
