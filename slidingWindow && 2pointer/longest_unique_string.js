function cal(str){
    let obj = {};
    let max_length = 0;
    let start = 0;
    for(i in str){
        if(str[i] in obj){
            //shift start to the next duplicate value;
            // using max to prevent start to go back from the current position 
            // start should always move forward.
            start = Math.max(start, obj[str[i]] + 1);
        }
        obj[str[i]] = i; //updating obj
        max_length = Math.max(max_length, i-start+1); 
        // max length is basically the length of the window which is start -> i
    }
    console.log(max_length);
}