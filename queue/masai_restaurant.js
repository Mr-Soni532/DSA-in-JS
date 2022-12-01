//https://oj.masaischool.com/contest/6267/problem/18
function check(arr){
    let queue = [];
    let rear = 0;
    let front = 0;
    for(let i = 1; i<arr.length; i++){
   
     let el = arr[i].split(" ")
     if(el[0] == '2'){
         queue[rear] = el[1];
         rear++;
     } else {
         if(rear === front) {
             console.log('No Food')
         } else {
         console.log(queue[rear-1])
             rear--;
         }
     }
     
    }
 }