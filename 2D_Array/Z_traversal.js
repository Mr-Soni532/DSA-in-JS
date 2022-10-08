function zTraversal(N,matrix){
    let row = matrix.length
let col = matrix[0].length
let bag = "";
let diff = N-1
for(let i = 0; i<row; i++){
 for(let j = 0; j<col;j++){
     if(i == 0 || i == col-1) bag+= matrix[i][j]+" ";
     else if(i+j == diff) bag+= matrix[i][j]+" ";
 }
}
console.log(bag)

}