// https://oj.masaischool.com/contest/6267/problem/14
function check(arr){
    let queue = [];
    let rear = 0;
    let front = 0;
    for(let i = 1; i<arr.length; i++){
        
     if(arr[i][0] === 'E'){
         let el = arr[i].split(" ")
         queue[rear] = el[1];
         rear++;
     } else {
         if(front === rear) {
             console.log('Empty')
         } else {
         console.log(queue[front])
         front++;
         }
     }
     
    }
 }