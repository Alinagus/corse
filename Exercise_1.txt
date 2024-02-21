const result = +prompt('Введите любое число', '');
if (typeof result !== 'number' || isNaN(result)) {
  alert('Упс, кажется, вы ошиблись');
} 
else if (result % 2 === 0) {
  alert('Число четное');
} 
else {
  alert('число нечетное');
}
function nan(result) {
  if (isNaN(result)) {
    return 'Not a Number!';}
    return 'It is Number';
} alert(nan(result));

