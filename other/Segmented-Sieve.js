// Basically we use Segmented sieve for two main reason 
//? 1. To find prime between a given range
//? 2. To find exsisting prime numbers for a range more then 10^8
//! Segmented Sieve is not any faster or use less memory as compare to normal sieve..
// complexity of both Sieve and Segmented Sieve is O(nlog(logn))
//!----//---------//---------//-----------//----------//------------//-----------//----
let low = 6;
let high = 10;
let sqrtOfHigh = Math.floor(Math.sqrt(high));
let prime = []; //! This is an array to store the prime of limit sqrt(High)

///-------------------------------//?Calling both functions
sieve(sqrtOfHigh, prime);
segSieve(low, high, prime);
////----------------------------------------------
function sieve(n, prime) {
  // First making an array isPrime of length sqrt(high)+1  and make it true for all indexes
  let isPrime = new Array(n + 1).fill(true);
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      prime.push(i);
    }
    // Making false all the multiples of found prime
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
  return prime;
}
function segSieve(low, high, prime) {
  //Making an array isPrime
  let isPrime = new Array(high - low + 1).fill(true);
  for (let i = 0; prime[i] * prime[i] <= high; i++) {
    let currentPrime = prime[i];
    let base = (low / currentPrime) * currentPrime;
    /* 
    'Base' is the closest multiple of currentPrime so that we can start iterating our loop to that perticular element and mark it false along with rest just like we do in simple sieve of Erotes
    */
    if (base < low) {
      base += currentPrime;
    }
    //Mark all multiples within low to High as 'false'
    for (let j = base; j <= high; j += currentPrime) {
      isPrime[j - low] = false;
    }
    // In case the base is itself the currentPrime
    if (base == currentPrime) {
      isPrime[base - low] = true;
    }
  }
  for (let i = 0; i <= high - low; i++) {
    if (isPrime[i]) console.log(i + low);
  }
  return;
}
