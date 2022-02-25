let arr = [1, 3, 3, 4, 5, 6, 7];
let ans = 0;
for (const index of arr) {
  ans = ans ^ arr[index];
}
for (let i = 1; i < arr.length; i++) {
    ans = ans^i    
}
console.log(ans)

//!---------------- With O(n)

let nums = [1, 2, 3, 3, 4, 5, 6, 5];
let count = new Array(nums.length).fill(0);
let duplicates = [];
for (let i = 0; i < nums.length; i++) {
  count[nums[i]] ? count[nums[i]]++ : count[nums[i]]=1;
  if (count[nums[i]] == 2) {
    duplicates.push(nums[i]);
  }
}
console.log(duplicates);