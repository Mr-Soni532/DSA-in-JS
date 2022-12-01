// https://oj.masaischool.com/contest/6267/problem/10
function check(size,str){
    let stack = [];
     for(let i = 0; i<size; i++){
         if(stack.length == 0 || stack[stack.length-1] !== str[i]){
             stack.push(str[i]);
         } else if(stack[stack.length-1] === str[i]){
             stack.pop();
         }
     }
     console.log(stack.length ? stack.join("") : -1)
}