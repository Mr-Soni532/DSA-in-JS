var subsets = function (nums) {
  let answer = [];
  function solve(index, set) {
    //base case
    if (index >= nums.length) {
      answer.push(set);
      return;
    }
    //Include
    solve(index+1, [...set, nums[index]]);
    //exclude
    solve(index+1, set);
  }
  solve(0, []);
  return answer;
};
// subsets();
let nums = [1, 2, 3];
console.log(subsets(nums));
