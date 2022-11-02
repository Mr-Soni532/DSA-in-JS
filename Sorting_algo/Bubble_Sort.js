let arr = [1,2,5,3,9,7,1,8,4,3,5,67,4,7,6,2,2,222,2,1,1,1,1,66,6,5,76,7,7,7,8]
for (let i = 0; i < arr.length-2; i++) {
    for (let j = 0; j < arr.length-i; j++) {
        if(arr[j]>arr[j+1])
        {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }    
    }    
}
console.log(arr)

