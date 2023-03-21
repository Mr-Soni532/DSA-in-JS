/*
0-1-2-3-1 these are the nodes of a graph showing the realtion with each other. By Adjacency List we can check which node is connect with other nodes.
*/ 
let nodes = [
    [0, 1], [1, 2], [2, 3], [3, 1]
];

function AdjacencyList(nodes){
    let obj = {};
    for(a of nodes){
        obj[a[0]]? obj[a[0]].push(a[1]) : obj[a[0]] = [a[1]]
        obj[a[1]]? obj[a[1]].push(a[0]) : obj[a[1]] = [a[0]]
        
    }
    console.log(obj)
}

AdjacencyList(nodes)
