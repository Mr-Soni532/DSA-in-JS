let matrix =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

let bag = [];
let r = matrix.length;
let c = matrix[0].length;

//indexs
let topRow = 0;
let rightCol = c - 1;
let bottomRow = r - 1;
let leftCol = 0;

let count = 0;
let total = r * c;

let i = 0;
while (count < total) {

    // left to right
    for (i = leftCol; count < total && i <= rightCol; i++) {
        bag.push(matrix[topRow][i])
        count++;
    }
    topRow++;
    //top to bottom
    for (i = topRow; count < total && i <= bottomRow; i++) {
        bag.push(matrix[i][rightCol])
        count++;
    }
    rightCol--;
    //right to left
    for (i = rightCol; count < total && i >= leftCol; i--) {
        bag.push(matrix[bottomRow][i])
        count++;
    }
    bottomRow--;
    //bottom to top
    for (i = bottomRow; count < total && i >= topRow; i--) {
        bag.push(matrix[i][leftCol])
        count++;
    }
    leftCol++;
}
console.log(bag)