/**
A binary tree is named Even-Odd if it meets the following conditions:

The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.
 */

/**
 * @param {Array} root 
 * @returns 
 */

var isEvenOddTree = function (root) {
  let filteredRoot = []
  for (let i = 0; i < root.length; i++) {
    if (root[i]) filteredRoot.push(root[i])
  }
  let map = {};
  if (filteredRoot.length === 0) return false;
  let level = 0;
  let i = 0;
  let isEvenOddTree = true
  while (i < filteredRoot.length - 1) {
    map[level] = filteredRoot.slice(i, i + level + 1)
    i = i + level + 1
    level++
  }

  for (let [level, nums] of Object.entries(map)) {
    if (level % 2 == 0) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 1 || (nums[i + 1] && (nums[i] >= nums[i + 1]))) {
          isEvenOddTree = false;
          break;
        }
      }
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0 || (nums[i + 1] && (nums[i] <= nums[i + 1]))) {
          isEvenOddTree = false;
          break;
        }
      }
    }
  }

  return isEvenOddTree

};


// console.log(isEvenOddTree([1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2]))
console.log(isEvenOddTree([5, 9, 1, 3, 5, 7]))