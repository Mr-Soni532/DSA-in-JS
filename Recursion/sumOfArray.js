// let arr = [];
// let sum = 0;
// function add(arr, sum) {
//   //base case
//   if (arr.length == 0) return sum;
//   sum += arr[0];
//   arr.shift();
//   return add(arr, sum);
// }
// console.log(add(arr, sum))

let arr = [1,2,3,4,5,6];
function wholeSum(arr,index,sum){
  if(index == arr.length) {
    console.log(sum)
    return;
  }
  sum += arr[index];
  wholeSum(arr,index+1,sum)
}
wholeSum(arr,0,0);
