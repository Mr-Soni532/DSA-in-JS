let arr = [1,2,3,4,5,6,7,8,0,9];
let newArr = new Array(10).fill(0)
for (let i = 0; i < nums.length; i++) {
  newArr[nums[i]]++;
}
console.log(newArr)
let check = new Set(newArr);
console.log(check)
if(newArr ==  check) console.log('true')
else{
  console.log('false')
}

//!----------------------------------------------- Modified version

let arr = [-3,0,1,-3,1,1,1,-3,10,0];

function Occurrences(arr) {
  let tom = {};
for(let i=0;i<arr.length;i++){
  tom[arr[i]]?tom[arr[i]]++:tom[arr[i]]=1;
  // let key = arr[i];
  // if(tom[key]){
  //   tom[key]+=1;
  // }
  // else{
  //   tom[key]=1;
  //   {key = }
  // }
}
let i =0;
arr = [];
for(key in tom){
  arr[i] = tom[key]
  i++;
}
let check = new Set(arr)
check = Array.from(check)
arr = JSON.stringify(arr)
check = JSON.stringify(check)
return arr==check
}
console.log(Occurrences(nums))