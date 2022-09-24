// first we imagine that the all given numbers are prime number and make all of them as true
// Then we will find one prime from starting and mark all other numbers false which are multiples of that found prime number

let n = 10; // find number of available prime number in the range 10;

let count = 0;
let prime = new Array(n).fill(1); //1-> false
prime[0] = prime[1] = 0; //marking the 0 and 1 as non-prime -> false;

for (let i = 2; i < n; i++) {
  // Initilazing form 2 bcoz we already maked 0 & 1 as non-prime
  if (prime[i]) {
    count++;
    console.log(i); // to display found prime
  }
  //! Marking all other multiples of found prime as false;
  //we can also initialise with 'j=2*i'
  //? basically 'j=2*i' will remarked the already marked numbers but with 'j=i*i'
  //? we ultimately ignore all the marked numbers.
  for (let j = i * i; j < n; j += i) {
    prime[j] = 0;
  }
}
console.log('Total' +count);

//! Time complexity - O(n*log(logn))
