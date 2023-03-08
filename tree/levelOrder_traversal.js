// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

function levelOrderTraversal(root){
        let ans = [[]];
        let index = 0;
        let queue = [];
        queue.push(root);
        queue.push(null);
            while(queue.length){
                let temp = queue.shift();
                
                if(temp == null){
                    if(queue.length){
                    queue.push(null);
                    ans.push([]);
                    index++;
                    }
                }else {
                    ans[index].push(temp.val);
                    
                    if(temp.left != null) queue.push(temp.left)
                    
                    if(temp.right != null) queue.push(temp.right)
                }
            }
            return ans;     
}