// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
    // finding the minimum string to loop through it
    let minStr = strs.sort((a, b) => a.length - b.length)
    minStr = minStr[0];
    let prefix = ""
    // looping through the minimum string
    for (let i = 0; i < minStr.length; i++) {
        for (let str of strs) {
            if (str[i] != minStr[i]) {
                return prefix
            }
        };
        prefix += minStr[i];
    }
    return prefix
}

// let result = longestCommonPrefix(["flower","flow","flight"]);
let result = longestCommonPrefix(["dog","racecar","car"]);
console.log(result)