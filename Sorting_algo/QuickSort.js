function partition(arr, s, e) {
  //First we find a pivot point
  let pivot = arr[s];
  let count = 0; // we set the pivot point to it's right poistion according to the count

  for (let i = s + 1; i <= e; i++) {
    if (arr[i] <= pivot) count++;
  }

  //placing pivot at it's true position by swaping current pivot position with its true position

  let pivotIndex = s + count;
  let temp = arr[s];
  arr[s] = arr[pivotIndex];
  arr[pivotIndex] = temp;

  //now check if the left part smaller than pivot and right part is larger than pivot
  let i = s,
    j = e;
  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    //if any element is not obeying the condition then swap
    if (i < pivotIndex && j > pivotIndex) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return pivotIndex;
}

function quickSort(arr, start, end) {
  if (start >= end) return;
  //partition
  let p = partition(arr, start, end);
  //Sorting left part
  quickSort(arr, start, p - 1);
  //Sorting right part
  quickSort(arr, p + 1, end);
  return arr;
}
let arr = [3, 1, 9, 5, 2, 8];
console.log(quickSort(arr, 0, arr.length - 1));
