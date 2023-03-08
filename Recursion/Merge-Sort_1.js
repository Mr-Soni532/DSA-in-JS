function merge(arr, start, end) {
  let mid = start + Math.floor((end - start) / 2);

  let len1 = mid - start + 1;
  let len2 = end - mid;

  // creating 2 new arrays for storing the sorted values
  let first = new Array();
  let second = new Array();

  //copy values
  let mainArrayIndex = start;
  for (let i = 0; i < len1; i++) {
    first[i] = arr[mainArrayIndex++];
  }
  mainArrayIndex = mid + 1;
  for (let i = 0; i < len2; i++) {
    second[i] = arr[mainArrayIndex++];
  }

  //merge 2 sorted arrays
  let index1 = 0;
  let index2 = 0;
  mainArrayIndex = start;
  while (index1 < len1 && index2 < len2) {
    if (first[index1] < second[index2]) {
      arr[mainArrayIndex++] = first[index1++];
    } else {
      arr[mainArrayIndex++] = second[index2++];
    }
  }
  while (index1 < len1) {
    arr[mainArrayIndex++] = first[index1++];
  }

  while (index2 < len2) {
    arr[mainArrayIndex++] = second[index2++];
  }
  return arr;
}
function mergeSort(arr, start, end) {
  if (start >= end) return; //Base Case
  let mid = start + Math.floor((end - start) / 2);
  //left part
  mergeSort(arr, start, mid);
  //Right Part
  mergeSort(arr, mid + 1, end);
  //Merge
  return merge(arr, start, end);
}
let arr = [3,5,6,1,4,8];
console.log(mergeSort(arr, 0 , arr.length-1))

//! Mid - 0 
//! 