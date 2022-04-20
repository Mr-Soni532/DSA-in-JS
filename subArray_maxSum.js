function maxSubSum() {
    arr = [-1, 2, 3, -9];
    max = 0;
    let sum = 0;
    for (let item of arr) {
      sum += item;
      max = Math.max(sum, max);
      if(sum < 0) sum = 0;
    }
    return max;
  }
console.log(maxSubSum())