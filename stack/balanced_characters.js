//https://oj.masaischool.com/contest/6267/problem/09

function check(size,str){
    let symbol = {};
    let small = 'abcdefghijklmnopqrstuvwxyz'
    let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0; i<26; i++){
          symbol[small[i]] = cap[i];
    }
    let stack = [];
    let flag = true;

    for(let i = 0; i<str.length; i++){
        if((str[i]>='A' && str[i]<='Z')&&stack.length !=0){
        let open = stack[stack.length-1];
        let close = symbol[open];
        
            if(str[i] === close){
                stack.pop();
            } else {
                flag = false;
                break;
            }
        } 
        if(str[i]>='a' && str[i]<='z'){
            stack.push(str[i])
        } 
    }
    
    if(stack.length != 0) flag = false;
    console.log(flag ? "True" : 'False')
}