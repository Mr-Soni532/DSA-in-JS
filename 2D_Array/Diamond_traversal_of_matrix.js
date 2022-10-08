//!-------| O(n^2)
// function diamondTraversal(matrix) {
//     let size = matrix.length
//     let firstDiagonal = '';
//     let secondDiagonal = '';
//     let thirdDiagonal = '';
//     let fourthDiagonal = '';
//     let mid = Math.floor(size/2);
//     let midSum = mid;
//     let midDiff = -mid;
//     for(let i = 0; i<=mid; i++){
//         for(let j = 0; j<size; j++){
//             if(i-j == midDiff){
//                 firstDiagonal = matrix[i][j]+" " + firstDiagonal
//             } 
//             else if(i+j == midSum){
//                 secondDiagonal += matrix[i][j]+" "
//             }
//         }
//     }
//     midSum = (size-1) + mid
//     midDiff = (size-1) - mid
//     for(let i = size-1; i>mid; i--){
//         for(let j = 0; j<size; j++){
//             if(i-j == midDiff){
//                 thirdDiagonal = matrix[i][j]+" " + thirdDiagonal
//             } 
//             else if(i+j == midSum){
//                 fourthDiagonal += matrix[i][j]+" "
//             }
//         }
//     }
//        console.log(firstDiagonal+secondDiagonal+thirdDiagonal+fourthDiagonal)
//     }

//!-------| O(n)
function diamondTraversal(matrix) {
    let n= matrix.length;
    let bag = "";
    let mid = (n - 1) / 2;
    let i = mid, j = n - 1;
    while (i >= 0 && j >= mid) {
        bag += matrix[i][j] + " ";
        i--;
        j--;
    }
    i = 1, j = mid - 1;
    while (i <= mid && j >= 0) {
        bag += matrix[i][j] + " ";
        i++;
        j--;
    }
    i = mid + 1, j = 1;
    while (i < n && j <= mid) {
        bag += matrix[i][j] + " ";
        i++;
        j++;
    }
    i = n-2, j = mid + 1;
    while (i > mid && j <= n - 2) {
        bag += matrix[i][j] + " ";
        i--;
        j++;
    }
    console.log(bag)
}