// XOR - 1-1 = 0 | 0-0 =1 | 0-1 = 1 | 1-0 = 1
let arr = [9, 2, 4, 1, 7, 9, 2, 1, 4]; //Unique array
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  ans = ans ^ arr[i];
}
console.log(ans)
//! dry run on notebook for better understanding

/*
arr = [9, 2, 4, 1, 7, 9, 2, 1, 4]
----------------------------------
0^9 = 9
9^2 = 11
11^4 = 27
27^1 = 26
26^7 = 9
9^9 = 0
0^2 = 2
2^1 = 3
3^4 = 7 // This is the right answer ... The Unique number in arr
*/