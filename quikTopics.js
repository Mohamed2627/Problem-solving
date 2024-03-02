
///////////////////////////// This keyword

// // var firstName = 'tttt'
// // var lastName = 'ppppp'

// const student = {
//     name: 'Mohamed',
//     study: function () {
//         // study: () => {
//         setTimeout(() => {
//             console.log(this)  // this here depends on the scope of the arrow function.
//         }, 2000)
//     }
// }

// function study() {
//     // study: () => {
//     setTimeout(() => {

//         console.log(this)
//     }, 2000)
// }

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     // fullName: () => {
//     fullName: function () {
//         // console.log(this.firstName)
//         // setTimeout(() => {
//         console.log(this)
//         // student.study()
//         study()
//         // window.setTimeout(function () {
//         //     console.log(this)
//         //     console.log(this.firstName + " " + this.lastName)
//         // }, 2000)
//         // return this.firstName + " " + this.lastName;
//     }
// };

// person.fullName();


//////////////////////////////////////// call, bind and apply

// function calc(bonous, ...bonous2) {
// function calc(bonous, bonous2) {
//     console.log(bonous, bonous2)
//     this.salary += bonous
//     console.log(this.salary);
//     // console.log(500 + [[1000, 500]])
// }

// const employee1 = {
//     name: 'Mohamed',
//     salary: 1000
// }

// const employee2 = {
//     name: 'Ahmed',
//     salary: 2000
// }

// // calc.call(employee1, 500, 1000)
// // calc.apply(employee2, [1000, 4000, 5000, 6000])
// const hardBindingCalc = calc.bind(employee2, 1000);  // 1000 is always still a first parameter;
// hardBindingCalc(500); // 500 here is the second parameter
// hardBindingCalc.call(employee1, 500); // employee2 is still always this context for the function;


///////////////////////////////////////////  Shifting (<<) & Bitwise Operator in JavaScript

// let a = 4;
// console.log(a & 1)

// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
// }

//////////////////////////////////////////////////////////////////


