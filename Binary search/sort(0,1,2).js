let n = [0, 1, 0, 2, 1];
// let n = [0, 1, 0, 0, 1];
let i = 0;
let a = 0 // For accessing the past elements of array in loop
let j = n.length - 1; //
while (i <= j) {
  if (n[i] == 0) {
    let temp = n[i];
    n[i] = n[a];
    n[a] = temp;
    i++;
    a++;
  } else if (n[i] == 1) {
    i++;
  } else {
    let temp = n[i];
    n[i] = n[j];
    n[j] = temp;
    j--;
  }
}
// while ((i <= j)) {
//   if (n[i] == 0) {
//     i++;
//     console.log('i')
//   } else if (n[j] == 1) {
//     j--;
//     console.log('j')
//   } else {
//     console.log('swap')
//     let temp = n[i];
//     n[i] = n[j];
//     n[j] = temp;
//     i++;
//     j--;
//   }
// }

console.log(n);
