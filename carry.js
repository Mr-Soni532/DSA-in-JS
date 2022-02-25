n = 19;
// let carry = 0;
// digit = n % 10; //! 9
// carry = Math.trunc(n / 10); //! 1
// console.log("carry " + carry, "digit " + digit);

while (n != 0) {
  digit = n % 10; //! 9
  console.log(digit)
  n = parseInt(n/10)
}
