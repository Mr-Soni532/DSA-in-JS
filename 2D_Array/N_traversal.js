//!----| O(n^2)
// function nTraversal(matrix) {
//     let row = matrix.length
//     let col = matrix[0].length
//     let bag = "";
//     let diff = 0; // 0-0 , 1-1, 2-2
//  for(let i = 0; i<col; i++){
//      for(let j = row-1; j>=0;j--){
//          if(i == 0 || i == col-1) bag+= matrix[j][i]+" ";
//          else if(i-j == diff) bag+= matrix[j][i]+" ";
//      }
//  }
//  console.log(bag)
// }

//!----| O(n)
function nTraversal(matrix) {
    let n = matrix.length
    for (let i = n - 1; i >= 0; i--) {
        bag += matrix[i][0] + " "
    }
    for (let i = 1; i < n; i++) {
        bag += matrix[i][i] + " "
    }
    for (let i = n - 2; i >= 0; i--) {
        bag += matrix[i][n-1] + " "
    }
    console.log(bag)
}

   

