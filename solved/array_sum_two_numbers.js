// Get the two numbers from the array that sum to the 26
const arr = [2, 4, 7, 8, 11, 15, 17]

// 1) Two for loops >>> Traditional
// const getSum = (arr, sum) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// 2) AL solution
// const getSum = (arr, sum) => {
//   for (let i = 0; i < arr.length; i++) {
//     let num1 = arr[i]
//     let num2 = sum - num1
//     if (arr.includes(num2)) {
//       return [num1, num2]
//     }
//   }
// }

// 3) My own solution
// const getSum = (arr, sum) => {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     let value = sum - key;
//     if (obj[value]) {
//       return [key, value]
//     }
//     obj[key] = value
//   }
// }

// console.log(getSum(arr, 12));

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}