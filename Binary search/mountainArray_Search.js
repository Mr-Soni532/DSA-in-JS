//Designed to find the peak of the array
let arr = [1];
let start = 0;
let end = arr.length - 1;
// mid = start + (end - start)/2 -- We can use this formula for greater input values like 2^31...
while (start < end) {
  let mid = parseInt((start + end) / 2);
    // Incline path
   if (arr[mid] < arr[mid + 1]) {
    start = mid + 1;
    // decline path
  } else {
    end = mid;
  }
}
console.log(" Found peak Element " + arr[start] + " at index " + start);
