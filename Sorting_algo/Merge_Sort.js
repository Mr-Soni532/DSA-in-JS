let arr = [1, 5, 2, 7, 3, 8, 6, 2];
let l = 0;
let r = arr.length - 1;
function mergeSort() {
  if (l < r) {
    let mid = (l + r) / 2;
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r); 
  }
}
function merge(arr, left, mid, right) {
  let i = left,
    m = mid + 1,
    k = left;
  let tempArray = [];

  while (i <= mid && m <= r) {
    if (arr[i] < arr[m]) {
      tempArray[k] = a[i++];
      // i++
    } else {
      tempArray[r] = arr[m++];
      // we can use a[m++] instead m++;
    }
    k++;
  }
  //copy remaining items of left part
  while (i > mid) {
    tempArray[k++] = arr[m++];
  }
  //copy remaining items of right part
  while (j < m) {
    tempArray[k++] = arr[i++];
  }
  for (let k = l; k < right; k++) {
    arr[k] = tempArray[k];
  }
  return arr;
}
console.log(mergeSort(arr));
