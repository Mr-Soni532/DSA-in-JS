function power(a, b) {
  // b is the power of a
  if (b == 0) return 1;
  if (b == 1) return a;
  let ans = power(a, Math.floor(b / 2));
  return b & 1 ? a * ans * ans : ans * ans;
}
console.log(power(2,10))