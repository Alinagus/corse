arr = [233, 230, 53, 23, 0, 2323, 0];
a = 0;
b=0; 
c=0;
for (i=0; i<arr.length && a !== false; i+=1){
  if (arr[i]===0){
    c += 1;
}
  else if (arr[i] % 2 === 0){
    a+=1;
}
  else{
    b += 1;
}}
console.log('В данном массиве четных чисел:', a, 'Количество неетных чисел', b, 'Количество 0 в массиве', c);
