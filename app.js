console.log('Start app.js');

//////////////// Bagian Pertama
/*
//Function Statement
function greet() {
    console.log('Hi');
}
greet();

//Function Are First Class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

//Function Expression
var greetMe = function(){
        console.log('Hello Yogi');
}

greetMe();

//Its a first class
logGreeting(greetMe);

//use a function expression on the fly

logGreeting(function () {
    console.log('Hai mas Yogi');
});*/


//Require File greet
/*var greet = require('./greet');

greet();*/

/*
//Learn about Object

var person = {
    firstName: 'Yogi',
    lastName: 'Indragiri',
    greet: function () {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
}

person.greet();

console.log(person.firstName);
console.log(person['lastName']);*/


/*
//Learn about prototype inheritence , function constructor

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function () {
    console.log('Hello, ' + this.firstName +' '+ this.lastName );
}

var yogi = new Person('Yogi', 'Indragiri');
console.log(yogi);
yogi.greet()
*/

/*
//Learn Javascrip Aside by reference & By Value

//Pass by Value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

//Pass by Reference
function changeObj(d) {
    d.prop1 = function () {

    };
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);*/

/*
//Invoke function expression

(function (lastName) {

    var firstName = 'Yogi';
    console.log(firstName);
    // console.log(lastName)

}('Indragiri'));

var firstName = 'Kuan';

console.log(firstName);*/



////////////////////////
// Advance Require with json require
var greet = require('./greet');

greet.english();
greet.spanish();