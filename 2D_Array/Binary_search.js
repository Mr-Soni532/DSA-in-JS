let matrix = [[1, 3, 5], [6, 9, 11], [12, 22, 32]];
let r = matrix.length;
let c = matrix[0].length;
let target = 22;
let start = 0;
let end = r * c - 1;

while (start <= end) {
    let mid =  parseInt(start + (end - start) / 2);

    let row = parseInt(mid/c); //*
    let col = mid%c;           //*

    let element = matrix[row][col];

    if (element == target) {
        console.log("Found");
        break;
    } else if (element < target) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

/*
In line 11 and 12, used divison and modulo for finding the row and col of the particular element;

Row -> when we divide the desired element with col.length then we get the row number. For ex-> suppose we need index of 22, of for that we divide 22 by the length of column in matrix which is like 22/3 = 7th Index; 

Col -> we used modulo for finding the column number of perticular element because  ("number"%n = 0 -> n-1) it means modulo of n with any number will give the result from 0 to n-1 ;  
for ex-> if we do 22 % 3 then the result will be between 0 to 2 so that's the logic behind using modulo and division.
*/ 