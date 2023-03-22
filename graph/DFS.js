//! Depth First Search
let nodes = [
    [0, 2], [2, 1], [1, 3], [3, 4], [4, 2]
];
const n = 5; // number of nodes

function DFS_traversal(node,adjList,visited,component ) {
    component.push(node);
    visited[node] = true;

    // Recursive call for all connected nodes, which are not visited
    for(el of adjList[node]){
        if(!visited[el]){
            DFS_traversal(el,adjList,visited,component)
        }
    }

}


function printNodes(nodes, n) {
    let adjList = [];
    let visited = [];
    let ans = [];

    // Initializing adjList and Visited 
    for (let i = 0; i < n; i++) {
        adjList[i] = [];
        visited[i] = false;
    }

    // Creating Adjacency List 
    for (let node of nodes) {
        adjList[node[0]].push(node[1])
        adjList[node[1]].push(node[0])
    }

    // traversing all nodes, covering the case of Discontinued Graph
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let component = [];
            DFS_traversal(i, adjList, visited, component)
            ans.push(component)
        }
    }
    console.log(ans)
}
printNodes(nodes,n)