

//! Decimal to Binary ----------------
function decToBin() {
  let answer = 0;
  let str = "";
  (i = 0), (n = 14);
  while (n != 0) {
    bit = n & 1;
    answer = bit * Math.pow(2, i) + answer;
    str = JSON.stringify(answer);
    n = n >> 1;
    i++;
  }
}

// can also use pareseInt(num.toString(2)) to convert decimal into binary
//!-----------------------
// // For Greater values we need to store the answer in array or string

// //! Binary to Decimal ---------------
function binToDec() {
  let binary = 101;
  let ans = 0;
  let i = 0;
  while (binary != 0) {
    let digit = Math.floor(binary % 10);
    if (digit == 1) {
      ans += Math.pow(2, i);
    }
    binary = Math.floor(binary / 10);
    i++;
  }
  console.log("ans " + ans);
}
binToDec();
// n = 101;
// parseInt(n, 2) == 5;  Here 2 means base 
//!------------------------------
// // Simply Ignoring the 0 bits and storing power of 2's at set bits

//! Optimised Approach -- Deciaml to binary
// let arr = new Array();
// let n = 14;
// while (n != 0) {
//   arr.unshift(n & 1);
//   n = n >> 1;
// }
// console.log('array ' +arr) // to get result as array
// console.log('string ' +arr.join("").toString()) // to get result as string
// console.log('Number ' +arr.join("")) // to get result as integer
