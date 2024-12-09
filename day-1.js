'use strict';
// //programming use scope 

// const calAge = function(birthYear){
//     const age = 2024 - birthYear;
//     console.log(myFullname);
//         function callAge(){
//             let  output = `${myFullname}  My birth year is ${birthYear} and my age is ${age}`;
//             console.log(output)
//             if(birthYear >= 1994){
//                 const str = 'oh, you are the real poor';
//                 console.log(str);
//                 function add (a,b){
//                     return a+b;
//                 }
//                 console.log(add(10,49))
//             }
//         };
//         // out the if scop
//         callAge();
//     return age;
// };

// const myFullname = 'samour chandra paul';
// console.log(calAge(2005));

// console.log(addNumber(3,4))

// function addNumber(a,b){
//     return a+b;
// }

// const calNumber = function (a,b){
//     return a+b;
// }

// const arr = (a,b) => a+b;
// console.log(arr(1,5))


// console.log(calNumber(3,4))
// var x = 5 ;
// var samour = function (a,b){
//     return a+b;
// }
// console.log(window.x)

// console.log(this)

// const fullNamefun = function (){
//     console.log('hello this is samour chandra paul')
//     console.log(this)
// }
// const lastFullName = hello => console.log(`hello this is ${hello} and the kyeword is ${this}`);
// fullNamefun();
// lastFullName();

// const myInformation = {
//     fristName : 'samour',
//     lastName : 'chandra paul',
//     age:20,
//     intro : function(){
//         console.log(`Hello my name is ${this.fristName}${this.lastName} and i'm ${this.age}year old`)

//     }
// };

// myInformation.intro();

// const frindInformations = {
//     fristName: 'mujjammel',
//     lastName: 'shovo',

// }
// console.log('hello this samour chandra paul i am a fullstake ')
// frindInformations.intro = myInformation.intro;

// frindInformations.intro();

const samour2020 ={
    fullName: 'samour chnadra',
    age: 15 ,
    from: 'patuakhali',
    family: ['mother','father','brother'],
}


const samourMarrid = Object.assign({},samour2020);
samourMarrid.family.push('Wife')

console.log('frist',samour2020);
console.log('second',samourMarrid)
