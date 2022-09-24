let arr = [4, 7, 1, 9, 3];
for (let i = 1; i < arr.length; i++) {
  let temp = arr[i];
  let j = i - 1;
  for (; j >= 0; j--) {
    if (arr[j] > temp) {
    // Here shifting the current value to the next index so that we can put the temp value in the current index
      arr[j + 1] = arr[j]; 
    } else break;
  }
  arr[j + 1] = temp;   
}
console.log(arr);
