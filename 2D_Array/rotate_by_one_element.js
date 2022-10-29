let top = 0, left = 0;
let bottom = matrix.length, right = bottom;
while (top < bottom && left < right) {
    //store first element of next row in prev
    let prev = matrix[top + 1][left];

    // moving elements of top row by swapping element with prev 
    for (let i = left; i < right; i++) {
        let current = matrix[top][i];
        matrix[top][i] = prev;
        prev = current;
    } top++;
    // moving elements of last col by swapping element with prev 
    for (let i = top; i < bottom; i++) {
        let current = matrix[i][right];
        matrix[i][right] = prev;
        prev = current;
    } right--;
    // moving elements of last row by swapping element with prev 
    for (let i = right-1; top <= bottom && i >= left; i--) {
        let current = matrix[bottom][i];
        matrix[bottom][i] = prev;
        prev = current;
    } bottom--;

    // moving elements of first col by swapping element with prev 
    for (let i = bottom; left < right && i >= top; i--) {
        let current = matrix[i][left];
        matrix[i][left] = prev;
        prev = current;
    } left++;
}






