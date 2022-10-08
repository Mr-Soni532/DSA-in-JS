// function cirTraversal(matrix,N) {
//     //indexs
//     let topRow = 0;
//     let rightCol = N - 1;
//     let bottomRow = N - 1;
//     let leftCol = 0;
//     let bag = ""

//         //bottom to top
//         for (i = bottomRow; i >= topRow; i--) {
//              bag += (matrix[i][leftCol])+" "
//         }
//         leftCol++;

//         // left to right
//         for (i = leftCol;  i <= rightCol; i++) {
//             bag += (matrix[topRow][i])+" "
//         }
//         topRow++;

//         //top to bottom
//         for (i = topRow; i <= bottomRow; i++) {
//             bag += (matrix[i][rightCol])+" "
//         }
//         rightCol--;

//         //right to left
//         for (i = rightCol;  i >= leftCol; i--){
//                  bag += (matrix[bottomRow][i])+" "
//         }
//         console.log(bag)
//     }
//!------------------------------------
function cirTraversal(matrix, n) {
    let bag = "";
    for (let i = n - 1; i >= 0; i--) {
        bag += matrix[i][0] + " "
    }
    for (let i = 1; i < n; i++) {
        bag += matrix[0][i] + " "
    }
    for (let i = 1; i < n; i++) {
        bag += matrix[i][n-1] + " "
    }
    for (let i = n - 2; i > 0; i--) {
        bag += matrix[n - 1][i] + " "
    }
    console.log(bag)
}