//Given a spiral traversed arr in which we need to get the sum of diagonals imaginig the original matrix.
//approach -> in the spiraly travesed array the diagonal elements are placed at a certain distance and there is pattern of loop in that.. 
// Starting with finding the gap in the 0th row by sustituting 2 from the total elements in the row.. 
// Then run a loop for 5 time only for first time;
// Then run a loop for 4 time only for rest of the iteration;
// keep the index from 0 and update in the loop by (gap + 1) by which we can directly jump to the upcomming diagonla element.
// after every cycle (end of loop) we update gap by subtratng -2 from it to get in the inner row for every iteration.  
function countElement(n, arr) {
    let sum = 0;
    let gap = n;
    let index = 0;
    let flag = true; // Handle the while loop 
    let indexFlag = true; // Handle the loop count and first element without updating index value;
    while (flag) {                                          // 9 -> 3  gap = 3-2 = 1 
        gap = gap - 2; // -1
        if (gap < 0) gap = 0;
        if (gap < 2) flag = false;

        let i = indexFlag ? 5 : 4;
        if (n == 1) i = 1;

        for (let j = 0; j < i; j++) { // O(1)
            if (arr[index] == undefined) break; // get out of scop 

            if (indexFlag) {  // runs only for 1st element
                sum += arr[index];
                indexFlag = false;
            }
            else {
                index += gap + 1;
                if (arr[index] == undefined) break;
                sum += arr[index];
            }
        }
    }
    console.log(sum)
}

