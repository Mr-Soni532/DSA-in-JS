let n = [1,4,4,5];
let m = [3, 4, 5];
let i = 0,j = 0;
let result = [];
while (i < n.length || j < m.length) {
  if (n[i] != m[j]) {
      (n[i] < m[j])? i++: j++;
      continue;
  } else {
      result.push(n[i]);
      m[j] == null;
      j++,i++;
  }
}
console.log(result)