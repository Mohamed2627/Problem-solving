// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

(function removeDuplicates() {
    // return [...new Set(string)].join('');
    // console.log([...new Set("aaaaaaaaa")].join(''));
    // console.log(new Set("aaaaaaaaa"));
    let e = {r: 3, t: 6}
    for (let i in e) {
        console.log(i, e[i])
    }
})()

var findAnagrams = function(s, p) {
    // s = [...new Set(s)].join('');
    // p = [...new Set(p)].join('');
    let result = []
    for (let i = 0; i <= s.length - p.length; i++) {
        if (p.includes(s[i])) {
            let newP = p.replace(s[i], "");
            // console.log(newP)
            let newS = s.slice(i+1, i+1+newP.length)
            // console.log(newS)
            let resultP = newP;
            // console.log(resultP)
            for (let n = 0; n < newP.length; n++) {
                console.log(resultP.includes(newS[n]))
                if (resultP.includes(newS[n])) {
                    resultP = resultP.replace(newS[n], "")
                }
            }
            console.log(newP)
            // console.log(resultP)
            if (resultP == "") {
                result.push(i)
            }
        }
    }
    return result
};

// let result = findAnagrams("cbaebabacd", "abc")
let result = findAnagrams("abab", "ab")
// let result = findAnagrams("aaaaaa")
console.log(result)
