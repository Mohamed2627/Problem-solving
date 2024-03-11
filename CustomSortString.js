/*
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.
Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.
Return any permutation of s that satisfies this property.
Example 1:
Input:  order = "cba", s = "abcd" 
Output:  "cbad" 
Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
Example 2:
Input:  order = "bcafg", s = "abcd" 
Output:  "bcad" 
Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.
Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.
*/

/**
 * 
 * @param {*} order 
 * @param {*} s 
 * @returns 
 */

var customSortString = function (order, s) {

  let newS = '';
  let restS = '';
  let sObj = {}

  for (let i = 0; i < s.length; i++) {
    if (!sObj[s[i]]) {
      sObj[s[i]] = 1
    } else {
      sObj[s[i]] += 1
    }
  }

  for (let i = 0; i < order.length; i++) {
    if (s.includes(order[i])) {
      newS += (order[i].repeat(sObj[order[i]]));
      for (let j = 0; j < sObj[order[i]]; j++) {
        if (restS.length === 0) {
          restS = s.replace(order[i], '')
        } else {
          restS = restS.replace(order[i], '')
        }
      }
    }
  }

  return `${newS}${restS}`

};

console.log(customSortString("kqep", "pekeq"))



