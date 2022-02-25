let arr = [];
let sum = 0;
function add(arr, sum) {
  //base case
  if (arr.length == 0) return sum;
  sum += arr[0];
  arr.shift();
  return add(arr, sum);
}
console.log(add(arr, sum))