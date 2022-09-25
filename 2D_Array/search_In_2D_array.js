/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

#Integers in each row are sorted in ascending from left to right.
#Integers in each column are sorted in ascending from top to bottom.
*/
let matrix = 
[[1,4,7,11,15],
[2,5,8,12,19],
[3,6,9,16,22],
[10,13,14,17,24],
[18,21,23,26,30]], 
target = 5
let searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    
    let rowIndex = 0;
    let colIndex = col-1;
    
    while(rowIndex<row && colIndex >=0){
        let element = matrix[rowIndex][colIndex];
        
        if(element == target) return 1;
        else if(element < target) rowIndex++;
        else colIndex--;
    }
    return 0;
};
searchMatrix(matrix, target)