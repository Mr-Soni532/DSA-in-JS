//https://oj.masaischool.com/contest/6267/problem/01

function check(n,arr){
    let stack = [0];
    let ans = [1];
    for(let i = 1; i<n; i++){
        while(arr[stack[stack.length-1]] <= arr[i]){
            stack.pop();
        }
        let peak = stack.length === 0 ? -1 : stack[stack.length-1]
        ans.push(i-peak)
        stack.push(i)           
    }
    console.log(ans.join(" "))
    }