/*
Minimum Operations to Reduce X to Zero

You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

Example 1:

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
Example 2:

Input: nums = [5,6,7,8,9], x = 4
Output: -1
Example 3: 

Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

// const minOperations = (nums, x) => {
//   let sumOfNums = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   let target = sumOfNums - x;
//   if (target <= -1) {
//     return -1
//   }
//   else if (x == 0) {
//     return 0
//   }
//   else if (target == 0) {
//     return nums.length
//   } else if (x < nums[0] && x < nums[nums.length - 1]) return -1

//   let sum = 0;
//   let left = 0;
//   let right = 0;
//   let longest = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (sum < target) {
//       sum = sum + nums[right];
//       right++;
//     }
//     if (sum > target) {
//       sum = sum - nums[left]
//       left++;
//     }
//     if (sum == target) {
//       longest = longest > nums.slice(left, right).length ? longest : nums.slice(left, right).length
//       sum = sum - nums[left]
//       left++;
//     }
//   }

//   return nums.length - longest

// Try #2
/**************
let sumOfNums = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let sumOfRestNumbers = sumOfNums - x;
if (sumOfRestNumbers <= -1) return -1;
let left = 0;
let right = nums.length;
let leftSum = sumOfNums
let rightSum = sumOfNums
// let isLeftAllowed = true
// let isRightAllowed = false
for (let i = 0; i < nums.length; i++) {
  // if (isLeftAllowed) maxSum = maxSum - nums[left];
  // if (isRightAllowed) maxSum = maxSum - nums[right];
  if (maxSum == sumOfRestNumbers) break;
  if ((maxSum > sumOfRestNumbers) && isLeftAllowed) {
    left++
  } else if (maxSum < sumOfRestNumbers || isRightAllowed) {
    if (isLeftAllowed) {
      isLeftAllowed = false
      left--
      maxSum = maxSum + nums[left]
    }
    if (!isRightAllowed) isRightAllowed = true
    right--
  }
}

let arr = nums.slice(left, right + 1)
return nums.length - arr.length 
*********************/

// Copied #
/**************
let n = nums.length;
let sum = 0;
let mp = new Map(); // <sum, pos>

for (let i = 0; i < n; ++i) {
  sum += nums[i];
  mp.set(sum, i);
}

if (x > sum) { // Sum out of range
  return -1;
}

mp.set(0, 0);
let longsubarray = 0;
sum -= x;
let val = 0;

for (let i = 0; i < n; ++i) {
  val += nums[i];
  if (mp.has(val - sum)) {
    if (val - sum === 0) {
      longsubarray = Math.max(longsubarray, i - mp.get(val - sum) + 1);
    } else {
      longsubarray = Math.max(longsubarray, i - mp.get(val - sum));
    }
  }
}

return longsubarray === 0 ? (sum === 0 ? n : -1) : n - longsubarray;
*********************/
// }


// Try #1
/*
const minOperations = (nums, x) => {
  let countOperations = 0;

  const removeFirst = () => {
    x -= nums[0]
    countOperations++
    nums.shift()
  }

  const removeLast = () => {
    x -= nums[nums.length - 1]
    countOperations++
    nums.pop()
  }

  while (true) {
    // while (countOperations < 113) {

    let isLeftAllowed = true;
    let isRightAllowed = true;

    if (x === 0) {
      return countOperations
    }

    if ((x && !nums.length)) return -1

    if ((x < nums[0] && x < nums[nums.length - 1])) return -1

    if (x < nums[0]) isLeftAllowed = false
    if (x < nums[nums.length - 1]) isRightAllowed = false

    if (isLeftAllowed || isRightAllowed && nums[0] > nums[nums.length - 1]) {
      if (nums[nums.length - 2] > (nums[0] + nums[1])) removeLast()
      else if (nums[2] > (nums[nums.length - 3] + nums[nums.length - 2] + nums[nums.length - 1])) removeFirst()
      else {
        if ((x >= nums[0]) && isRightAllowed && ((x - nums[0]) <= (x - nums[nums.length - 1]))) removeFirst()
        else if ((x >= nums[nums.length - 1]) && isLeftAllowed && ((x - nums[nums.length - 1]) < (x - nums[0]))) removeLast()
        else if ((x >= nums[0]) && !isRightAllowed) removeFirst()
        else if ((x >= nums[nums.length - 1]) && !isLeftAllowed) removeLast()
      }
    }
    else if (isLeftAllowed || isRightAllowed && nums[0] < nums[nums.length - 1]) {
      if (nums[1] > (nums[nums.length - 1] + nums[nums.length - 2])) removeFirst()
      else if (nums[nums.length - 3] > (nums[0] + nums[1] + nums[2])) removeLast()
      else {
        if ((x >= nums[0]) && isRightAllowed && ((x - nums[0]) <= (x - nums[nums.length - 1]))) removeFirst()
        else if ((x >= nums[nums.length - 1]) && isLeftAllowed && ((x - nums[nums.length - 1]) < (x - nums[0]))) removeLast()
        else if ((x >= nums[0]) && !isRightAllowed) removeFirst()
        else if ((x >= nums[nums.length - 1]) && !isLeftAllowed) removeLast()
      }
    }


    console.log(x)
    console.log(nums)
    console.log(countOperations)
  }
};
*/

// Try #3   Accepted
const minOperations = (nums, x) => {

  if (x == 0) return nums.length;
  if (x < nums[0] && x < nums[nums.length - 1]) return -1

  let arrSum = 0;
  for (let i of nums) {
    arrSum = arrSum + i
  }
  let targetSum = arrSum - x;
  if (targetSum < 0) {
    return -1
  }
  let leftIndex = 0
  let subSum = 0
  let maxLength = 0
  for (let i = 0; i < nums.length; i++) {
    subSum = subSum + nums[i]
    while (subSum > targetSum) {
      subSum = subSum - nums[leftIndex]
      leftIndex++
    }

    if (subSum && subSum === targetSum) {
      maxLength = nums.slice(leftIndex, i + 1).length > maxLength ? nums.slice(leftIndex, i + 1).length : maxLength
    }
  }

  if (subSum < 0) {
    return -1
  }

  return nums.length - maxLength
}
// console.log(minOperations([10, 1, 1, 1, 1, 1], 5))
// console.log(minOperations([1, 1, 4, 2, 3], 5))
console.log(minOperations([5, 6, 7, 8, 9], 4))
// console.log(minOperations([5207, 5594, 477, 6938, 8010, 7606, 2356, 6349, 3970, 751, 5997, 6114, 9903, 3859, 6900, 7722, 2378, 1996, 8902, 228, 4461, 90, 7321, 7893, 4879, 9987, 1146, 8177, 1073, 7254, 5088, 402, 4266, 6443, 3084, 1403, 5357, 2565, 3470, 3639, 9468, 8932, 3119, 5839, 8008, 2712, 2735, 825, 4236, 3703, 2711, 530, 9630, 1521, 2174, 5027, 4833, 3483, 445, 8300, 3194, 8784, 279, 3097, 1491, 9864, 4992, 6164, 2043, 5364, 9192, 9649, 9944, 7230, 7224, 585, 3722, 5628, 4833, 8379, 3967, 5649, 2554, 5828, 4331, 3547, 7847, 5433, 3394, 4968, 9983, 3540, 9224, 6216, 9665, 8070, 31, 3555, 4198, 2626, 9553, 9724, 4503, 1951, 9980, 3975, 6025, 8928, 2952, 911, 3674, 6620, 3745, 6548, 4985, 5206, 5777, 1908, 6029, 2322, 2626, 2188, 5639], 565610))