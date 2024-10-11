/*
Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes 
arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

Example 1:

Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}
Explanation:
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
  const res = await limited(...inputs)
  result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
  result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output

The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
* */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

  return async function (...args) {
    return new Promise(async (res, rej) => {
      let timeoutId = setTimeout(() => {
        rej("Time Limit Exceeded")
      }, t);
      try {
        const result = await fn(...args)
        clearTimeout(timeoutId)
        res(result)
      } catch (error) {
        rej(error)
      }
    })
  }
};


const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 200);
limited(150).then(console.log).catch(console.log) // "Time Limit Exceeded" at t=100ms

// Try Some Thing
// const fn = async (n) => {
//   const re = await new Promise(res => setTimeout(res, 5000));
//   console.log(re);
//   console.log("object");
//   return n * n;
// }

// console.log(fn(5).then(res => {
//   console.log("object111111");
//   console.log(res.PromiseState)
// }));