//!-----| O(N^2) |

// function zTraversal(N,matrix){
//     let row = matrix.length
// let col = matrix[0].length
// let bag = "";
// let diff = N-1
// for(let i = 0; i<row; i++){
//  for(let j = 0; j<col;j++){
//      if(i == 0 || i == col-1) bag+= matrix[i][j]+" ";
//      else if(i+j == diff) bag+= matrix[i][j]+" ";
//  }
// }
// console.log(bag)

// }

//!-----| O(N) |
function zTraversal(n, matrix) {
    let bag = "";
    let i = 0;
    for (i; i < n; i++) {
        bag += matrix[0][i] + " " // for first line
    }
    i = 1;
    let j = n - 2;
    while (i < n && j >= 0) {
        bag += matrix[i][j] + " " // for first line
        i++;
        j--;
    }
    for (i = 1; i < n; i++) {
        bag += matrix[n - 1][i] + " " // for first line
    }
    console.log(bag)
}