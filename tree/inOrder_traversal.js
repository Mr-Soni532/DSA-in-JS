// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below
let arr = [];
function inorderTraversal(root){
   if(root.left != null){
       inorderTraversal(root.left)
   }
    arr.push(root.val);
   if(root.right != null){
       inorderTraversal(root.right)
   }
   return arr;
}