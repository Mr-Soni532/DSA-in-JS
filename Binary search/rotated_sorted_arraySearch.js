let arr = [4,5,6,7,8,-1,1,2,3]
// To find the pivot point of arr (lowest point in graphical representation)
function pivot(arr) {
    let start = 0; 
    let end = arr.length -1;
    while(start<end){
        let mid = start + (end-start)/2;
        if(arr[mid] >= arr[end]){
            start = mid+1;
        } else {
            end = mid;
        }
    }
    console.log(arr[end], end);
}
pivot(arr)