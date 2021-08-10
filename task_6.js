function sumAB(a,b) {return a+b};
sumAB (1,2);


function sum(a){
    return function(b){
        return a + b;
    }
}

console.log(sum(5)(6));         //сумма двух чисел

function checkName(name) {
    if (name === 'Christina') {
        return true;
    }
}

let name = prompt('Enter name');

if ( checkName(name) ) {
    alert( 'Hello' + ' ' + name );
} else {
    alert( 'Mistake' );
}                                                   // проверка имени


const onlyEven = arr => arr.filter(x => x % 2 === 0)

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(onlyEven(data))            // вывод только четных

function typeOfElement (z) {
    return typeof(z)
}
console.log (typeOfElement(222))
console.log (typeOfElement(true))
console.log (typeOfElement('true'))  // вычисление типа аргумента и вывод в консоль

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
console.log (checkAge())

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));


function alphabet_order(str)
{
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));











