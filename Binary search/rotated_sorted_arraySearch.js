let arr = []
// To find the pivot point of arr (lowest point in graphical representation)
function pivot(arr) {
    let start = 0; 
    let end = arr.length -1;
    while(s<e){
        let mid = s + (e-s)/2;
        if(arr[mid] >= arr[0]){
            start = mid+1;
        } else {
            end = mid;
        }
    }
    return start;
}