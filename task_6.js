function sumAB(a,b) {return a+b};
sumAB (1,2);                  //сумма двух чисел



function checkName() {
    const name = prompt("Enter name");
    if (name === 'Christina') {
        return true;
    } else {return false}
}
if ( checkName() ) alert('Hello' + ' ' + 'Christina'); else {
    alert( 'Mistake' );
}

function checkName() {
    let userName
    {
      username = prompt('Your name?')
        if (userName === 'Christina')     {
            return console.log('Hello Christina')
        }    else {
            return console.log('Ha20llo')
        }
    }                                               // проверка имени


const onlyEven = arr => arr.filter(x => x % 2 === 0)

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(onlyEven(data))

function filter.data{
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    data.filter(x => x % 2 === 0);

                                                   // вывод только четных
}
console.log(filter.data)


function typeOfElement (z) {
    return typeof(z)
}
console.log (typeOfElement(222))
console.log (typeOfElement(true))
console.log (typeOfElement('true'))  // вычисление типа аргумента и вывод в консоль

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
console.log (checkAge(12));


function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');

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


function Longest_Country_Name(country_name)
{
    return country_name.reduce(function(lname, country)
        {
            return lname.length > country.length ? lname : country;
        }
        )
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))










