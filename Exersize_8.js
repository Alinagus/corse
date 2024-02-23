let map = new Map([
  ["1", "string"],  
  [1, "number"], 
  [true, "boolean"]]);
  console.log(map);
  for (let name of map.keys()){
    console.log('Ключ -', name, ', значение -', map.get(name));}
