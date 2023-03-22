//!  Breadth First Search - Print all distinct nodes

let nodes = [
    [0, 3], [3, 1], [1, 2], [1, 4]
];
const n = 5; // number of nodes

// Creating a Adjacency List for given nodes
function AdjacencyListByArray(nodes, n) {
    let adjList = [];
    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }
    for (a of nodes) {
        adjList[a[0]].push(a[1])
        adjList[a[1]].push(a[0])
    }
    return adjList;
}


//=========| BFS TRAVERSAL |
function bfs_traversal(adjList,visited,ans,node) {
    let queue = [];
    queue.push(node);
    visited[node] = true;
    
    while(queue.length){
        let frontNode = queue.shift();

        // store frontNode in ans
        ans.push(frontNode);
        // traverse all neighbours of frontNode
        for(a of adjList[frontNode]){
            if(!visited[a]){
                queue.push(a)
                visited[a] = true;
            }
        }
    }
}

// Main Function
function printNodesOfGraph(nodes, n) {
    let adjList = AdjacencyListByArray(nodes, n);
    let visited = new Array(n).fill(false)
    let ans = [];

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs_traversal(adjList, visited, ans, i)
        }
    }

    console.log(ans)
}

printNodesOfGraph(nodes, n)