function cirTraversal(matrix,N) {
    //indexs
    let topRow = 0;
    let rightCol = N - 1;
    let bottomRow = N - 1;
    let leftCol = 0;
    let bag = ""
    
        //bottom to top
        for (i = bottomRow; i >= topRow; i--) {
             bag += (matrix[i][leftCol])+" "
        }
        leftCol++;
        
        // left to right
        for (i = leftCol;  i <= rightCol; i++) {
            bag += (matrix[topRow][i])+" "
        }
        topRow++;
        
        //top to bottom
        for (i = topRow; i <= bottomRow; i++) {
            bag += (matrix[i][rightCol])+" "
        }
        rightCol--;
        
        //right to left
        for (i = rightCol;  i >= leftCol; i--){
                 bag += (matrix[bottomRow][i])+" "
        }
        console.log(bag)
    }
    