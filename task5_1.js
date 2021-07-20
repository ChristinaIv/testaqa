const arr = ['One', 'two', 'three'];
const str = arr.join(',');
console.log(str);      // массив в строку

const str = 'One,two,three';
const arr = str.split(',');
console.log(arr); // строка в массив


const array = ["1","2","3"];
const secondarray = (Boolean(array)) ;
console.log (typeof (secondarray));

[1,2,3,4,5,6].map((e, i, arr) => { return Boolean (e)};