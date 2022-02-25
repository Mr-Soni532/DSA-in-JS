let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let start = 0;
let end = arr.length - 1;
// mid = start + (end - start)/2 -- We can use this formula for greater input values like 2^31...
let key = 8;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  if (arr[mid] == key) {
    // Matched
    console.log(mid);
    break;
  } else if (arr[mid] < key) {
    // Right
    start = mid + 1;
  } else {
    // Left
    end = mid - 1;
  }
}
