//! Euclid's GCD Algo
//? GCD -> Greatest Common Divisor

// There are two cases
//1. x=y -> GCD(x,y) = GCD(x,y) = Euclid's X
//2. x>y -> GCD(x,y) = GCD(x-y, y)

//! CODE

function GCD(x, y) {
  if (x == 0) return y;
  if (y == 0) return x;

  while (x != y) {
    if (x > y) {
      x = x - y;
    } else {
      y = y - x;
    }
    return x;
  }
}

console.log(GCD(1070, 446))