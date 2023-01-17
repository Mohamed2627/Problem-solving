// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

var searchInsert = function(nums, target) {
    if (nums.includes(target)){
        return nums.indexOf(target);
    }
    else if (target < nums[0]) {
        return 0;
    }
    else if (target > nums[nums.length-1]) {
        return nums.length;
    }
    else {
        for (let i = 0; i < nums.length; i++) {
            if((target > nums[i]) && (target < nums[i+1])) {
                return i+1;
            }
            
        }
    }
    
};

// let result = searchInsert([1,3,5,6], 5)
// let result = searchInsert([1,3,5,6], 2)
let result = searchInsert([1,3,5,6], 7);
console.log(result);