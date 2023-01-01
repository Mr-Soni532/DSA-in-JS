function BinarySearch(arr, s, e, target) {
    if (s > e) return false;
    let mid = s + (e - s) / 2;
    if (arr[mid] == target) {
        return true;
    }
    if (arr[mid] > target) {
        return BinarySearch(arr, s, mid - 1, target)
    } else {
        return BinarySearch(arr, mid + 1, e, target)
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7]
let result = BinarySearch(arr, 0, 6, 3) // arr,start,end,target
console.log(result)