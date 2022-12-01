//https://oj.masaischool.com/contest/6267/problem/16
//! Not accepted

function check(str) {
    let stack = [];
    let queue = [];
    let ans = [];
    let front = 0;
    let rear = 0;
  
    for (let i = 0; i < str.length; i++) {
  
      let hashMap = {}; // check for repeat gifts
      for (let j = 0; j <= i; j++) {
        hashMap[str[j]] = hashMap[str[j]] ? 'true': 'false';
      }
  
      if (stack.length == 0) { // first element
        stack.push(str[i])
        ans.push(stack[stack.length - 1])
      }
      else if (stack[stack.length - 1] !== str[i]) { // another unique
        ans.push(stack[stack.length - 1])
        if (hashMap[str[i]] == 'false') {
          queue[rear] = str[i];
          rear++;
        }
      } 
      else if (stack[stack.length - 1] === str[i]) { // repeat
        stack.pop();
          while(hashMap[queue[front]] === 'true' && front != rear){
            front++;
          }
          if (front == rear) 
          ans.push("#")
          else {
            stack.push(queue[front++]);
            ans.push(stack[stack.length - 1])
          }
      }
    }
    console.log(ans.join(""))
  }
  