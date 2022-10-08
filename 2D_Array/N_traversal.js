function nTraversal(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    let bag = "";
    let diff = 0; // 0-0 , 1-1, 2-2
 for(let i = 0; i<col; i++){
     for(let j = row-1; j>=0;j--){
         if(i == 0 || i == col-1) bag+= matrix[j][i]+" ";
         else if(i-j == diff) bag+= matrix[j][i]+" ";
     }
 }
 console.log(bag)
}