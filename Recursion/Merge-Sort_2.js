let i = 0;
function merge(arr, start,mid, end) {
  let index1 = start;
  let index2 = mid + 1;
  while (index1 <= mid && index2 <= end) {
    if (arr[index1] > arr[index2]) {
      arr.splice(index1, 0, arr[index2]); // Inserting the smaller element of larger index
      arr.splice(index2 + 1, 1); // removing the smaller element of larger index
      index2++;
      mid++;
      /**
       So, here is one baisc thing, which is smaller index supposed to have smaller elements as compare to the larger index. 
       Therefore, if the element at smaller index is greater than element at larger index then we remove the element from the larger index and put it before the smaller index element.
        
       Mid is increased to compensate for the increase in the index of last elelment in the left array

       when an element is spliced in the left part the last element in the left part in also shifted by 1 and hence the size or the end of left part is also increased by 1.
       //ex - 3 5 6 1 4 8     //! left 0, 2 / right 3, 5
              1 3 5 6 1 4 8   //! left 0, 3 / right 4, 6  --> 1 extra index
              1 3 5 6 4 8     //! left 0, 3 / right 4, 5
       */
    }
    index1++;
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
  return merge(arr, start, mid, end);
}
let arr = [6,7,8,9,1,2,3,2,3,4,5];
console.log(mergeSort(arr, 0, arr.length - 1));
