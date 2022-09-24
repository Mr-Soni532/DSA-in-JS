/*
1 2 3 
4 5 6
7 8 9
output-> 1 4 7 8 5 2 3 6 9
Have to traverse through columns
*/
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let nCol = matrix[0].length
let nRow = matrix.length
let bag = [];
for (let col = 0; col < nCol; col++) {
    if (col & 1) {
        for (let row = nRow - 1; row >= 0; row--) {
            bag.push(matrix[row][col])
        }
    } else {
        for (let row = 0; row < nRow; row++) {
            bag.push(matrix[row][col])
        }
    }
}
console.log(bag)