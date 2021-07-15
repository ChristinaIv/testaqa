let arr = ['One', 'two', 'three'];
let str = arr.join(',');
console.log(str);      // массив в строку

let str = 'One,two,three';
let arr = str.split(',');
console.log(arr); // строка в массив

let array = ["1", "2", "3"],
    object = Object.assign(...array.map(k => ({ [k]: true })));  // числовой массив в boolean??? непонятно

let array = ["1","2","3"];
let secondarray = (Boolean(array)) ;
console.log (typeof (secondarray));