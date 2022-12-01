//https://oj.masaischool.com/contest/6267/problem/04

function test(n,arr){
    let ans = [];
    let stack = [];
      for(let i = n-1; i>=0; i--){
        while(stack.length != 0 && stack[stack.length-1]>=arr[i]){
            stack.pop();
        }
        if(stack.length == 0) {
            ans.push(0)
            stack.push(arr[i])
        } else {
            ans.push(stack[stack.length-1]);
            stack.push(arr[i])
        }
    }
    let sum = 0;
    for(a of ans) sum+= a;
    console.log(sum)
  }