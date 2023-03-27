function KnightShortestPath(sx,sy,tx,ty){
    if(sx==tx&&sy==ty) return 0;

    let visited = [];
    for(let i = 0; i<8; i++){
        visited[i] = new Array(8).fill(false)
    }
    
    let queue = [];
    queue.push([sx,sy]); // initial value
    visited[sx][sy] = true;
    
    let ans = 0;
    
    // BFS 
    while(queue.length){
        let size = queue.length;
        ans++;
        
        // traversing all possible adjacent positions
        while(size--){
            let front = queue.shift();
            
            let xx = front[0];
            let yy = front[1];
            
            // possible ways to traverse
            let ax = new Array(8)
            let ay = new Array(8)
            
            ax = [1,1,-1,-1,2,-2,2,-2];
            ay = [2,-2,2,-2,1,1,-1,-1];
            
            // traversing to the new possible positions
            for(let i = 0; i<8; i++){
                let newX = xx + ax[i];
                let newY = yy + ay[i];
                
                if(newX==tx && newY==ty) return ans;
                
                if(isValid(newX,newY,visited)){
                    queue.push([newX,newY])
                    visited[newX][newY] = true;
                }
            }
        }
    }
    return -1;
}
function isValid(i,j,visited){
    if(i>=0 && i<8 && j>=0 && j<8 && visited[i][j] == false){
        return true;
    }
    return false;
}