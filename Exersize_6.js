arr = [23, 23, 23, 23, 23, 23];
a = true;
for (i=0; i<arr.length -1 && a !== false; i+=1){
  if (arr[i] === arr[i+1]){
    a=true;}
  else {a = false;}}

console.log(a);
