//https://oj.masaischool.com/contest/6267/problem/17
function check(arr){
    let stack = [];
   let queue = [];
   let rear = 0;
   let front = 0;
   for(let i = 1; i<arr.length; i++){
  
    let el = arr[i].split(" ").map(Number)
    switch(el[0]){
        case 1: queue[rear++] = el[1]
        break;
        case 2: stack.push(el[1])
        break;
        case 3: console.log(rear == front ? '-1' : queue[front])
        break;
        case 4: console.log(stack.length ? stack[stack.length-1] : -1)
        break;
        case 5: stack.push(queue[front++])
    }
    
   }
}
