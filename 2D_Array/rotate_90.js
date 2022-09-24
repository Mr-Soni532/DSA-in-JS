let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//index
let top = 0;
let bottom = matrix.length - 1;
let left = 0;
let right = matrix[0].length - 1;


while (top < bottom) {
    //for shifting the indexes in same layer
    for (let i = 0; i < bottom - top; i++) {
        let store = matrix[top][left + i];
        matrix[top][left+i] = matrix[bottom - i][left]
        matrix[bottom - i][left] = matrix[bottom][right - i]
        matrix[bottom][right - i] = matrix[top + i][right]
        matrix[top + i][right] = store;
    }
    // for shifting the elemtnt form outer layer to inner layer
    top++;
    bottom--;
    left++;
    right--;
}
console.log(matrix)