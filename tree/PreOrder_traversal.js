// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below
let arr = []
function PreorderTraversal(root){
   arr.push(root.val);
   if(root.left != null){
       PreorderTraversal(root.left)
   }
   if(root.right != null){
       PreorderTraversal(root.right)
   }
   return arr;
}
