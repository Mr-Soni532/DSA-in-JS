//! Agressive Cows 
// https://www.codingninjas.com/codestudio/problems/aggressive-cows_1082559?source=youtube&campaign=love_babbar_codestudio2&utm_source=youtube&utm_medium=affiliate&utm_campaign=love_babbar_codestudio2
let arr = [4, 3, 1, 2, 6];
arr.sort();
Number_of_cows = 2;
let start = 0;
let end = arr[arr.length - 1];
let ans = -1;
while (start <= end) {
  let mid = start + (end - start) / 2;
  if (isPossible(arr, Number_of_cows, mid)) {
    ans = mid;
    start = mid + 1; // Because we need to find the largest distance between cows
  } else {
    end = mid - 1;
  }
}
console.log(ans)

function isPossible (arr, n, mid) {
  let cowCount = 1;
  let lastPosition = arr[0];
  for (const stall of arr) {
    if(stall - lastPosition >= mid){
      cowCount++;
      if(cowCount == n){
        return true; 
      }
      lastPosition = stall;
    }
  }
  return false;
}